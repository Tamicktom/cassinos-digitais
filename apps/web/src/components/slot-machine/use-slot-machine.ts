//* Libraries imports
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

//* Constants imports
import {
  BET_AMOUNT,
  INITIAL_BALANCE,
  INITIAL_REELS,
  SLOT_CONFIG,
  SPIN_DURATION_MS,
  SPIN_DURATION_TURBO_MS,
} from "@/lib/slot-machine/config"
import { calculateTheoreticalRtp } from "@/lib/slot-machine/calculate-theoretical-rtp"
import { spin as executeSpin } from "@/lib/slot-machine/spin"

//* Types imports
import type { HouseProfitPoint, SlotSymbol, SpinResult } from "@/lib/slot-machine/types"

export function useSlotMachine() {
  const [balance, setBalance] = useState(INITIAL_BALANCE)
  const [isSpinning, setIsSpinning] = useState(false)
  const [isTurbo, setIsTurbo] = useState(false)
  const [isAutoMode, setIsAutoMode] = useState(false)
  const [displayReels, setDisplayReels] = useState<SlotSymbol[]>(INITIAL_REELS)
  const [lastPayout, setLastPayout] = useState(0)
  const [spinCount, setSpinCount] = useState(0)
  const [houseProfit, setHouseProfit] = useState(0)
  const [history, setHistory] = useState<HouseProfitPoint[]>([])
  const [lastResult, setLastResult] = useState<SpinResult | null>(null)
  const spinTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isTurboRef = useRef(isTurbo)

  const theoreticalRtp = useMemo(
    () => calculateTheoreticalRtp(SLOT_CONFIG),
    []
  )

  const canSpin = !isSpinning && balance >= BET_AMOUNT && !isAutoMode

  useEffect(() => {
    isTurboRef.current = isTurbo
  }, [isTurbo])

  useEffect(() => {
    return () => {
      if (spinTimeoutRef.current) {
        clearTimeout(spinTimeoutRef.current)
      }
    }
  }, [])

  const spin = useCallback(() => {
    if (isSpinning || balance < BET_AMOUNT) {
      return
    }

    if (spinTimeoutRef.current) {
      clearTimeout(spinTimeoutRef.current)
    }

    const result = executeSpin(Math.random, SLOT_CONFIG)
    const spinDurationMs = isTurboRef.current
      ? SPIN_DURATION_TURBO_MS
      : SPIN_DURATION_MS

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
    }, spinDurationMs)
  }, [balance, isSpinning])

  useEffect(() => {
    if (!isAutoMode || isSpinning || balance < BET_AMOUNT) {
      return
    }

    spin()
  }, [balance, isAutoMode, isSpinning, spin])

  const toggleTurbo = useCallback(() => {
    setIsTurbo((currentIsTurbo) => !currentIsTurbo)
  }, [])

  const toggleAutoMode = useCallback(() => {
    setIsAutoMode((currentIsAutoMode) => !currentIsAutoMode)
  }, [])

  const reset = useCallback(() => {
    if (spinTimeoutRef.current) {
      clearTimeout(spinTimeoutRef.current)
      spinTimeoutRef.current = null
    }

    setIsAutoMode(false)
    setBalance(INITIAL_BALANCE)
    setIsSpinning(false)
    setDisplayReels(INITIAL_REELS)
    setLastPayout(0)
    setSpinCount(0)
    setHouseProfit(0)
    setHistory([])
    setLastResult(null)
  }, [])

  return {
    balance,
    canSpin,
    displayReels,
    history,
    houseProfit,
    isAutoMode,
    isSpinning,
    isTurbo,
    lastPayout,
    lastResult,
    reset,
    spin,
    spinCount,
    theoreticalRtp,
    toggleAutoMode,
    toggleTurbo,
  }
}
