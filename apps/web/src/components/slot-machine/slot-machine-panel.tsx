//* Components imports
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Reel } from "@/components/slot-machine/reel"

//* Constants imports
import { BET_AMOUNT } from "@/lib/slot-machine/config"

//* Types imports
import type { SlotSymbol } from "@/lib/slot-machine/types"

type SlotMachinePanelProps = {
  balance: number
  canSpin: boolean
  displayReels: SlotSymbol[]
  isAutoMode: boolean
  isSpinning: boolean
  isTurbo: boolean
  lastPayout: number
  onReset: () => void
  onSpin: () => void
  onToggleAutoMode: () => void
  onToggleTurbo: () => void
  spinCount: number
  theoreticalRtp: number
}

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}

function getSpinButtonLabel(isAutoMode: boolean, isSpinning: boolean) {
  if (isAutoMode && isSpinning) {
    return "Girando automaticamente..."
  }

  if (isSpinning) {
    return "Girando..."
  }

  return "Girar"
}

export function SlotMachinePanel(props: SlotMachinePanelProps) {
  return (
    <Card className="h-full">
      <CardHeader className="text-center">
        <CardTitle className="font-grand-casino text-2xl">
          Caça-níqueis
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-4 rounded-xl bg-muted/40 p-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              Saldo
            </span>
            <span className="text-2xl font-semibold">
              {formatCurrency(props.balance)}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              Último prêmio
            </span>
            <span className="text-2xl font-semibold">
              {formatCurrency(props.lastPayout)}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              Aposta
            </span>
            <span className="text-lg font-medium">
              {formatCurrency(BET_AMOUNT)}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              Giros
            </span>
            <span className="text-lg font-medium">{props.spinCount}</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 rounded-xl border bg-muted/20 p-6">
          {props.displayReels.map((symbol, reelIndex) => (
            <Reel
              isSpinning={props.isSpinning}
              isTurbo={props.isTurbo}
              key={reelIndex}
              reelIndex={reelIndex}
              symbol={symbol}
            />
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <div className="grid w-full grid-cols-2 gap-3">
          <Button
            aria-pressed={props.isTurbo}
            id="slot-machine-turbo"
            onClick={props.onToggleTurbo}
            type="button"
            variant={props.isTurbo ? "secondary" : "outline"}
          >
            {props.isTurbo ? "Turbo ligado" : "Turbo"}
          </Button>
          <Button
            aria-label="Giro automático até o saldo acabar"
            aria-pressed={props.isAutoMode}
            id="slot-machine-auto"
            onClick={props.onToggleAutoMode}
            type="button"
            variant={props.isAutoMode ? "secondary" : "outline"}
          >
            {props.isAutoMode ? "Auto ligado" : "Auto"}
          </Button>
        </div>
        <Button
          className="w-full"
          disabled={!props.canSpin}
          id="slot-machine-spin"
          onClick={props.onSpin}
          size="lg"
          type="button"
        >
          {getSpinButtonLabel(props.isAutoMode, props.isSpinning)}
        </Button>
        <Button
          className="w-full"
          id="slot-machine-reset"
          onClick={props.onReset}
          type="button"
          variant="outline"
        >
          Reiniciar
        </Button>
      </CardFooter>
    </Card>
  )
}
