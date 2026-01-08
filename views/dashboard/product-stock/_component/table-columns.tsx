"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { ColumnDef } from "@tanstack/react-table";
import Image, { StaticImageData } from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";

export type Order = {
  id?: string;
  image: StaticImageData;
  productName: string;
  category: string;
  price: number;
  piece: number;
};

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Image
          src={row.original.image}
          alt={row.original.productName}
          width={40}
          height={40}
          className="rounded"
        />
        <span>{row.original.productName}</span>
      </div>
    ),
  },
  {
    accessorKey: "productName",
    header: "Product Name",
    // filterFn: (row, id, value) => {
    //   const clientName = row.getValue(id) as string;
    //   const searchValue = value.toLowerCase();
    //   return (
    //     clientName.toLowerCase().includes(searchValue)      );
    // },
    // cell: ({ row }) => {
    //   const clientName = row.original.clientName || "Unknown";
    //   return (
    //     <div className="flex items-center gap-3">
    //       <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
    //         <span className="text-sm font-semibold text-primary">
    //           {clientName.charAt(0).toUpperCase()}
    //         </span>
    //       </div>
    //     </div>
    //   );
    // },
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "piece",
    header: "Piece",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row, table }) => {
      return (
        <div className="flex items-center gap-2">
          <ButtonGroup>
            <Button variant="outline" size="icon">
              <FaRegEdit />
            </Button>
            <Button variant="outline" size="icon" className="text-red-500">
              <FiTrash2 />
            </Button>
          </ButtonGroup>
        </div>
      );
    },
  },
];
