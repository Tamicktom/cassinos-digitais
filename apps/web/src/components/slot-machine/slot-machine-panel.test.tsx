//* Libraries imports
import type { ComponentProps } from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

//* Components imports
import { SlotMachinePanel } from "@/components/slot-machine/slot-machine-panel"

//* Constants imports
import { BET_AMOUNT, INITIAL_REELS } from "@/lib/slot-machine/config"

//* Types imports
import type { SlotSymbol } from "@/lib/slot-machine/types"

type PanelProps = ComponentProps<typeof SlotMachinePanel>

function createDefaultPanelProps(overrides: Partial<PanelProps> = {}): PanelProps {
  return {
    balance: 1000,
    canSpin: true,
    displayReels: INITIAL_REELS,
    isAutoMode: false,
    isSpinning: false,
    isTurbo: false,
    lastPayout: 0,
    onReset: vi.fn(),
    onSpin: vi.fn(),
    onToggleAutoMode: vi.fn(),
    onToggleTurbo: vi.fn(),
    spinCount: 0,
    theoreticalRtp: 0.95,
    ...overrides,
  }
}

function renderPanel(overrides: Partial<PanelProps> = {}) {
  const props = createDefaultPanelProps(overrides)

  render(<SlotMachinePanel {...props} />)

  return props
}

describe("SlotMachinePanel", () => {
  it("renders balance, bet, spin count, and last payout", () => {
    renderPanel({
      balance: 1000,
      lastPayout: 5,
      spinCount: 12,
    })

    expect(screen.getByText(/R\$\s*1\.000,00/)).toBeInTheDocument()
    expect(screen.getByText(/R\$\s*5,00/)).toBeInTheDocument()
    expect(screen.getByText(/R\$\s*1,00/)).toBeInTheDocument()
    expect(screen.getByText("12")).toBeInTheDocument()
    expect(screen.getByText("Caça-níqueis")).toBeInTheDocument()
    expect(screen.getByText("Saldo")).toBeInTheDocument()
    expect(screen.getByText("Aposta")).toBeInTheDocument()
  })

  it("renders three reels for the current symbols", () => {
    const displayReels: SlotSymbol[] = ["cherry", "lemon", "orange"]

    renderPanel({ displayReels })

    expect(screen.getAllByText("🍒")).toHaveLength(1)
    expect(screen.getAllByText("🍋")).toHaveLength(1)
    expect(screen.getAllByText("🍊")).toHaveLength(1)
  })

  it("disables the spin button when spinning is not allowed", () => {
    renderPanel({ canSpin: false })

    expect(screen.getByRole("button", { name: "Girar" })).toBeDisabled()
  })

  it("calls onSpin when the spin button is clicked", async () => {
    const user = userEvent.setup()
    const props = renderPanel({ canSpin: true })

    await user.click(screen.getByRole("button", { name: "Girar" }))

    expect(props.onSpin).toHaveBeenCalledTimes(1)
  })

  it.each([
    { isAutoMode: false, isSpinning: false, label: "Girar" },
    { isAutoMode: false, isSpinning: true, label: "Girando..." },
    {
      isAutoMode: true,
      isSpinning: true,
      label: "Girando automaticamente...",
    },
  ])(
    "shows '$label' when isAutoMode=$isAutoMode and isSpinning=$isSpinning",
    ({ isAutoMode, isSpinning, label }) => {
      renderPanel({ isAutoMode, isSpinning })

      expect(screen.getByRole("button", { name: label })).toBeInTheDocument()
    }
  )

  it("reflects turbo and auto toggle states", () => {
    renderPanel({ isTurbo: true, isAutoMode: true })

    expect(screen.getByRole("button", { name: "Turbo ligado" })).toHaveAttribute(
      "aria-pressed",
      "true"
    )

    const autoButton = screen.getByRole("button", {
      name: "Giro automático até o saldo acabar",
    })

    expect(autoButton).toHaveAttribute("aria-pressed", "true")
    expect(autoButton).toHaveTextContent("Auto ligado")
  })

  it("calls reset, turbo, and auto callbacks from their buttons", async () => {
    const user = userEvent.setup()
    const props = renderPanel()

    await user.click(document.getElementById("slot-machine-reset")!)
    await user.click(document.getElementById("slot-machine-turbo")!)
    await user.click(document.getElementById("slot-machine-auto")!)

    expect(props.onReset).toHaveBeenCalledTimes(1)
    expect(props.onToggleTurbo).toHaveBeenCalledTimes(1)
    expect(props.onToggleAutoMode).toHaveBeenCalledTimes(1)
  })
})
