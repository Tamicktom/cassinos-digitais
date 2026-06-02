export type HistoryPoint = {
  gameCount: number
  empiricalRtp: number
  houseProfit: number
  gamesInBucket: number
}

export type SimulationState = {
  rtp: number
  totalGames: number
  totalWagered: number
  totalPaid: number
  history: HistoryPoint[]
}

export type Rng = () => number
