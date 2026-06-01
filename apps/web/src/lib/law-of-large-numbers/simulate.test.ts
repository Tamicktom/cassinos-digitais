//* Libraries imports
import { describe, expect, it } from "vitest"

//* Utils imports
import {
  createInitialState,
  flipCoin,
  getSampleMean,
  runTrials,
} from "./simulate"

function createSequenceRng(values: number[]): () => number {
  let index = 0

  return () => {
    const value = values[index] ?? values[values.length - 1] ?? 0
    index += 1
    return value
  }
}

describe("law of large numbers simulation", () => {
  it("starts with empty outcomes and a zero baseline point", () => {
    const state = createInitialState()

    expect(state.outcomes).toEqual([])
    expect(state.history).toEqual([{ n: 0, sampleMean: 0 }])
    expect(getSampleMean(state)).toBe(0)
  })

  it("maps rng below 0.5 to heads and above to tails", () => {
    expect(flipCoin(() => 0.49)).toBe(1)
    expect(flipCoin(() => 0.5)).toBe(0)
    expect(flipCoin(() => 0.99)).toBe(0)
  })

  it("ignores non-positive trial counts", () => {
    const initial = createInitialState()
    const rng = createSequenceRng([0.1, 0.9])

    expect(runTrials(initial, 0, rng)).toEqual(initial)
    expect(runTrials(initial, -3, rng)).toEqual(initial)
  })

  it("updates sample mean after a deterministic sequence", () => {
    const rng = createSequenceRng([0.1, 0.9, 0.1, 0.9])
    const state = runTrials(createInitialState(), 4, rng)

    expect(state.outcomes).toEqual([1, 0, 1, 0])
    expect(state.history).toEqual([
      { n: 0, sampleMean: 0 },
      { n: 1, sampleMean: 1 },
      { n: 2, sampleMean: 0.5 },
      { n: 3, sampleMean: 2 / 3 },
      { n: 4, sampleMean: 0.5 },
    ])
    expect(getSampleMean(state)).toBe(0.5)
  })

  it("appends trials to an existing state", () => {
    const rng = createSequenceRng([0.1, 0.9])
    const firstBatch = runTrials(createInitialState(), 1, rng)
    const secondBatch = runTrials(firstBatch, 1, rng)

    expect(secondBatch.outcomes).toEqual([1, 0])
    expect(secondBatch.history.at(-1)).toEqual({ n: 2, sampleMean: 0.5 })
  })
})
