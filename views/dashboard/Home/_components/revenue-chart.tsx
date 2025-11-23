"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
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
  { month: "5k", sales: 28, profit: 35 },
  { month: "10k", sales: 35, profit: 42 },
  { month: "15k", sales: 32, profit: 70 },
  { month: "20k", sales: 45, profit: 35 },
  { month: "25k", sales: 52, profit: 55 },
  { month: "30k", sales: 48, profit: 52 },
  { month: "35k", sales: 95, profit: 58 },
  { month: "40k", sales: 75, profit: 60 },
  { month: "45k", sales: 48, profit: 55 },
  { month: "50k", sales: 65, profit: 65 },
  { month: "55k", sales: 55, profit: 95 },
  { month: "60k", sales: 62, profit: 88 },
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
  sales: {
    label: "Sales",
    color: "#FF7F50",
  },
  profit: {
    label: "Profit",
    color: "#9B7EBD",
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
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: -20,
              right: 10,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E5E7EB"
              vertical={false}
              opacity={0.5}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              tickFormatter={(value) => value}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF7F50" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#FF7F50" stopOpacity={0.2} />
              </linearGradient>
              <linearGradient id="fillProfit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9B7EBD" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#9B7EBD" stopOpacity={0.2} />
              </linearGradient>
            </defs>
             <Area
              dataKey="sales"
              type="monotone"
              stroke="#FF7F50"
              strokeWidth={2}
              fill="url(#fillSales)"
              fillOpacity={1}
            />
            <Area
              dataKey="profit"
              type="monotone"
              stroke="#9B7EBD"
              strokeWidth={2}
              fill="url(#fillProfit)"
              fillOpacity={1}
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
