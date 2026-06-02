//* Types imports
import type { CoinOutcome, Rng, SimulationState } from "./types"

export function createInitialState(): SimulationState {
  return {
    outcomes: [],
    history: [{ n: 0, sampleMean: 0 }],
  }
}

export function flipCoin(rng: Rng): CoinOutcome {
  return rng() < 0.5 ? 1 : 0
}

export function runTrials(
  state: SimulationState,
  count: number,
  rng: Rng
): SimulationState {
  if (count < 1) {
    return state
  }

  const outcomes = [...state.outcomes]
  const history = [...state.history]
  let sum = outcomes.reduce<number>((total, outcome) => total + outcome, 0)
  let n = outcomes.length

  for (let index = 0; index < count; index += 1) {
    const outcome = flipCoin(rng)
    outcomes.push(outcome)
    sum += outcome
    n += 1
    history.push({ n, sampleMean: sum / n })
  }

  return { outcomes, history }
}

export function getSampleMean(state: SimulationState): number {
  if (state.outcomes.length === 0) {
    return 0
  }

  const sum = state.outcomes.reduce<number>(
    (total, outcome) => total + outcome,
    0
  )
  return sum / state.outcomes.length
}
