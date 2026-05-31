//* Libraries imports
import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts"

//* Components imports
import {
  ChartContainer,
  type ChartConfig,
} from "@workspace/ui/components/chart"

const chartData = [
  { year: "2023", bettors: 22, label: "22", fill: "var(--color-default)" },
  { year: "2024", bettors: 23, label: "23", fill: "var(--color-default)" },
  {
    year: "2025",
    bettors: 28.6,
    label: "28,6",
    fill: "var(--color-highlight)",
  },
]

const chartConfig = {
  bettors: {
    label: "Apostadores (mi)",
  },
  default: {
    label: "Anos",
    color: "var(--primary)",
  },
  highlight: {
    label: "2025",
    color: "var(--secondary)",
  },
  value: {
    color: "var(--primary-foreground)",
  },
} satisfies ChartConfig

export function OnlineBettorsChart() {
  return (
    <div className="w-full rounded-lg border bg-card p-3 text-card-foreground">
      <p className="pb-3 text-center text-sm font-semibold">
        Apostadores online (milhões de pessoas)
      </p>
      <ChartContainer
        config={chartConfig}
        className="aspect-auto h-[300px] w-full"
        initialDimension={{ width: 400, height: 300 }}
      >
        <BarChart
          accessibilityLayer
          data={chartData}
          margin={{ top: 24, left: 0, right: 8, bottom: 0 }}
        >
          <XAxis
            dataKey="year"
            tickLine={false}
            tickMargin={8}
            axisLine={false}
            tick={{ fill: "var(--card-foreground)", fontSize: 12 }}
          />
          <YAxis
            domain={[0, 32]}
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tick={{ fill: "var(--card-foreground)", fontSize: 12 }}
            width={32}
          />
          <Bar dataKey="bettors" radius={[4, 4, 0, 0]}>
            <LabelList
              dataKey="label"
              position="top"
              offset={8}
              className="fill-(--color-value)"
              fontSize={12}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  )
}
