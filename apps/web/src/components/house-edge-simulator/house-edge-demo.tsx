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
import { EmpiricalRtpChart } from "@/components/house-edge-simulator/empirical-rtp-chart"

//* Hooks imports
import { useHouseEdgeSimulator } from "@/components/house-edge-simulator/use-house-edge-simulator"

//* Constants imports
import { RTP_PRESETS } from "@/lib/house-edge-simulator"

//* Utils imports
import { stopRevealNavigation } from "@/components/house-edge-simulator/stop-reveal-navigation"

function formatPercent(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}

function formatGameCount(value: number) {
  return value.toLocaleString("pt-BR")
}

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}

function handleInteractiveClick(event: MouseEvent, action: () => void) {
  stopRevealNavigation(event)
  action()
}

export function HouseEdgeSimulatorDemo() {
  const simulation = useHouseEdgeSimulator()

  return (
    <Card
      className="flex h-full max-h-[55svh] w-full flex-col gap-4 border-white/20 bg-transparent text-card-foreground"
      onMouseDown={stopRevealNavigation}
    >
      <CardContent className="flex flex-col gap-4 p-4 pt-0">
        <div className="grid grid-cols-2 gap-4 rounded-xl border border-white/10 p-4 lg:grid-cols-4">
          <div className="flex flex-col gap-1">
            <span className="text-base font-bold tracking-wide text-white uppercase">
              Jogos
            </span>
            <span className="text-2xl font-semibold text-white">
              {formatGameCount(simulation.totalGames)}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-base font-bold tracking-wide text-white uppercase">
              RTP teórico / House edge
            </span>
            <span className="text-2xl font-semibold text-white">
              {formatPercent(simulation.rtp)} /{" "}
              {formatPercent(simulation.houseEdge)}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-base font-bold tracking-wide text-white uppercase">
              RTP empírico
            </span>
            <span className="text-2xl font-semibold text-chart-1">
              {formatPercent(simulation.empiricalRtp)}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-base font-bold tracking-wide text-white uppercase">
              Lucro da casa
            </span>
            <span className="text-2xl font-semibold text-chart-1">
              {formatCurrency(simulation.houseProfit)}
            </span>
          </div>
        </div>

        <EmpiricalRtpChart
          history={simulation.history}
          theoreticalRtp={simulation.rtp}
        />

        <p className="text-center text-xs font-bold text-white">
          Linha tracejada: RTP teórico · Linha sólida: RTP empírico (R$ 1 por
          jogo)
        </p>

        <div className="flex flex-col gap-2">
          <span className="text-center text-xs font-bold tracking-wide text-white uppercase">
            RTP do jogo
          </span>
          <div className="grid w-full grid-cols-4 gap-3">
            {RTP_PRESETS.map((presetRtp) => {
              const isActive = simulation.rtp === presetRtp

              return (
                <Button
                  id={`house-edge-rtp-${Math.round(presetRtp * 100)}`}
                  key={presetRtp}
                  onClick={(event) =>
                    handleInteractiveClick(event, () =>
                      simulation.setRtp(presetRtp)
                    )
                  }
                  type="button"
                  variant={isActive ? "default" : "outline"}
                >
                  {formatPercent(presetRtp)}
                </Button>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="grid w-full grid-cols-4 gap-3">
            <Button
              id="house-edge-add-10"
              onClick={(event) =>
                handleInteractiveClick(event, () => simulation.addGames(10))
              }
              type="button"
              variant="outline"
            >
              +10
            </Button>
            <Button
              id="house-edge-add-100"
              onClick={(event) =>
                handleInteractiveClick(event, () => simulation.addGames(100))
              }
              type="button"
              variant="outline"
            >
              +100
            </Button>
            <Button
              id="house-edge-add-1000"
              onClick={(event) =>
                handleInteractiveClick(event, () => simulation.addGames(1_000))
              }
              type="button"
              variant="outline"
            >
              +1.000
            </Button>
            <Button
              id="house-edge-add-10000"
              onClick={(event) =>
                handleInteractiveClick(event, () => simulation.addGames(10_000))
              }
              type="button"
              variant="outline"
            >
              +10.000
            </Button>
          </div>
          <div className="grid w-full grid-cols-2 gap-3">
            <Button
              id="house-edge-add-100000"
              onClick={(event) =>
                handleInteractiveClick(event, () =>
                  simulation.addGames(100_000)
                )
              }
              type="button"
              variant="outline"
            >
              +100.000
            </Button>
            <Button
              id="house-edge-reset"
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
