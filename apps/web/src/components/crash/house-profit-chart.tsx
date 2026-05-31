//* Libraries imports
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

//* Components imports
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@workspace/ui/components/chart"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

//* Types imports
import type { HouseProfitPoint } from "@/lib/crash/types"

type HouseProfitChartProps = {
  history: HouseProfitPoint[]
  houseProfit: number
  roundCount: number
}

const chartConfig = {
  houseProfit: {
    label: "Lucro da casa",
    color: "var(--chart-1)",
  },
}

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}

export function HouseProfitChart(props: HouseProfitChartProps) {
  const chartData =
    props.history.length > 0 ? props.history : [{ round: 0, houseProfit: 0 }]

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-center font-grand-casino text-2xl">
          Lucro da casa
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 p-0 pr-4">
        <div className="grid grid-cols-2 gap-4 rounded-xl p-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs tracking-wide text-black uppercase">
              Lucro atual
            </span>
            <span className="text-2xl font-semibold text-chart-1">
              {formatCurrency(props.houseProfit)}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs tracking-wide text-black uppercase">
              Rodadas registradas
            </span>
            <span className="text-2xl font-semibold">{props.roundCount}</span>
          </div>
        </div>

        <ChartContainer className="min-h-72 w-full" config={chartConfig}>
          <LineChart
            data={chartData}
            margin={{ top: 8, right: 8, bottom: 0, left: 0 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              axisLine={false}
              dataKey="round"
              interval="preserveStartEnd"
              tickLine={false}
              tickMargin={8}
              type="category"
            />
            <YAxis
              axisLine={false}
              tickFormatter={(value: number) => formatCurrency(value)}
              tickLine={false}
              tickMargin={8}
              width={88}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value) => formatCurrency(Number(value))}
                  className="bg-white"
                />
              }
            />
            <Line
              dataKey="houseProfit"
              dot={false}
              strokeWidth={2}
              type="linear"
              stroke="var(--color-chart-1)"
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
