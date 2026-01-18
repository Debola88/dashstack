import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

interface pricingCard {
  planName: "Basic" | "Standard" | "Premium";
  color: string;
  price: string;
}

export default function PriceCard({ planName, color, price }: pricingCard) {
  return (
    <Card className="w-full">
      <CardHeader className="">{planName}</CardHeader>
      <CardDescription>
        <p>Monthly Charge</p>
      </CardDescription>
      <CardContent>
        <p className="text-[#4880FF] text-3xl font-bold">
          ${/* {price} */}
          14.99
        </p>
      </CardContent>
    </Card>
  );
}
