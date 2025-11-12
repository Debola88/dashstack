
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ReactNode } from "react";
import { IconType } from "react-icons/lib";


interface SectionCardProps {
  title: string;
  figure: number | string;
  trend: number;
  trendLabel: string;
  icon: ReactNode;
  badgeColor: string;
  formatFigure?: (value: number | string) => string
}


export default function SectionCard({title, figure, trend, trendLabel, icon, badgeColor, formatFigure = (value) => value.toString()}: SectionCardProps ) {

  const isPositiveTrend = trend >= 0

  return (
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>{title}</CardDescription>
          <CardTitle className="text-2xl max-md:text-xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {formatFigure(figure)}
          </CardTitle>
          <CardAction>
            <div className={`p-3 rounded-2xl text-xl ${badgeColor}`}>
                {icon}
            </div>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {isPositiveTrend ? '+' : ''}{trend}% <span className="text-[#606060]">{trendLabel}</span> 
            {/* <IconTrendingDown className="size-4" /> */}
          </div>
        </CardFooter>
      </Card>
  )
}
