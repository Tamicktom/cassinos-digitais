//* Libraries imports
import type { MouseEvent } from "react"

//* Components imports
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { MathFormula } from "@/components/math-formula"
import { RecentOutcomes } from "@/components/law-of-large-numbers/recent-outcomes"
import { RunningMeanChart } from "@/components/law-of-large-numbers/running-mean-chart"

//* Hooks imports
import { useLawOfLargeNumbers } from "@/components/law-of-large-numbers/use-law-of-large-numbers"

//* Utils imports
import { stopRevealNavigation } from "@/components/law-of-large-numbers/stop-reveal-navigation"

function formatMean(value: number) {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 4,
    maximumFractionDigits: 4,
  })
}

function handleInteractiveClick(
  event: MouseEvent,
  action: () => void
) {
  stopRevealNavigation(event)
  action()
}

export function LawOfLargeNumbersDemo() {
  const simulation = useLawOfLargeNumbers()

  return (
    <Card
      className="flex w-full h-full max-h-[55svh] flex-col gap-4 border-white/20 text-card-foreground bg-transparent"
      onMouseDown={stopRevealNavigation}
    >
      <CardHeader className="pb-0">
        <CardTitle className="text-center text-lg font-semibold text-white">
          Média amostral convergindo para o valor esperado
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 p-4 pt-0">
        <div className="grid grid-cols-3 gap-4 rounded-xl border border-white/10 p-4">
          <div className="flex flex-col gap-1">
            <span className="text-base font-bold tracking-wide text-white uppercase">
              Lançamentos (n)
            </span>
            <span className="text-2xl font-semibold text-white">
              {simulation.trialCount}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-base tracking-wide text-white uppercase font-bold">
              Média amostral
            </span>
            <span className="text-2xl font-semibold text-chart-1">
              {formatMean(simulation.sampleMean)}
            </span>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-base tracking-wide text-white uppercase font-bold">
              Valor esperado
            </span>
            <MathFormula className="text-xl text-white" display={false}>
              {String.raw`E[X] = 0{,}5`}
            </MathFormula>
          </div>
        </div>

        <RunningMeanChart
          expectedValue={simulation.expectedValue}
          history={simulation.history}
        />

        <p className="text-center text-xs text-white font-bold">
          Linha tracejada: E[X] = 0,5 · Linha sólida: média amostral
        </p>

        <RecentOutcomes outcomes={simulation.recentOutcomes} />

        <div className="flex flex-col gap-2">
          <Button
            className="w-full"
            id="lln-flip"
            onClick={(event) =>
              handleInteractiveClick(event, () => simulation.addTrials(1))
            }
            size="lg"
            type="button"
          >
            Lançar moeda
          </Button>
          <div className="grid w-full grid-cols-3 gap-3">
            <Button
              id="lln-add-10"
              onClick={(event) =>
                handleInteractiveClick(event, () => simulation.addTrials(10))
              }
              type="button"
              variant="outline"
            >
              +10
            </Button>
            <Button
              id="lln-add-100"
              onClick={(event) =>
                handleInteractiveClick(event, () => simulation.addTrials(100))
              }
              type="button"
              variant="outline"
            >
              +100
            </Button>
            <Button
              id="lln-reset"
              onClick={(event) =>
                handleInteractiveClick(event, simulation.reset)
              }
              type="button"
              variant="outline"
            >
              Reiniciar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
