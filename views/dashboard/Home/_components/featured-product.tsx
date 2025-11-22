import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BasicSwiper from "./swiper";

export default function FeaturedProduct() {
  return (
    <Card className="@container/card bg-white" suppressHydrationWarning>
      <CardHeader>
        <CardTitle className="text-2xl max-md:text-xl font-semibold tabular-nums">
          Featured Product
        </CardTitle>
      </CardHeader>
      <CardContent>
        <BasicSwiper />
      </CardContent>
      <CardFooter className="flex-col items-start gap-1.5 text-sm">
        <div className="line-clamp-1 flex gap-2 font-medium">
          {/* <IconTrendingDown className="size-4" /> */}
        </div>
      </CardFooter>
    </Card>
  );
}
