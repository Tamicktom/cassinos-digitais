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
  isSpinning: boolean
  lastPayout: number
  onSpin: () => void
  spinCount: number
  theoreticalRtp: number
}

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}

export function SlotMachinePanel(props: SlotMachinePanelProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="font-grand-casino text-3xl">
          Slot Machine
        </CardTitle>
        <CardDescription>
          Classic 3-reel simulator with a theoretical RTP of{" "}
          {(props.theoreticalRtp * 100).toFixed(1)}%.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-4 rounded-xl bg-muted/40 p-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              Balance
            </span>
            <span className="text-2xl font-semibold">
              {formatCurrency(props.balance)}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              Last payout
            </span>
            <span className="text-2xl font-semibold">
              {formatCurrency(props.lastPayout)}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              Bet
            </span>
            <span className="text-lg font-medium">
              {formatCurrency(BET_AMOUNT)}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              Spins
            </span>
            <span className="text-lg font-medium">{props.spinCount}</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 rounded-xl border bg-muted/20 p-6">
          {props.displayReels.map((symbol, reelIndex) => (
            <Reel
              isSpinning={props.isSpinning}
              key={reelIndex}
              reelIndex={reelIndex}
              symbol={symbol}
            />
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          disabled={!props.canSpin}
          id="slot-machine-spin"
          onClick={props.onSpin}
          size="lg"
          type="button"
        >
          {props.isSpinning ? "Spinning..." : "Spin"}
        </Button>
      </CardFooter>
    </Card>
  )
}
