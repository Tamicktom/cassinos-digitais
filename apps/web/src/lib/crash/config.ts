//* Types imports
import type { CrashConfig } from "./types"

export const BET_AMOUNT = 1
export const TARGET_RTP = 0.95
export const HOUSE_EDGE = 1 - TARGET_RTP
export const INITIAL_BALANCE = 1000
export const DEFAULT_AUTO_CASHOUT = 2
export const MIN_AUTO_CASHOUT = 1.01
export const ROUND_TICK_MS = 50
export const MULTIPLIER_GROWTH_PER_SEC = 0.5
export const MULTIPLIER_GROWTH_TURBO_PER_SEC = 2

export const CRASH_CONFIG: CrashConfig = {
  betAmount: BET_AMOUNT,
  targetRtp: TARGET_RTP,
  houseEdge: HOUSE_EDGE,
}
