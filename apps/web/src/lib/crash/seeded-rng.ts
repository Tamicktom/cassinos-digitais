//* Types imports
import type { Rng } from "./types"

/**
 * 32-bit Linear Congruential Generator (LCG).
 * Standard glibc parameters — same seed always yields the same sequence.
 *
 * nextState = (multiplier * state + increment) mod 2^32
 */
const LCG_MULTIPLIER = 1664525
const LCG_INCREMENT = 1013904223
const UINT32_RANGE = 0x1_0000_0000

function toUint32(value: number): number {
  return value >>> 0
}

function nextLcgState(currentState: number): number {
  const mixedState = LCG_MULTIPLIER * currentState + LCG_INCREMENT
  return toUint32(mixedState)
}

function uint32ToUnitInterval(value: number): number {
  return value / UINT32_RANGE
}

export function createSeededRng(seed: number): Rng {
  let state = toUint32(seed)

  return () => {
    state = nextLcgState(state)
    return uint32ToUnitInterval(state)
  }
}
