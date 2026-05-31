//* Components imports
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

//* Constants imports
import { BET_AMOUNT, MIN_AUTO_CASHOUT } from "@/lib/crash/config"

//* Types imports
import type { CrashPhase } from "@/components/crash/use-crash"

type CrashPanelProps = {
  autoCashoutMultiplier: number
  balance: number
  canBet: boolean
  canCashOut: boolean
  currentMultiplier: number
  isAutoMode: boolean
  isTurbo: boolean
  lastCashoutMultiplier: number | null
  lastPayout: number
  onAutoCashoutChange: (value: number) => void
  onBet: () => void
  onCashOut: () => void
  onReset: () => void
  onToggleAutoMode: () => void
  onToggleTurbo: () => void
  phase: CrashPhase
  revealedCrashPoint: number | null
  roundCount: number
  theoreticalRtp: number
}

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}

function formatMultiplier(value: number) {
  return `${value.toFixed(2)}x`
}

function getBetButtonLabel(isAutoMode: boolean, phase: CrashPhase) {
  if (isAutoMode && phase === "flying") {
    return "Apostando automaticamente..."
  }

  if (phase === "flying") {
    return "Rodada em andamento..."
  }

  return "Apostar"
}

function getPhaseLabel(phase: CrashPhase) {
  if (phase === "flying") {
    return "Voando"
  }

  if (phase === "crashed") {
    return "Crash!"
  }

  if (phase === "cashed_out") {
    return "Sacou!"
  }

  return "Aguardando aposta"
}

function getMultiplierClassName(phase: CrashPhase) {
  if (phase === "crashed") {
    return "text-destructive"
  }

  if (phase === "cashed_out") {
    return "text-chart-1"
  }

  if (phase === "flying") {
    return "text-primary"
  }

  return "text-muted-foreground"
}

export function CrashPanel(props: CrashPanelProps) {
  return (
    <Card className="h-full">
      <CardHeader className="text-center">
        <CardTitle className="font-grand-casino text-2xl">Crash</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-4 rounded-xl p-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs tracking-wide text-black uppercase">
              Saldo
            </span>
            <span className="text-2xl font-semibold">
              {formatCurrency(props.balance)}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs tracking-wide text-black uppercase">
              Último prêmio
            </span>
            <span className="text-2xl font-semibold">
              {formatCurrency(props.lastPayout)}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs tracking-wide text-black uppercase">
              Aposta
            </span>
            <span className="text-lg font-medium">
              {formatCurrency(BET_AMOUNT)}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs tracking-wide text-black uppercase">
              Rodadas
            </span>
            <span className="text-lg font-medium">{props.roundCount}</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 rounded-xl p-6">
          <span className="text-xs tracking-wide text-black uppercase">
            {getPhaseLabel(props.phase)}
          </span>
          <span
            className={`font-grand-casino text-5xl font-bold ${getMultiplierClassName(props.phase)}`}
          >
            {formatMultiplier(props.currentMultiplier)}
          </span>
          {props.revealedCrashPoint !== null ? (
            <span className="text-sm text-muted-foreground">
              Crash em {formatMultiplier(props.revealedCrashPoint)}
            </span>
          ) : null}
          {props.lastCashoutMultiplier !== null ? (
            <span className="text-sm text-chart-1">
              Saque em {formatMultiplier(props.lastCashoutMultiplier)}
            </span>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label
            className="text-xs tracking-wide text-black uppercase"
            htmlFor="crash-auto-cashout"
          >
            Auto-saque em
          </label>
          <input
            className="h-9 w-full rounded-lg border border-neutral-600 bg-neutral-800 px-3 text-sm text-white outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:opacity-50"
            disabled={props.phase === "flying"}
            id="crash-auto-cashout"
            min={MIN_AUTO_CASHOUT}
            onChange={(event) => {
              props.onAutoCashoutChange(Number(event.target.value))
            }}
            step={0.01}
            type="number"
            value={props.autoCashoutMultiplier}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="grid w-full grid-cols-3 gap-3">
            <Button
              className="w-full"
              id="crash-reset"
              onClick={props.onReset}
              type="button"
              variant="outline"
            >
              Reiniciar
            </Button>
            <Button
              aria-pressed={props.isTurbo}
              id="crash-turbo"
              onClick={props.onToggleTurbo}
              type="button"
              variant={props.isTurbo ? "secondary" : "outline"}
            >
              {props.isTurbo ? "Turbo ligado" : "Turbo"}
            </Button>
            <Button
              aria-label="Aposta automática até o saldo acabar"
              aria-pressed={props.isAutoMode}
              id="crash-auto"
              onClick={props.onToggleAutoMode}
              type="button"
              variant={props.isAutoMode ? "secondary" : "outline"}
            >
              {props.isAutoMode ? "Auto ligado" : "Auto"}
            </Button>
          </div>
          <Button
            className="w-full"
            disabled={!props.canBet}
            id="crash-bet"
            onClick={props.onBet}
            size="lg"
            type="button"
          >
            {getBetButtonLabel(props.isAutoMode, props.phase)}
          </Button>
          <Button
            className="w-full"
            disabled={!props.canCashOut}
            id="crash-cashout"
            onClick={props.onCashOut}
            size="lg"
            type="button"
            variant="secondary"
          >
            Sacar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
