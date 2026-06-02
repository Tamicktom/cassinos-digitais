export {
  BET_AMOUNT,
  BUCKET_THRESHOLD_100K,
  BUCKET_THRESHOLD_10K,
  BUCKET_THRESHOLD_1K,
  DEFAULT_RTP,
  MERGE_FACTOR,
  RTP_PRESETS,
} from "./constants"
export {
  compressHistory,
  createInitialState,
  getBucketSize,
  getEmpiricalRtp,
  getHouseEdge,
  getHouseProfit,
  playRound,
  runBatch,
} from "./simulate"
export type { HistoryPoint, Rng, SimulationState } from "./types"
