export type CoinOutcome = 0 | 1

export type TrialPoint = {
  n: number
  sampleMean: number
}

export type SimulationState = {
  outcomes: CoinOutcome[]
  history: TrialPoint[]
}

export type Rng = () => number
