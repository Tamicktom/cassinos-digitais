//* Libraries imports
import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts"

//* Components imports
import {
  ChartContainer,
  type ChartConfig,
} from "@workspace/ui/components/chart"

const chartData = [
  {
    country: "EUA*",
    revenue: 17.31,
    label: "17,31",
    fill: "var(--color-default)",
  },
  {
    country: "Reino Unido",
    revenue: 9.9,
    label: "9,9",
    fill: "var(--color-default)",
  },
  {
    country: "Itália",
    revenue: 4.62,
    label: "4,62",
    fill: "var(--color-default)",
  },
  {
    country: "Rússia",
    revenue: 4.51,
    label: "4,51",
    fill: "var(--color-default)",
  },
  {
    country: "Brasil",
    revenue: 4.14,
    label: "4,14",
    fill: "var(--color-highlight)",
  },
  {
    country: "Austrália",
    revenue: 3.66,
    label: "3,66",
    fill: "var(--color-default)",
  },
  { country: "Canadá", revenue: 3, label: "3", fill: "var(--color-default)" },
  {
    country: "França",
    revenue: 2.89,
    label: "2,89",
    fill: "var(--color-default)",
  },
  {
    country: "África do Sul",
    revenue: 2.52,
    label: "2,52",
    fill: "var(--color-default)",
  },
  {
    country: "Alemanha",
    revenue: 1.9,
    label: "1,9",
    fill: "var(--color-default)",
  },
]

const chartConfig = {
  revenue: {
    label: "Faturamento (US$ bi)",
  },
  default: {
    label: "Países",
    color: "var(--primary)",
  },
  highlight: {
    label: "Brasil",
    color: "var(--secondary)",
  },
  value: {
    color: "var(--primary-foreground)",
  },
} satisfies ChartConfig

export function SectorRevenueChart() {
  return (
    <div className="w-full rounded-lg border bg-card p-3 text-card-foreground">
      <p className="pb-3 text-center text-sm font-semibold">
        Estimativa de faturamento do setor em 2025, em US$ bilhões
      </p>
      <ChartContainer
        config={chartConfig}
        className="aspect-auto h-[300px] w-full"
        initialDimension={{ width: 400, height: 380 }}
      >
        <BarChart
          accessibilityLayer
          data={chartData}
          layout="vertical"
          margin={{ left: 0, right: 8 }}
        >
          <YAxis
            dataKey="country"
            type="category"
            tickLine={false}
            tickMargin={8}
            axisLine={false}
            width={100}
            tick={{ fill: "var(--card-foreground)", fontSize: 12 }}
          />
          <XAxis dataKey="revenue" type="number" hide />
          <Bar dataKey="revenue" radius={0}>
            <LabelList
              dataKey="label"
              position="insideRight"
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
