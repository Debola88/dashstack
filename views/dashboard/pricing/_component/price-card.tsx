import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
        <ul>
          <li>Free Setup</li>
          <li>Bandwidth Limit 10GB</li>
          <li>20 User Connection</li>
          <li>Analytic Report</li>
          <li>Public API Access</li>
          <li>Plugins Integration</li>
          <li>Custom Content management</li>
        </ul>
        <Separator />
        <Button>Get Started</Button>
      </CardContent>
    </Card>
  );
}
