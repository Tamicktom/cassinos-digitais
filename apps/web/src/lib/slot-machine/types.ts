export type SlotSymbol = "cherry" | "lemon" | "orange" | "bell" | "seven"

export const SLOT_SYMBOLS: SlotSymbol[] = [
  "cherry",
  "lemon",
  "orange",
  "bell",
  "seven",
]

export type Paytable = Record<SlotSymbol, number>

export type SlotConfig = {
  betAmount: number
  targetRtp: number
  strips: SlotSymbol[][]
  paytable: Paytable
}

export type SpinResult = {
  reels: SlotSymbol[]
  payout: number
  bet: number
}

export type Rng = () => number

export type SimulationResult = {
  totalWagered: number
  totalPaid: number
  empiricalRtp: number
  houseProfit: number
}

export type HouseProfitPoint = {
  spin: number
  houseProfit: number
}
