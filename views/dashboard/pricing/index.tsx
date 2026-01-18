import PriceCard from "./_component/price-card";

export default function DashboardPricingView() {
  return (
    <div>
      <div className=" justify-between max-sm:flex-col mb-4">
        <h1 className="font-semibold text-2xl lg:px-3 mb-2">Pricing</h1>
        <div className="flex space-x-10 space-y-4 max-md:flex-col pt-5">
          <PriceCard />
          {/* <PriceCard />
          <PriceCard /> */}
        </div>
      </div>
    </div>
  );
}
