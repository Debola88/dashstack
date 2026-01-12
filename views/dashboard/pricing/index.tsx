import PriceCard from "./_component/price-card";

export default function DashboardPricingView() {
  return (
    <div>
      <div className="flex justify-between max-sm:flex-col mb-4">
        <h1 className="font-semibold text-2xl lg:px-3 mb-2">Pricing</h1>
        <PriceCard />
      </div>
    </div>
  );
}
