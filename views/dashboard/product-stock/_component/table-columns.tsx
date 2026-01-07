"use client";

import { ColumnDef } from "@tanstack/react-table";
import { StaticImageData } from "next/image";

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
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "clientName",
    header: "Client Name",
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
    accessorKey: "clientAddress",
    header: "ADDRESS",
  },
  {
    accessorKey: "dateTime",
    header: "DATE",
  },
  {
    accessorKey: "type",
    header: "TYPE",
  },
{
    accessorKey: "status",
    header: "Status",
    filterFn: (row, id, value) => {
      return row.getValue(id) === value;
    },
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <div
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            status === "Completed"
              ? "bg-green-100 text-green-800"
              : "bg-orange-100 text-orange-800"
          }`}
        >
          {status}
        </div>
      );
    },
  },
];
