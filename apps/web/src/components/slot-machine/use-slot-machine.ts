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
import type {
  HouseProfitPoint,
  SlotSymbol,
  SpinResult,
} from "@/lib/slot-machine/types"

type SpinStats = {
  spinCount: number
  houseProfit: number
  history: HouseProfitPoint[]
}

const INITIAL_SPIN_STATS: SpinStats = {
  spinCount: 0,
  houseProfit: 0,
  history: [],
}

export function useSlotMachine() {
  const [balance, setBalance] = useState(INITIAL_BALANCE)
  const [isSpinning, setIsSpinning] = useState(false)
  const [isTurbo, setIsTurbo] = useState(false)
  const [isAutoMode, setIsAutoMode] = useState(false)
  const [displayReels, setDisplayReels] = useState<SlotSymbol[]>(INITIAL_REELS)
  const [lastPayout, setLastPayout] = useState(0)
  const [spinStats, setSpinStats] = useState<SpinStats>(INITIAL_SPIN_STATS)
  const [lastResult, setLastResult] = useState<SpinResult | null>(null)
  const spinTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const spinInFlightRef = useRef(false)
  const isTurboRef = useRef(isTurbo)
  const spinRef = useRef<() => void>(() => {})

  const theoreticalRtp = useMemo(() => calculateTheoreticalRtp(SLOT_CONFIG), [])

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

  const recordSpinResult = useCallback((result: SpinResult) => {
    const profitDelta = BET_AMOUNT - result.payout

    setSpinStats((current) => {
      const nextSpinCount = current.spinCount + 1
      const nextHouseProfit = current.houseProfit + profitDelta

      return {
        spinCount: nextSpinCount,
        houseProfit: nextHouseProfit,
        history: [
          ...current.history,
          {
            spin: nextSpinCount,
            houseProfit: nextHouseProfit,
          },
        ],
      }
    })
  }, [])

  const spin = useCallback(() => {
    if (spinInFlightRef.current || isSpinning || balance < BET_AMOUNT) {
      return
    }

    if (spinTimeoutRef.current) {
      clearTimeout(spinTimeoutRef.current)
    }

    const result = executeSpin(Math.random, SLOT_CONFIG)
    const spinDurationMs = isTurboRef.current
      ? SPIN_DURATION_TURBO_MS
      : SPIN_DURATION_MS

    spinInFlightRef.current = true
    setIsSpinning(true)
    setBalance((currentBalance) => currentBalance - BET_AMOUNT)
    setLastPayout(0)

    spinTimeoutRef.current = setTimeout(() => {
      setDisplayReels(result.reels)
      setBalance((currentBalance) => currentBalance + result.payout)
      setLastPayout(result.payout)
      setLastResult(result)
      recordSpinResult(result)
      spinInFlightRef.current = false
      setIsSpinning(false)
      spinTimeoutRef.current = null
    }, spinDurationMs)
  }, [balance, isSpinning, recordSpinResult])

  spinRef.current = spin

  useEffect(() => {
    if (!isAutoMode || isSpinning || balance < BET_AMOUNT) {
      return
    }

    spinRef.current()
  }, [balance, isAutoMode, isSpinning])

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

    spinInFlightRef.current = false
    setIsAutoMode(false)
    setBalance(INITIAL_BALANCE)
    setIsSpinning(false)
    setDisplayReels(INITIAL_REELS)
    setLastPayout(0)
    setSpinStats(INITIAL_SPIN_STATS)
    setLastResult(null)
  }, [])

  return {
    balance,
    canSpin,
    displayReels,
    history: spinStats.history,
    houseProfit: spinStats.houseProfit,
    isAutoMode,
    isSpinning,
    isTurbo,
    lastPayout,
    lastResult,
    reset,
    spin,
    spinCount: spinStats.spinCount,
    theoreticalRtp,
    toggleAutoMode,
    toggleTurbo,
  }
}
