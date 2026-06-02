//* Components imports
import { HouseProfitChart } from "@/components/slot-machine/house-profit-chart"
import { SlotMachinePanel } from "@/components/slot-machine/slot-machine-panel"
import { useSlotMachine } from "@/components/slot-machine/use-slot-machine"

export function SlotMachine() {
  const slotMachine = useSlotMachine()

  return (
    <div
      id="slot-machine"
      className="grid size-full max-h-[70svh] grid-cols-3 gap-4"
    >
      <section className="col-span-1 flex h-full flex-1 flex-col gap-4">
        <SlotMachinePanel
          balance={slotMachine.balance}
          canSpin={slotMachine.canSpin}
          displayReels={slotMachine.displayReels}
          isAutoMode={slotMachine.isAutoMode}
          isSpinning={slotMachine.isSpinning}
          isTurbo={slotMachine.isTurbo}
          lastPayout={slotMachine.lastPayout}
          onReset={slotMachine.reset}
          onSpin={slotMachine.spin}
          onToggleAutoMode={slotMachine.toggleAutoMode}
          onToggleTurbo={slotMachine.toggleTurbo}
          spinCount={slotMachine.spinCount}
          theoreticalRtp={slotMachine.theoreticalRtp}
        />
      </section>
      <section className="col-span-2 flex h-full flex-1 flex-col gap-4">
        <HouseProfitChart
          history={slotMachine.history}
          houseProfit={slotMachine.houseProfit}
          spinCount={slotMachine.spinCount}
        />
      </section>
    </div>
  )
}
