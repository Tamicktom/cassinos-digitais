//* Libraries imports
import { describe, expect, it } from "vitest"

//* Utils imports
import {
  compressHistory,
  createInitialState,
  getBucketSize,
  getEmpiricalRtp,
  getHouseProfit,
  playRound,
  runBatch,
} from "./simulate"

function createSequenceRng(values: number[]): () => number {
  let index = 0

  return () => {
    const value = values[index] ?? values[values.length - 1] ?? 0
    index += 1
    return value
  }
}

describe("house edge simulation", () => {
  it("starts with a zero baseline point", () => {
    const state = createInitialState(0.96)

    expect(state.totalGames).toBe(0)
    expect(state.history).toEqual([
      {
        gameCount: 0,
        empiricalRtp: 0,
        houseProfit: 0,
        gamesInBucket: 0,
      },
    ])
    expect(getEmpiricalRtp(state)).toBe(0)
    expect(getHouseProfit(state)).toBe(0)
  })

  it("returns payout equal to bet when rng is below rtp", () => {
    expect(playRound(0.96, () => 0.5)).toBe(1)
    expect(playRound(0.96, () => 0.95)).toBe(1)
    expect(playRound(0.96, () => 0.96)).toBe(0)
  })

  it("resolves bucket size across thresholds", () => {
    expect(getBucketSize(0)).toBe(1)
    expect(getBucketSize(999)).toBe(1)
    expect(getBucketSize(1_000)).toBe(10)
    expect(getBucketSize(9_999)).toBe(10)
    expect(getBucketSize(10_000)).toBe(100)
    expect(getBucketSize(99_999)).toBe(100)
    expect(getBucketSize(100_000)).toBe(1_000)
  })

  it("ignores non-positive batch counts", () => {
    const initial = createInitialState(0.96)
    const rng = createSequenceRng([0.1])

    expect(runBatch(initial, 0, rng)).toEqual(initial)
    expect(runBatch(initial, -5, rng)).toEqual(initial)
  })

  it("computes empirical rtp from a deterministic sequence", () => {
    const rng = createSequenceRng([0.1, 0.9, 0.1, 0.9])
    const state = runBatch(createInitialState(0.5), 4, rng)

    expect(state.totalGames).toBe(4)
    expect(state.totalWagered).toBe(4)
    expect(state.totalPaid).toBe(2)
    expect(getEmpiricalRtp(state)).toBe(0.5)
    expect(getHouseProfit(state)).toBe(2)
    expect(state.history.at(-1)).toEqual({
      gameCount: 4,
      empiricalRtp: 0.5,
      houseProfit: 2,
      gamesInBucket: 1,
    })
  })

  it("compresses history while preserving cumulative totals", () => {
    const points = [
      { gameCount: 0, empiricalRtp: 0, houseProfit: 0, gamesInBucket: 0 },
      { gameCount: 1, empiricalRtp: 1, houseProfit: 0, gamesInBucket: 1 },
      { gameCount: 2, empiricalRtp: 0.5, houseProfit: 1, gamesInBucket: 1 },
      { gameCount: 3, empiricalRtp: 2 / 3, houseProfit: 1, gamesInBucket: 1 },
      { gameCount: 4, empiricalRtp: 0.5, houseProfit: 2, gamesInBucket: 1 },
    ]

    expect(compressHistory(points, 2)).toEqual([
      { gameCount: 0, empiricalRtp: 0, houseProfit: 0, gamesInBucket: 0 },
      { gameCount: 2, empiricalRtp: 0.5, houseProfit: 1, gamesInBucket: 2 },
      { gameCount: 4, empiricalRtp: 0.5, houseProfit: 2, gamesInBucket: 2 },
    ])
  })

  it("compresses to bucket size 10 after 1000 games", () => {
    const rng = createSequenceRng(Array.from({ length: 1_000 }, () => 0.1))
    const state = runBatch(createInitialState(0.96), 1_000, rng)

    expect(state.totalGames).toBe(1_000)
    expect(state.history).toHaveLength(101)
    expect(state.history[0]?.gamesInBucket).toBe(0)
    expect(state.history[1]?.gamesInBucket).toBe(10)
    expect(state.history.at(-1)?.gameCount).toBe(1_000)
    expect(state.history.at(-1)?.empiricalRtp).toBe(1)
  })

  it("appends batches to an existing state", () => {
    const rng = createSequenceRng([0.1, 0.9])
    const firstBatch = runBatch(createInitialState(0.96), 1, rng)
    const secondBatch = runBatch(firstBatch, 1, rng)

    expect(secondBatch.totalGames).toBe(2)
    expect(secondBatch.history.at(-1)?.gameCount).toBe(2)
  })
})
