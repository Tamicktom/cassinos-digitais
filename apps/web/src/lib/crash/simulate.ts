//* Types imports
import type { CrashConfig, Rng, SimulationResult } from "./types"

//* Utils imports
import { generateCrashPoint } from "./generate-crash-point"
import { resolvePayout } from "./resolve-payout"

export function runSimulation(
  count: number,
  rng: Rng,
  config: CrashConfig,
  cashoutMultiplier: number
): SimulationResult {
  let totalWagered = 0
  let totalPaid = 0

  for (let index = 0; index < count; index += 1) {
    const crashPoint = generateCrashPoint(rng, config)
    const payout = resolvePayout({
      bet: config.betAmount,
      crashPoint,
      cashoutMultiplier,
    })

    totalWagered += config.betAmount
    totalPaid += payout
  }

  return {
    totalWagered,
    totalPaid,
    empiricalRtp: totalPaid / totalWagered,
    houseProfit: totalWagered - totalPaid,
  }
}
