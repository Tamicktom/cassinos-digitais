//* Libraries imports
import { act, renderHook } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"

//* Hooks imports
import { useLawOfLargeNumbers } from "@/components/law-of-large-numbers/use-law-of-large-numbers"

describe("useLawOfLargeNumbers", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("starts with zero trials and sample mean", () => {
    const { result } = renderHook(() => useLawOfLargeNumbers())

    expect(result.current.trialCount).toBe(0)
    expect(result.current.sampleMean).toBe(0)
    expect(result.current.expectedValue).toBe(0.5)
    expect(result.current.recentOutcomes).toEqual([])
    expect(result.current.history).toEqual([{ n: 0, sampleMean: 0 }])
  })

  it("adds one trial per call", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.1)

    const { result } = renderHook(() => useLawOfLargeNumbers())

    act(() => {
      result.current.addTrials(1)
    })

    expect(result.current.trialCount).toBe(1)
    expect(result.current.sampleMean).toBe(1)
    expect(result.current.recentOutcomes).toEqual([1])
  })

  it("adds batches of trials", () => {
    const randomValues = [0.1, 0.9, 0.1, 0.9, 0.1, 0.9, 0.1, 0.9, 0.1, 0.9]
    let index = 0

    vi.spyOn(Math, "random").mockImplementation(() => {
      const value = randomValues[index] ?? 0.9
      index += 1
      return value
    })

    const { result } = renderHook(() => useLawOfLargeNumbers())

    act(() => {
      result.current.addTrials(10)
    })

    expect(result.current.trialCount).toBe(10)
    expect(result.current.sampleMean).toBe(0.5)
    expect(result.current.history.at(-1)).toEqual({ n: 10, sampleMean: 0.5 })
  })

  it("ignores invalid trial counts", () => {
    const randomSpy = vi.spyOn(Math, "random").mockReturnValue(0.1)
    const { result } = renderHook(() => useLawOfLargeNumbers())

    act(() => {
      result.current.addTrials(0)
      result.current.addTrials(-5)
    })

    expect(randomSpy).not.toHaveBeenCalled()
    expect(result.current.trialCount).toBe(0)
  })

  it("resets to the initial state", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.1)

    const { result } = renderHook(() => useLawOfLargeNumbers())

    act(() => {
      result.current.addTrials(5)
    })

    act(() => {
      result.current.reset()
    })

    expect(result.current.trialCount).toBe(0)
    expect(result.current.sampleMean).toBe(0)
    expect(result.current.history).toEqual([{ n: 0, sampleMean: 0 }])
  })
})
