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
      <Image
        src={row.original.image}
        alt={row.original.productName}
        width={40}
        height={40}
        className="rounded"
      />
    ),
  },
  {
    accessorKey: "productName",
    header: "Product Name",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row, table }) => {
      return <p>${row.original.price}</p>;
    },
  },
  {
    accessorKey: "piece",
    header: "Piece",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ }) => {
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
