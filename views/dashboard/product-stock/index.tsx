import { ButtonGroup } from "@/components/ui/button-group";
import { DataTable } from "./_component/data-table";
import { columns, Order } from "./_component/table-columns";
import { Button } from "@/components/ui/button";
import { PlusIcon, SearchIcon } from "lucide-react";
import { LuFilter } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { RiResetRightFill } from "react-icons/ri";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import imageOne from "@/assets/images/watchpro.png";

async function getData(): Promise<Order[]> {
  return [
    {
      image: imageOne,
      productName: "Apple watch series 4",
      category: "Digital Product",
      price: 690,
      piece: 63,
    },
    {
      image: imageOne,
      productName: "Apple watch series 4",
      category: "Digital Product",
      price: 690,
      piece: 63,
    },
    {
      image: imageOne,
      productName: "Apple watch series 4",
      category: "Digital Product",
      price: 690,
      piece: 63,
    },
    {
      image: imageOne,
      productName: "Apple watch series 4",
      category: "Digital Product",
      price: 690,
      piece: 63,
    },
  ];
}

export default async function DashboardProductStockView() {
  const data = await getData();

  return (
    <div>
      <div className="flex justify-between max-sm:flex-col mb-4">
        <h1 className="font-semibold text-2xl lg:px-3 mb-2">Product Stock</h1>
        <InputGroup className="rounded-full max-w-max max-sm:w-full">
          <InputGroupInput placeholder="Search product name" />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-4 lg:px-3">
          {/* <div>
            <div className="flex flex-col items-start gap-8">
              <ButtonGroup className="">
                <Button variant="outline" size="lg" className="md:p-8">
                  <LuFilter />
                </Button>
                <Button variant="outline" size="lg" className="md:p-8">
                  Filter By
                </Button>
                <Button variant="outline" size="lg" className="md:p-8">
                  Date
                  <IoIosArrowDown />
                </Button>
                <Button variant="outline" size="lg" className="md:p-8">
                  Order Type
                  <IoIosArrowDown />
                </Button>
                <Button variant="outline" size="lg" className="md:p-8">
                  Order Status
                  <IoIosArrowDown />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="md:p-8 text-red-600"
                >
                  <RiResetRightFill />
                  Reset Filter
                </Button>
              </ButtonGroup>
            </div>
          </div> */}

          <DataTable data={data} columns={columns} />
          <div className="@container/main grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* <ProductSaved /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
