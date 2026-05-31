//* Libraries imports
import { describe, expect, it } from "vitest"

//* Utils imports
import {
  calculateTheoreticalRtp,
  getSurvivalProbability,
} from "./calculate-theoretical-rtp"
import { CRASH_CONFIG } from "./config"
import { generateCrashPoint } from "./generate-crash-point"
import { resolvePayout } from "./resolve-payout"
import { createSeededRng } from "./seeded-rng"
import { runSimulation } from "./simulate"

describe("crash engine", () => {
  it("calculates theoretical RTP of 95%", () => {
    expect(calculateTheoreticalRtp(CRASH_CONFIG)).toBeCloseTo(0.95, 4)
  })

  it("calculates survival probability at multiplier 2.00x", () => {
    expect(getSurvivalProbability(2, CRASH_CONFIG)).toBeCloseTo(0.475, 4)
  })

  it("estimates instant crash probability near house edge", () => {
    const rng = createSeededRng(42)
    const sampleSize = 100_000
    let instantCrashes = 0

    for (let index = 0; index < sampleSize; index += 1) {
      const crashPoint = generateCrashPoint(rng, CRASH_CONFIG)

      if (crashPoint === 1) {
        instantCrashes += 1
      }
    }

    expect(instantCrashes / sampleSize).toBeCloseTo(CRASH_CONFIG.houseEdge, 1)
  })

  it("estimates survival above 2.00x near theoretical probability", () => {
    const rng = createSeededRng(99)
    const sampleSize = 100_000
    let survivedAboveTwo = 0

    for (let index = 0; index < sampleSize; index += 1) {
      const crashPoint = generateCrashPoint(rng, CRASH_CONFIG)

      if (crashPoint >= 2) {
        survivedAboveTwo += 1
      }
    }

    expect(survivedAboveTwo / sampleSize).toBeCloseTo(
      getSurvivalProbability(2, CRASH_CONFIG),
      2
    )
  })

  it("returns deterministic results with a seeded RNG", () => {
    const firstRound = generateCrashPoint(createSeededRng(42), CRASH_CONFIG)
    const secondRound = generateCrashPoint(createSeededRng(42), CRASH_CONFIG)

    expect(firstRound).toEqual(secondRound)
  })

  it("resolves payouts for winning, losing, and no-cashout rounds", () => {
    expect(
      resolvePayout({
        bet: 1,
        crashPoint: 3.5,
        cashoutMultiplier: 2,
      })
    ).toBe(2)

    expect(
      resolvePayout({
        bet: 1,
        crashPoint: 1.5,
        cashoutMultiplier: 2,
      })
    ).toBe(0)

    expect(
      resolvePayout({
        bet: 1,
        crashPoint: 2,
        cashoutMultiplier: 2,
      })
    ).toBe(2)

    expect(
      resolvePayout({
        bet: 1,
        crashPoint: 5,
        cashoutMultiplier: null,
      })
    ).toBe(0)
  })

  it("validates empirical RTP over 10k simulations", () => {
    const result = runSimulation(10_000, createSeededRng(42), CRASH_CONFIG, 2)

    expect(result.empiricalRtp).toBeGreaterThan(0.93)
    expect(result.empiricalRtp).toBeLessThan(0.97)
    expect(result.houseProfit).toBe(result.totalWagered - result.totalPaid)
  })

  it("validates empirical RTP over 1m simulations", () => {
    const result = runSimulation(
      1_000_000,
      createSeededRng(42),
      CRASH_CONFIG,
      2
    )

    expect(result.empiricalRtp).toBeGreaterThan(0.93)
    expect(result.empiricalRtp).toBeLessThan(0.97)
    expect(result.houseProfit).toBe(result.totalWagered - result.totalPaid)
  })
})
