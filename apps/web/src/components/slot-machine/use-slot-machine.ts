//* Libraries imports
import { useCallback, useMemo, useRef, useState } from "react"

//* Constants imports
import {
  BET_AMOUNT,
  INITIAL_BALANCE,
  SLOT_CONFIG,
} from "@/lib/slot-machine/config"
import { calculateTheoreticalRtp } from "@/lib/slot-machine/calculate-theoretical-rtp"
import { spin as executeSpin } from "@/lib/slot-machine/spin"

//* Types imports
import type { HouseProfitPoint, SlotSymbol, SpinResult } from "@/lib/slot-machine/types"

const SPIN_DURATION_MS = 1500

export function useSlotMachine() {
  const [balance, setBalance] = useState(INITIAL_BALANCE)
  const [isSpinning, setIsSpinning] = useState(false)
  const [displayReels, setDisplayReels] = useState<SlotSymbol[]>([
    "cherry",
    "lemon",
    "orange",
  ])
  const [lastPayout, setLastPayout] = useState(0)
  const [spinCount, setSpinCount] = useState(0)
  const [houseProfit, setHouseProfit] = useState(0)
  const [history, setHistory] = useState<HouseProfitPoint[]>([])
  const [lastResult, setLastResult] = useState<SpinResult | null>(null)
  const spinTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const theoreticalRtp = useMemo(
    () => calculateTheoreticalRtp(SLOT_CONFIG),
    []
  )

  const canSpin = !isSpinning && balance >= BET_AMOUNT

  const spin = useCallback(() => {
    if (!canSpin) {
      return
    }

    if (spinTimeoutRef.current) {
      clearTimeout(spinTimeoutRef.current)
    }

    const result = executeSpin(Math.random, SLOT_CONFIG)

    setIsSpinning(true)
    setBalance((currentBalance) => currentBalance - BET_AMOUNT)
    setLastPayout(0)

    spinTimeoutRef.current = setTimeout(() => {
      setDisplayReels(result.reels)
      setBalance((currentBalance) => currentBalance + result.payout)
      setLastPayout(result.payout)
      setLastResult(result)
      setSpinCount((currentSpinCount) => {
        const nextSpinCount = currentSpinCount + 1
        const profitDelta = BET_AMOUNT - result.payout

        setHouseProfit((currentHouseProfit) => {
          const nextHouseProfit = currentHouseProfit + profitDelta

          setHistory((currentHistory) => [
            ...currentHistory,
            {
              spin: nextSpinCount,
              houseProfit: nextHouseProfit,
            },
          ])

          return nextHouseProfit
        })

        return nextSpinCount
      })
      setIsSpinning(false)
      spinTimeoutRef.current = null
    }, SPIN_DURATION_MS)
  }, [canSpin])

  return {
    balance,
    canSpin,
    displayReels,
    history,
    houseProfit,
    isSpinning,
    lastPayout,
    lastResult,
    spin,
    spinCount,
    theoreticalRtp,
  }
}
