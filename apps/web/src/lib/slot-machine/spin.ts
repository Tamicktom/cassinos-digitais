//* Types imports
import type { Rng, SlotConfig, SpinResult } from "./types"

//* Utils imports
import { resolvePayout } from "./resolve-payout"

export { createSeededRng } from "./seeded-rng"

export function spin(rng: Rng, config: SlotConfig): SpinResult {
  const reels = config.strips.map((strip) => {
    const index = Math.floor(rng() * strip.length)
    return strip[index]
  })

  const payout = resolvePayout(reels, config.paytable)

  return {
    reels,
    payout,
    bet: config.betAmount,
  }
}
