"use client";

import { ColumnDef } from "@tanstack/react-table";
import { StaticImageData } from "next/image";

export type Deal = {
  id: string;
  productImage: StaticImageData;
  productName: string;
  location: string;
  dateTime: Date;
  piece: number;
  amount: number;
  status: "Delivered" | "Processing" | "Failed";
};

export const columns: ColumnDef<Deal>[] = [
  {
    accessorKey: "productName",
    header: "Product",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Image
          src={row.original.productImage}
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
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "dateTime",
    header: "Date - Time",
  },
  {
    accessorKey: "piece",
    header: "Piece",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
