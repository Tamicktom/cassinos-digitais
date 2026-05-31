//* Components imports
import { CrashPanel } from "@/components/crash/crash-panel"
import { HouseProfitChart } from "@/components/crash/house-profit-chart"
import { useCrash } from "@/components/crash/use-crash"

export function Crash() {
  const crash = useCrash()

  return (
    <div id="crash" className="grid grid-cols-3 gap-4">
      <section className="col-span-1 flex flex-1 flex-col gap-4">
        <CrashPanel
          autoCashoutMultiplier={crash.autoCashoutMultiplier}
          balance={crash.balance}
          canBet={crash.canBet}
          canCashOut={crash.canCashOut}
          currentMultiplier={crash.currentMultiplier}
          isAutoMode={crash.isAutoMode}
          isTurbo={crash.isTurbo}
          lastCashoutMultiplier={crash.lastCashoutMultiplier}
          lastPayout={crash.lastPayout}
          onAutoCashoutChange={crash.updateAutoCashoutMultiplier}
          onBet={crash.startRound}
          onCashOut={crash.manualCashOut}
          onReset={crash.reset}
          onToggleAutoMode={crash.toggleAutoMode}
          onToggleTurbo={crash.toggleTurbo}
          phase={crash.phase}
          revealedCrashPoint={crash.revealedCrashPoint}
          roundCount={crash.roundCount}
          theoreticalRtp={crash.theoreticalRtp}
        />
      </section>
      <section className="col-span-2 flex flex-1 flex-col gap-4">
        <HouseProfitChart
          history={crash.history}
          houseProfit={crash.houseProfit}
          roundCount={crash.roundCount}
        />
      </section>
    </div>
  )
}
