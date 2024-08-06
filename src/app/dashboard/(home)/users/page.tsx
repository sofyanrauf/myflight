import { DataTable } from "@/components/ui/data-table";
import React from "react";
import type { Metadata } from "next";
import { columns } from "./components/columns-user";
import { getCustomers } from "./lib/data";

export const metadata: Metadata = {
  title: "Dashboard | User",
};

export default async function UsersPage() {
  const users = await getCustomers();
  return (
    <>
      <div className="flex flex-row item-center justify-between">
        <div className="my-5 text-2xl font-bold">User</div>
      </div>
      <DataTable columns={columns} data={users} />
    </>
  );
}
