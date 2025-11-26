import ProductCarousel from "./_components/product-carousel";
import ProductSaved from "./_components/product-saved";

export default function DashboardProductView() {
  return (
    <div>
      <h1 className="font-semibold text-2xl lg:px-3 mb-2">Products</h1>
      <div className="flex flex-1 flex-col ">
        <div className="@container/main flex flex-1 flex-col gap-4 lg:px-3">
          <ProductCarousel />
          <div className="@container/main grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProductSaved />
          </div>
        </div>
      </div>
    </div>
  );
}
