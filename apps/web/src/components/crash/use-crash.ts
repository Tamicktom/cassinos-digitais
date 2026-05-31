//* Libraries imports
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

//* Constants imports
import {
  BET_AMOUNT,
  CRASH_CONFIG,
  DEFAULT_AUTO_CASHOUT,
  INITIAL_BALANCE,
  MIN_AUTO_CASHOUT,
  MULTIPLIER_GROWTH_PER_SEC,
  MULTIPLIER_GROWTH_TURBO_PER_SEC,
  ROUND_TICK_MS,
} from "@/lib/crash/config"
import { calculateTheoreticalRtp } from "@/lib/crash/calculate-theoretical-rtp"
import { generateCrashPoint } from "@/lib/crash/generate-crash-point"
import { resolvePayout } from "@/lib/crash/resolve-payout"

//* Types imports
import type { HouseProfitPoint, RoundResult } from "@/lib/crash/types"

export type CrashPhase = "idle" | "flying" | "crashed" | "cashed_out"

type RoundStats = {
  roundCount: number
  houseProfit: number
  history: HouseProfitPoint[]
}

const INITIAL_ROUND_STATS: RoundStats = {
  roundCount: 0,
  houseProfit: 0,
  history: [],
}

function roundMultiplier(value: number) {
  return Math.floor(value * 100) / 100
}

export function useCrash() {
  const [balance, setBalance] = useState(INITIAL_BALANCE)
  const [phase, setPhase] = useState<CrashPhase>("idle")
  const [currentMultiplier, setCurrentMultiplier] = useState(1)
  const [revealedCrashPoint, setRevealedCrashPoint] = useState<number | null>(
    null
  )
  const [lastPayout, setLastPayout] = useState(0)
  const [lastCashoutMultiplier, setLastCashoutMultiplier] = useState<
    number | null
  >(null)
  const [autoCashoutMultiplier, setAutoCashoutMultiplier] = useState(
    DEFAULT_AUTO_CASHOUT
  )
  const [isTurbo, setIsTurbo] = useState(false)
  const [isAutoMode, setIsAutoMode] = useState(false)
  const [roundStats, setRoundStats] = useState<RoundStats>(INITIAL_ROUND_STATS)
  const [lastResult, setLastResult] = useState<RoundResult | null>(null)

  const crashPointRef = useRef(1)
  const currentMultiplierRef = useRef(1)
  const tickIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const roundInFlightRef = useRef(false)
  const isTurboRef = useRef(isTurbo)
  const autoCashoutRef = useRef(autoCashoutMultiplier)
  const startRoundRef = useRef<() => void>(() => {})

  const theoreticalRtp = useMemo(
    () => calculateTheoreticalRtp(CRASH_CONFIG),
    []
  )

  const canBet = phase === "idle" && balance >= BET_AMOUNT && !isAutoMode
  const canCashOut = phase === "flying"

  useEffect(() => {
    isTurboRef.current = isTurbo
  }, [isTurbo])

  useEffect(() => {
    autoCashoutRef.current = autoCashoutMultiplier
  }, [autoCashoutMultiplier])

  const clearTickInterval = useCallback(() => {
    if (tickIntervalRef.current) {
      clearInterval(tickIntervalRef.current)
      tickIntervalRef.current = null
    }
  }, [])

  useEffect(() => {
    return () => {
      clearTickInterval()
    }
  }, [clearTickInterval])

  const recordRoundResult = useCallback((result: RoundResult) => {
    const profitDelta = result.bet - result.payout

    setRoundStats((current) => {
      const nextRoundCount = current.roundCount + 1
      const nextHouseProfit = current.houseProfit + profitDelta

      return {
        roundCount: nextRoundCount,
        houseProfit: nextHouseProfit,
        history: [
          ...current.history,
          {
            round: nextRoundCount,
            houseProfit: nextHouseProfit,
          },
        ],
      }
    })
  }, [])

  const finishRound = useCallback(
    (params: {
      crashPoint: number
      cashoutMultiplier: number | null
      nextPhase: "crashed" | "cashed_out"
    }) => {
      clearTickInterval()
      roundInFlightRef.current = false

      const payout = resolvePayout({
        bet: BET_AMOUNT,
        crashPoint: params.crashPoint,
        cashoutMultiplier: params.cashoutMultiplier,
      })

      const result: RoundResult = {
        bet: BET_AMOUNT,
        crashPoint: params.crashPoint,
        cashoutMultiplier: params.cashoutMultiplier,
        payout,
      }

      setRevealedCrashPoint(params.crashPoint)
      setLastPayout(payout)
      setLastCashoutMultiplier(params.cashoutMultiplier)
      setLastResult(result)
      setBalance((currentBalance) => currentBalance + payout)
      setPhase(params.nextPhase)
      recordRoundResult(result)

      window.setTimeout(() => {
        setPhase("idle")
      }, 600)
    },
    [clearTickInterval, recordRoundResult]
  )

  const cashOut = useCallback(
    (multiplier: number) => {
      if (phase !== "flying" || !roundInFlightRef.current) {
        return
      }

      const cashoutMultiplier = roundMultiplier(multiplier)

      finishRound({
        crashPoint: crashPointRef.current,
        cashoutMultiplier,
        nextPhase: "cashed_out",
      })
    },
    [finishRound, phase]
  )

  const startRound = useCallback(() => {
    if (roundInFlightRef.current || phase !== "idle" || balance < BET_AMOUNT) {
      return
    }

    clearTickInterval()

    const crashPoint = generateCrashPoint(Math.random, CRASH_CONFIG)

    crashPointRef.current = crashPoint
    currentMultiplierRef.current = 1
    roundInFlightRef.current = true
    setPhase("flying")
    setCurrentMultiplier(1)
    setRevealedCrashPoint(null)
    setLastPayout(0)
    setLastCashoutMultiplier(null)
    setBalance((currentBalance) => currentBalance - BET_AMOUNT)

    tickIntervalRef.current = setInterval(() => {
      const growthPerSec = isTurboRef.current
        ? MULTIPLIER_GROWTH_TURBO_PER_SEC
        : MULTIPLIER_GROWTH_PER_SEC
      const nextMultiplier = roundMultiplier(
        currentMultiplierRef.current +
          growthPerSec * (ROUND_TICK_MS / 1000)
      )
      const targetCrashPoint = crashPointRef.current
      const targetAutoCashout = autoCashoutRef.current

      currentMultiplierRef.current = nextMultiplier
      setCurrentMultiplier(nextMultiplier)

      if (nextMultiplier >= targetAutoCashout) {
        finishRound({
          crashPoint: targetCrashPoint,
          cashoutMultiplier: roundMultiplier(targetAutoCashout),
          nextPhase: "cashed_out",
        })
        return
      }

      if (nextMultiplier >= targetCrashPoint) {
        finishRound({
          crashPoint: targetCrashPoint,
          cashoutMultiplier: null,
          nextPhase: "crashed",
        })
      }
    }, ROUND_TICK_MS)
  }, [balance, clearTickInterval, finishRound, phase])

  startRoundRef.current = startRound

  useEffect(() => {
    if (!isAutoMode || phase !== "idle" || balance < BET_AMOUNT) {
      return
    }

    startRoundRef.current()
  }, [balance, isAutoMode, phase])

  const manualCashOut = useCallback(() => {
    cashOut(currentMultiplierRef.current)
  }, [cashOut])

  const toggleTurbo = useCallback(() => {
    setIsTurbo((currentIsTurbo) => !currentIsTurbo)
  }, [])

  const toggleAutoMode = useCallback(() => {
    setIsAutoMode((currentIsAutoMode) => !currentIsAutoMode)
  }, [])

  const updateAutoCashoutMultiplier = useCallback((value: number) => {
    if (Number.isNaN(value)) {
      return
    }

    setAutoCashoutMultiplier(Math.max(MIN_AUTO_CASHOUT, value))
  }, [])

  const reset = useCallback(() => {
    clearTickInterval()
    roundInFlightRef.current = false
    setIsAutoMode(false)
    setBalance(INITIAL_BALANCE)
    setPhase("idle")
    currentMultiplierRef.current = 1
    setCurrentMultiplier(1)
    setRevealedCrashPoint(null)
    setLastPayout(0)
    setLastCashoutMultiplier(null)
    setAutoCashoutMultiplier(DEFAULT_AUTO_CASHOUT)
    setRoundStats(INITIAL_ROUND_STATS)
    setLastResult(null)
  }, [clearTickInterval])

  return {
    autoCashoutMultiplier,
    balance,
    canBet,
    canCashOut,
    currentMultiplier,
    history: roundStats.history,
    houseProfit: roundStats.houseProfit,
    isAutoMode,
    isTurbo,
    lastCashoutMultiplier,
    lastPayout,
    lastResult,
    manualCashOut,
    phase,
    reset,
    revealedCrashPoint,
    roundCount: roundStats.roundCount,
    startRound,
    theoreticalRtp,
    toggleAutoMode,
    toggleTurbo,
    updateAutoCashoutMultiplier,
  }
}
