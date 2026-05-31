export {
  calculateTheoreticalRtp,
  getSurvivalProbability,
} from "./calculate-theoretical-rtp"
export {
  BET_AMOUNT,
  CRASH_CONFIG,
  DEFAULT_AUTO_CASHOUT,
  HOUSE_EDGE,
  INITIAL_BALANCE,
  MIN_AUTO_CASHOUT,
  MULTIPLIER_GROWTH_PER_SEC,
  MULTIPLIER_GROWTH_TURBO_PER_SEC,
  ROUND_TICK_MS,
  TARGET_RTP,
} from "./config"
export { generateCrashPoint } from "./generate-crash-point"
export { resolvePayout } from "./resolve-payout"
export { createSeededRng } from "./seeded-rng"
export { runSimulation } from "./simulate"
export type {
  CrashConfig,
  HouseProfitPoint,
  Rng,
  RoundResult,
  SimulationResult,
} from "./types"
