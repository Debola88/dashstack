"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";

export const description = "A linear area chart";

const chartData = [
  { sales: "5k", percent: 0, revenue: 29000 },
  { sales: "10k", percent: 50, revenue: 24570 },
  { sales: "15k", percent: 20, revenue: 46840 },
  { sales: "20k", percent: 50, revenue: 30000 },
  { sales: "25k", percent: 86, revenue: 64366 },
  { sales: "30k", percent: 50, revenue: 29000 },
  { sales: "35k", percent: 40, revenue: 29000 },
  { sales: "40k", percent: 50, revenue: 29000 },
  { sales: "45k", percent: 35, revenue: 29000 },
  { sales: "50k", percent: 44, revenue: 29000 },
  { sales: "55k", percent: 21, revenue: 29000 },
  { sales: "60k", percent: 14, revenue: 29000 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ChartAreaLinear() {
  return (
    <Card className="@container/card" suppressHydrationWarning>
      <CardHeader>
        <CardTitle className="lg:text-2xl">Sales Details</CardTitle>
        {/* <CardDescription>
        </CardDescription> */}
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <defs>
              <linearGradient
                id="customBlueGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor="#42B6F6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#BFE8FF" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="sales"
              tickLine={false}
              axisLine={false}
              stroke="#42B6F6"
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              dataKey="percent"
              tickLine={false}
              axisLine={false}
              stroke="#42B6F6"
              tickMargin={8}
                // tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="percent"
              type="linear"
              fill="url(#customBlueGradient)"
              fillOpacity={1}
              stroke="#42B6F6"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        {/* <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              January - June 2024
            </div>
          </div>
        </div> */}
      </CardFooter>
    </Card>
  );
}
