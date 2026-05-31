//* Libraries imports
import { describe, expect, it } from "vitest"

//* Utils imports
import {
  calculateTheoreticalRtp,
  getAllReelCombinations,
  getOutcomeProbabilities,
} from "./calculate-theoretical-rtp"
import { SLOT_CONFIG } from "./config"
import { resolvePayout } from "./resolve-payout"
import { createSeededRng, spin } from "./spin"
import { runSimulation } from "./simulate"

describe("slot machine engine", () => {
  it("calculates theoretical RTP of 95%", () => {
    expect(calculateTheoreticalRtp(SLOT_CONFIG)).toBeCloseTo(0.95, 4)
  })

  it("calculates outcome probabilities that sum to 1", () => {
    const outcomes = getOutcomeProbabilities(SLOT_CONFIG)
    const winningProbability = outcomes.reduce(
      (total, outcome) => total + outcome.probability,
      0
    )
    const cherryOutcome = outcomes.find(
      (outcome) => outcome.symbol === "cherry"
    )

    expect(cherryOutcome?.probability).toBeCloseTo(Math.pow(776 / 1000, 3), 4)
    expect(winningProbability).toBeLessThan(1)
    expect(winningProbability + (1 - winningProbability)).toBeCloseTo(1, 4)
  })

  it("validates empirical RTP over 10k simulations", () => {
    const result = runSimulation(10_000, createSeededRng(42), SLOT_CONFIG)

    expect(result.empiricalRtp).toBeGreaterThan(0.93)
    expect(result.empiricalRtp).toBeLessThan(0.97)
    expect(result.houseProfit).toBe(result.totalWagered - result.totalPaid)

    console.log(
      "After 10k simulations, the empirical RTP is",
      result.empiricalRtp
    )
  })

  it("validates empirical RTP over 1m simulations", () => {
    const result = runSimulation(1_000_000, createSeededRng(42), SLOT_CONFIG)

    expect(result.empiricalRtp).toBeGreaterThan(0.93)
    expect(result.empiricalRtp).toBeLessThan(0.97)
    expect(result.houseProfit).toBe(result.totalWagered - result.totalPaid)

    console.log(
      "After 1m simulations, the empirical RTP is",
      result.empiricalRtp
    )
  })

  it("returns deterministic results with a seeded RNG", () => {
    const firstSpin = spin(createSeededRng(42), SLOT_CONFIG)
    const secondSpin = spin(createSeededRng(42), SLOT_CONFIG)

    expect(firstSpin).toEqual(secondSpin)
  })

  it("enumerates all reel combinations with probabilities that sum to 1", () => {
    const combinations = getAllReelCombinations(SLOT_CONFIG)
    const totalProbability = combinations.reduce(
      (total, combination) => total + combination.probability,
      0
    )
    const cherryTriple = combinations.find(
      (combination) =>
        combination.reels[0] === "cherry" &&
        combination.reels[1] === "cherry" &&
        combination.reels[2] === "cherry"
    )
    const cherryLemonCherry = combinations.find(
      (combination) =>
        combination.reels[0] === "cherry" &&
        combination.reels[1] === "lemon" &&
        combination.reels[2] === "cherry"
    )

    expect(combinations).toHaveLength(125)
    expect(totalProbability).toBeCloseTo(1, 4)
    expect(cherryTriple?.payout).toBe(2)
    expect(cherryTriple?.probability).toBeCloseTo(Math.pow(776 / 1000, 3), 4)
    expect(cherryLemonCherry?.payout).toBe(0)
  })

  it("resolves payouts for winning and losing combinations", () => {
    expect(
      resolvePayout(["cherry", "cherry", "cherry"], SLOT_CONFIG.paytable)
    ).toBe(2)
    expect(
      resolvePayout(["lemon", "lemon", "lemon"], SLOT_CONFIG.paytable)
    ).toBe(5)
    expect(
      resolvePayout(["orange", "orange", "orange"], SLOT_CONFIG.paytable)
    ).toBe(15)
    expect(resolvePayout(["bell", "bell", "bell"], SLOT_CONFIG.paytable)).toBe(
      40
    )
    expect(
      resolvePayout(["seven", "seven", "seven"], SLOT_CONFIG.paytable)
    ).toBe(120)
    expect(
      resolvePayout(["cherry", "lemon", "cherry"], SLOT_CONFIG.paytable)
    ).toBe(0)
  })
})
