//* Types imports
import type { CrashConfig } from "./types"

export function calculateTheoreticalRtp(config: CrashConfig): number {
  return 1 - config.houseEdge
}

export function getSurvivalProbability(
  multiplier: number,
  config: CrashConfig
): number {
  if (multiplier < 1) {
    return 1
  }

  if (multiplier === 1) {
    return 1 - config.houseEdge
  }

  return (1 - config.houseEdge) / multiplier
}
