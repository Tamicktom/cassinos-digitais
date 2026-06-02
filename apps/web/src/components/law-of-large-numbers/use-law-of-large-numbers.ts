//* Libraries imports
import { useCallback, useMemo, useState } from "react"

//* Constants imports
import {
  EXPECTED_VALUE,
  RECENT_OUTCOMES_LIMIT,
  createInitialState,
  getSampleMean,
  runTrials,
} from "@/lib/law-of-large-numbers"

//* Types imports
import type {
  CoinOutcome,
  SimulationState,
  TrialPoint,
} from "@/lib/law-of-large-numbers"

export function useLawOfLargeNumbers() {
  const [state, setState] = useState<SimulationState>(createInitialState)

  const trialCount = state.outcomes.length
  const sampleMean = getSampleMean(state)

  const recentOutcomes = useMemo(() => {
    return state.outcomes.slice(-RECENT_OUTCOMES_LIMIT)
  }, [state.outcomes])

  const addTrials = useCallback((count: number) => {
    if (count < 1) {
      return
    }

    setState((currentState) => runTrials(currentState, count, Math.random))
  }, [])

  const reset = useCallback(() => {
    setState(createInitialState())
  }, [])

  return {
    addTrials,
    expectedValue: EXPECTED_VALUE,
    history: state.history as TrialPoint[],
    recentOutcomes: recentOutcomes as CoinOutcome[],
    reset,
    sampleMean,
    trialCount,
  }
}
