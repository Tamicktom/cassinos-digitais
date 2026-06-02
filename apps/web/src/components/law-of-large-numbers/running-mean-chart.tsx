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
import type { TrialPoint } from "@/lib/law-of-large-numbers"

type RunningMeanChartProps = {
  expectedValue: number
  history: TrialPoint[]
}

const chartConfig = {
  sampleMean: {
    label: "Média amostral",
    color: "var(--chart-1)",
  },
}

function formatMean(value: number) {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  })
}

export function RunningMeanChart(props: RunningMeanChartProps) {
  const chartData =
    props.history.length > 0 ? props.history : [{ n: 0, sampleMean: 0 }]

  return (
    <ChartContainer className="max-h-40 min-h-32 w-full" config={chartConfig}>
      <LineChart
        data={chartData}
        margin={{ top: 8, right: 8, bottom: 0, left: 0 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          axisLine={false}
          dataKey="n"
          interval="preserveStartEnd"
          tickLine={false}
          tickMargin={8}
          type="number"
        />
        <YAxis
          axisLine={false}
          domain={[0, 1]}
          tickFormatter={(value: number) => formatMean(value)}
          tickLine={false}
          tickMargin={8}
          width={56}
          tick={{ fill: "white", fontSize: 16 }}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              formatter={(value) => formatMean(Number(value))}
              labelFormatter={(label) => `n = ${label}`}
              className="bg-white"
            />
          }
        />
        <ReferenceLine
          y={props.expectedValue}
          stroke="var(--muted-foreground)"
          strokeDasharray="6 4"
          strokeWidth={2}
        />
        <Line
          dataKey="sampleMean"
          dot={false}
          stroke="var(--color-chart-1)"
          strokeWidth={2}
          type="monotone"
        />
      </LineChart>
    </ChartContainer>
  )
}
