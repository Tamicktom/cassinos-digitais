//* Types imports
import type { CrashConfig, Rng } from "./types"

export function generateCrashPoint(rng: Rng, config: CrashConfig): number {
  const r = rng()

  if (r <= config.houseEdge) {
    return 1
  }

  const multiplier = (1 - config.houseEdge) / (1 - r)
  return Math.floor(multiplier * 100) / 100
}
