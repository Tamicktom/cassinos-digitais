//* Libraries imports
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts"

//* Components imports
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@workspace/ui/components/chart"

//* Types imports
import type { HistoryPoint } from "@/lib/house-edge-simulator"

type EmpiricalRtpChartProps = {
  history: HistoryPoint[]
  theoreticalRtp: number
}

const chartConfig = {
  empiricalRtp: {
    label: "RTP empírico",
    color: "var(--chart-1)",
  },
}

function formatPercent(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })
}

function formatGameCount(value: number) {
  return value.toLocaleString("pt-BR")
}

export function EmpiricalRtpChart(props: EmpiricalRtpChartProps) {
  const chartData =
    props.history.length > 0
      ? props.history
      : [
          {
            gameCount: 0,
            empiricalRtp: 0,
            houseProfit: 0,
            gamesInBucket: 0,
          },
        ]

  return (
    <ChartContainer className="max-h-40 min-h-32 w-full" config={chartConfig}>
      <LineChart
        data={chartData}
        margin={{ top: 8, right: 8, bottom: 0, left: 0 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          axisLine={false}
          dataKey="gameCount"
          interval="preserveStartEnd"
          tickFormatter={(value: number) => formatGameCount(value)}
          tickLine={false}
          tickMargin={8}
          type="number"
        />
        <YAxis
          axisLine={false}
          domain={[0, 1]}
          tickFormatter={(value: number) => formatPercent(value)}
          tickLine={false}
          tickMargin={8}
          width={56}
          tick={{ fill: "white", fontSize: 16 }}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              formatter={(value) => formatPercent(Number(value))}
              labelFormatter={(label) => `n = ${formatGameCount(Number(label))}`}
              className="bg-white"
            />
          }
        />
        <ReferenceLine
          y={props.theoreticalRtp}
          stroke="var(--muted-foreground)"
          strokeDasharray="6 4"
          strokeWidth={2}
        />
        <Line
          dataKey="empiricalRtp"
          dot={false}
          stroke="var(--color-chart-1)"
          strokeWidth={2}
          type="monotone"
        />
      </LineChart>
    </ChartContainer>
  )
}
