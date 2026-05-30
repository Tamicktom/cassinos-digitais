//* Types imports
import type { Rng, SimulationResult, SlotConfig } from "./types"

//* Utils imports
import { spin } from "./spin"

export function runSimulation(
  count: number,
  rng: Rng,
  config: SlotConfig
): SimulationResult {
  let totalWagered = 0
  let totalPaid = 0

  for (let index = 0; index < count; index += 1) {
    const result = spin(rng, config)
    totalWagered += result.bet
    totalPaid += result.payout
  }

  return {
    totalWagered,
    totalPaid,
    empiricalRtp: totalPaid / totalWagered,
    houseProfit: totalWagered - totalPaid,
  }
}
