import SectionCard from "./_components/section-card";
import { FaUserFriends } from "react-icons/fa";
import { RiBox3Fill } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa6";
import { PiClockCounterClockwiseBold } from "react-icons/pi";

const cardInfo = [
  {
    title: "Total User",
    figure: 40689,
    trend: 1.3,
    trendLabel: "from yesterday",
    icon: <FaUserFriends />,
    badgeColor: "bg-[#8280FF]/50 text-[#8280FF]",
    formatFigure: (value: number | string) => value.toLocaleString(),
  },
  {
    title: "Total Order",
    figure: "10293",
    trend: 1.3,
    trendLabel: "from past week",
    icon: <RiBox3Fill />,
    badgeColor: "bg-[#FEC53D]/50 text-[#FEC53D]",
    formatFigure: (value: number | string) => value.toLocaleString(),
  },
  {
    title: "Total Sales",
    figure: "$89,000",
    trend: 1.3,
    trendLabel: "from yesterday",
    icon: <FaChartLine />,
    badgeColor: "bg-[#4AD991]/50 text-[#4AD991]",
    formatFigure: (value: number | string) => value.toLocaleString(),
  },
  {
    title: "Total User",
    figure: "2040",
    trend: 1.3,
    trendLabel: "from yesterday",
    icon: <PiClockCounterClockwiseBold />,
    badgeColor: "bg-[#FF9066]/50 text-[#FF9066]",
    formatFigure: (value: number | string) => value.toLocaleString(),
  },
];

export default function DashboardHomeView() {
  return (
    <div>
      <div className="flex flex-1 flex-col ">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @sm/main:grid-cols-2 @5xl/main:grid-cols-4">
            {cardInfo.map((card, index) => (
              <SectionCard
                key={index}
                title={card.title}
                figure={card.figure}
                trend={card.trend}
                trendLabel={card.trendLabel}
                icon={card.icon}
                badgeColor={card.badgeColor}
                formatFigure={card.formatFigure}
              />
            ))}
          </div>
          <div className="px-4 lg:px-6">{/* <ChartAreaInteractive /> */}</div>
          {/* <DataTable data={data} /> */}
        </div>
      </div>
    </div>
  );
}
