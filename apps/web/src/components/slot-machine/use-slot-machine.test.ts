//* Libraries imports
import { act, renderHook } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

//* Hooks imports
import { useSlotMachine } from "@/components/slot-machine/use-slot-machine"

//* Constants imports
import {
  BET_AMOUNT,
  INITIAL_BALANCE,
  INITIAL_REELS,
  SPIN_DURATION_MS,
  SPIN_DURATION_TURBO_MS,
} from "@/lib/slot-machine/config"

//* Types imports
import type { SpinResult } from "@/lib/slot-machine/types"

//* Utils imports
import { spin } from "@/lib/slot-machine/spin"

vi.mock("@/lib/slot-machine/spin", () => ({
  spin: vi.fn(),
}))

const mockSpin = vi.mocked(spin)

const WINNING_SPIN_RESULT: SpinResult = {
  reels: ["cherry", "cherry", "cherry"],
  payout: 2,
  bet: BET_AMOUNT,
}

const LOSING_SPIN_RESULT: SpinResult = {
  reels: ["cherry", "lemon", "orange"],
  payout: 0,
  bet: BET_AMOUNT,
}

function advanceSpinDuration(isTurbo = false) {
  act(() => {
    vi.advanceTimersByTime(
      isTurbo ? SPIN_DURATION_TURBO_MS : SPIN_DURATION_MS
    )
  })
}

function completeSpin(isTurbo = false) {
  advanceSpinDuration(isTurbo)
}

describe("useSlotMachine", () => {
  beforeEach(() => {
    vi.useFakeTimers()
    mockSpin.mockReturnValue(WINNING_SPIN_RESULT)
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.clearAllMocks()
  })

  it("debits the bet immediately and applies the payout after the spin timeout", () => {
    const { result } = renderHook(() => useSlotMachine())

    act(() => {
      result.current.spin()
    })

    expect(result.current.balance).toBe(INITIAL_BALANCE - BET_AMOUNT)
    expect(result.current.isSpinning).toBe(true)
    expect(result.current.lastPayout).toBe(0)

    completeSpin()

    expect(result.current.balance).toBe(
      INITIAL_BALANCE - BET_AMOUNT + WINNING_SPIN_RESULT.payout
    )
    expect(result.current.displayReels).toEqual(WINNING_SPIN_RESULT.reels)
    expect(result.current.lastPayout).toBe(WINNING_SPIN_RESULT.payout)
    expect(result.current.spinCount).toBe(1)
    expect(result.current.houseProfit).toBe(
      BET_AMOUNT - WINNING_SPIN_RESULT.payout
    )
    expect(result.current.isSpinning).toBe(false)
  })

  it("does not spin when balance is below the bet amount", () => {
    mockSpin.mockReturnValue(LOSING_SPIN_RESULT)

    const { result } = renderHook(() => useSlotMachine())

    for (let spinIndex = 0; spinIndex < INITIAL_BALANCE; spinIndex += 1) {
      act(() => {
        result.current.spin()
      })
      completeSpin()
    }

    expect(result.current.balance).toBe(0)

    act(() => {
      result.current.spin()
    })

    expect(result.current.balance).toBe(0)
    expect(result.current.spinCount).toBe(INITIAL_BALANCE)
    expect(mockSpin).toHaveBeenCalledTimes(INITIAL_BALANCE)
  })

  it("ignores a second spin while one is already in flight", () => {
    const { result } = renderHook(() => useSlotMachine())

    act(() => {
      result.current.spin()
    })

    act(() => {
      result.current.spin()
    })

    expect(result.current.balance).toBe(INITIAL_BALANCE - BET_AMOUNT)
    expect(mockSpin).toHaveBeenCalledTimes(1)

    completeSpin()

    expect(result.current.spinCount).toBe(1)
  })

  it("uses the turbo spin duration when turbo mode is enabled", () => {
    const { result } = renderHook(() => useSlotMachine())

    act(() => {
      result.current.toggleTurbo()
    })

    act(() => {
      result.current.spin()
    })

    act(() => {
      vi.advanceTimersByTime(SPIN_DURATION_TURBO_MS - 1)
    })

    expect(result.current.isSpinning).toBe(true)

    act(() => {
      vi.advanceTimersByTime(1)
    })

    expect(result.current.isSpinning).toBe(false)
    expect(result.current.spinCount).toBe(1)
  })

  it("chains spins in auto mode until the balance is exhausted", () => {
    mockSpin.mockReturnValue(LOSING_SPIN_RESULT)

    const { result } = renderHook(() => useSlotMachine())

    act(() => {
      result.current.toggleAutoMode()
    })

    expect(result.current.canSpin).toBe(false)
    expect(result.current.isAutoMode).toBe(true)

    for (let spinIndex = 0; spinIndex < INITIAL_BALANCE; spinIndex += 1) {
      completeSpin()
    }

    expect(result.current.balance).toBe(0)
    expect(result.current.spinCount).toBe(INITIAL_BALANCE)
    expect(mockSpin).toHaveBeenCalledTimes(INITIAL_BALANCE)

    completeSpin()

    expect(result.current.spinCount).toBe(INITIAL_BALANCE)
    expect(mockSpin).toHaveBeenCalledTimes(INITIAL_BALANCE)
  })

  it("restores the initial state and cancels a pending spin on reset", () => {
    const { result } = renderHook(() => useSlotMachine())

    act(() => {
      result.current.toggleAutoMode()
      result.current.toggleTurbo()
      result.current.spin()
    })

    act(() => {
      result.current.reset()
    })

    expect(result.current.balance).toBe(INITIAL_BALANCE)
    expect(result.current.displayReels).toEqual(INITIAL_REELS)
    expect(result.current.spinCount).toBe(0)
    expect(result.current.houseProfit).toBe(0)
    expect(result.current.history).toEqual([])
    expect(result.current.isAutoMode).toBe(false)
    expect(result.current.isTurbo).toBe(true)
    expect(result.current.isSpinning).toBe(false)
    expect(result.current.lastPayout).toBe(0)
    expect(result.current.lastResult).toBeNull()

    completeSpin()

    expect(result.current.balance).toBe(INITIAL_BALANCE)
    expect(result.current.spinCount).toBe(0)
  })
})
