//* Libraries imports
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts"

//* Components imports
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@workspace/ui/components/chart"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

//* Types imports
import type { HouseProfitPoint } from "@/lib/slot-machine/types"

type HouseProfitChartProps = {
  history: HouseProfitPoint[]
  houseProfit: number
  spinCount: number
}

const chartConfig = {
  houseProfit: {
    label: "House profit",
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
    props.history.length > 0
      ? props.history
      : [{ spin: 0, houseProfit: 0 }]

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>House profit</CardTitle>
        <CardDescription>
          Money retained by the house after each spin. The house edge is the
          gap between total wagered and total paid out.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4 rounded-xl bg-muted/40 p-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              Current profit
            </span>
            <span className="text-2xl font-semibold text-chart-1">
              {formatCurrency(props.houseProfit)}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              Spins recorded
            </span>
            <span className="text-2xl font-semibold">{props.spinCount}</span>
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
              dataKey="spin"
              tickLine={false}
              tickMargin={8}
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
                />
              }
            />
            <Line
              dataKey="houseProfit"
              dot={false}
              stroke="var(--color-houseProfit)"
              strokeWidth={2}
              type="monotone"
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
