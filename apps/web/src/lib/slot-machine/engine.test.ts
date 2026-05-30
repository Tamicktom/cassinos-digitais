//* Libraries imports
import { describe, expect, it } from "vitest"

//* Utils imports
import { calculateTheoreticalRtp } from "./calculate-theoretical-rtp"
import { SLOT_CONFIG } from "./config"
import { resolvePayout } from "./resolve-payout"
import { createSeededRng, spin } from "./spin"
import { runSimulation } from "./simulate"

describe("slot machine engine", () => {
  it("calculates theoretical RTP of 95%", () => {
    expect(calculateTheoreticalRtp(SLOT_CONFIG)).toBeCloseTo(0.95, 4)
  })

  it("validates empirical RTP over 10k simulations", () => {
    const result = runSimulation(10_000, createSeededRng(42), SLOT_CONFIG)

    expect(result.empiricalRtp).toBeGreaterThan(0.93)
    expect(result.empiricalRtp).toBeLessThan(0.97)
    expect(result.houseProfit).toBe(result.totalWagered - result.totalPaid)

    console.log("After 10k simulations, the empirical RTP is", result.empiricalRtp)
  })

  it("validates empirical RTP over 1m simulations", () => {
    const result = runSimulation(1_000_000, createSeededRng(42), SLOT_CONFIG)

    expect(result.empiricalRtp).toBeGreaterThan(0.93)
    expect(result.empiricalRtp).toBeLessThan(0.97)
    expect(result.houseProfit).toBe(result.totalWagered - result.totalPaid)

    console.log("After 1m simulations, the empirical RTP is", result.empiricalRtp)
  })

  it("returns deterministic results with a seeded RNG", () => {
    const firstSpin = spin(createSeededRng(42), SLOT_CONFIG)
    const secondSpin = spin(createSeededRng(42), SLOT_CONFIG)

    expect(firstSpin).toEqual(secondSpin)
  })

  it("resolves payouts for winning and losing combinations", () => {
    expect(resolvePayout(["cherry", "cherry", "cherry"], SLOT_CONFIG.paytable)).toBe(2)
    expect(resolvePayout(["lemon", "lemon", "lemon"], SLOT_CONFIG.paytable)).toBe(5)
    expect(resolvePayout(["orange", "orange", "orange"], SLOT_CONFIG.paytable)).toBe(15)
    expect(resolvePayout(["bell", "bell", "bell"], SLOT_CONFIG.paytable)).toBe(40)
    expect(resolvePayout(["seven", "seven", "seven"], SLOT_CONFIG.paytable)).toBe(120)
    expect(resolvePayout(["cherry", "lemon", "cherry"], SLOT_CONFIG.paytable)).toBe(0)
  })
})
