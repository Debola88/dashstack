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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const description = "An interactive area chart";

const chartData = [
  { sales: "5k", percent: 0, profit: 5000 },
  { sales: "10k", percent: 50, profit: 25000 },
  { sales: "15k", percent: 20, profit: 12000 },
  { sales: "20k", percent: 50, profit: 28000 },
  { sales: "25k", percent: 86, profit: 45000 },
  { sales: "30k", percent: 50, profit: 26000 },
  { sales: "35k", percent: 40, profit: 22000 },
  { sales: "40k", percent: 50, profit: 27000 },
  { sales: "45k", percent: 35, profit: 18000 },
  { sales: "50k", percent: 44, profit: 24000 },
  { sales: "55k", percent: 21, profit: 13000 },
  { sales: "60k", percent: 14, profit: 9000 },
];

const monthList = [
  { month: "January", value: "january" },
  { month: "Febuary", value: "febuary" },
  { month: "March", value: "march" },
  { month: "April", value: "april" },
  { month: "May", value: "may" },
  { month: "June", value: "june" },
  { month: "July", value: "july" },
  { month: "August", value: "august" },
  { month: "September", value: "september" },
  { month: "October", value: "october" },
  { month: "November", value: "november" },
  { month: "December", value: "december" },
];

const chartConfig = {
  profit: {
    label: "Profit",
    color: "hsl(var(--chart-1))",
  },
  percent: {
    label: "Percent",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function RevenueChart() {
  return (
    <Card className="@container/card" suppressHydrationWarning>
      <CardHeader className="flex justify-between">
        <CardTitle className="lg:text-2xl">Sales Details</CardTitle>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Month" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Months</SelectLabel>
              {monthList.map((list, index) => (
                <SelectItem key={index} value={list.value}>
                  {list.month}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
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
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="sales"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              dataKey="percent"
              tickLine={false}
              axisLine={false}
              // stroke="#42B6F6"
              tickMargin={8}
              // tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              {/* <linearGradient id="fillProfit" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-profit)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-profit)"
                  stopOpacity={0.1}
                />
              </linearGradient> */}
              <linearGradient id="fillPercent" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-percent)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-percent)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="sales"
              type="natural"
              fill="url(#fillProfit)"
              fillOpacity={0.4}
              stroke="var(--color-profit)"
            />
            <Area
              dataKey="profit"
              type="natural"
              fill="url(#fillPercent)"
              fillOpacity={0.4}
              stroke="var(--color-percent)"
            />
            <ChartLegend content={<ChartLegendContent />} />
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
