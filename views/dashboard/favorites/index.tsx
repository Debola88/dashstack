import FavoriteCard from "./_components/favorite-card";

export default function DashboardFavouriteView() {
  return (
    <div>
      <h1 className="font-semibold text-2xl lg:px-3 mb-2">Products</h1>
      <div className="flex flex-1 flex-col ">
        <div className="@container/main grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FavoriteCard />
        </div>
      </div>
    </div>
  );
}
