"use client";
import {
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { year: "2015", sales: 25, profit: 0 },
  { year: "2015.5", sales: 45, profit: 20 },
  { year: "2016", sales: 70, profit: 60 },
  { year: "2016.5", sales: 65, profit: 45 },
  { year: "2017", sales: 50, profit: 40 },
  { year: "2017.5", sales: 48, profit: 30 },
  { year: "2018", sales: 60, profit: 35 },
  { year: "2018.5", sales: 75, profit: 50 },
  { year: "2019", sales: 100, profit: 85 },
];

const chartConfig = {
  sales: {
    label: "Sales",
    color: "#4880FF",
  },
  profit: {
    label: "Profit",
    color: "#00B69B",
  },
} satisfies ChartConfig;

export default function SalesAnalyticCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Sales Analytics</CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <ChartContainer config={chartConfig} className="h-[280px] w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: -20,
              right: 5,
              top: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E5E7EB"
              vertical={false}
            />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tick={{ fill: "#9CA3AF" }}
              tickFormatter={(value) => value.split(".")[0]}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tick={{ fill: "#9CA3AF" }}
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
            />
            <ChartTooltip
              content={<ChartTooltipContent />}
              cursor={{ stroke: "#E5E7EB", strokeWidth: 1 }}
            />
             <Area
              dataKey="sales"
              type="monotone"
              stroke="#4880FF"
              strokeWidth={3}
              fill="url(#)"
              dot={{ fill: "#4880FF", strokeWidth: 2, r: 5 }}
            />
            <Area
              dataKey="profit"
              type="monotone"
              stroke="#00B69B"
              strokeWidth={3}
              fill="url(#)"
              dot={{ fill: "#00B69B", strokeWidth: 2, r: 5 }}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
