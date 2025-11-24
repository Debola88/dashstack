import ProductCarousel from "./_components/product-carousel";
import ProductSaved from "./_components/product-saved";

export default function DashboardProductView() {
  return (
    <div>
      <h1 className="font-semibold text-2xl lg:px-3 mb-2">Products</h1>
      <div className="flex flex-1 flex-col ">
        <div className="@container/main flex flex-1 flex-col gap-4 lg:px-3">
          {/* <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:shadow-xs @sm/main:grid-cols-2 @5xl/main:grid-cols-4">
            
              </div> */}
          <ProductCarousel />
          <div className="@container/main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <ProductSaved/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* <CustomerCard />
                <FeaturedProduct />
                <SalesAnalyticCard /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
