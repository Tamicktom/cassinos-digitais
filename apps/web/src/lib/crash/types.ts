export type CrashConfig = {
  betAmount: number
  targetRtp: number
  houseEdge: number
}

export type RoundResult = {
  bet: number
  crashPoint: number
  cashoutMultiplier: number | null
  payout: number
}

export type Rng = () => number

export type SimulationResult = {
  totalWagered: number
  totalPaid: number
  empiricalRtp: number
  houseProfit: number
}

export type HouseProfitPoint = {
  round: number
  houseProfit: number
}
