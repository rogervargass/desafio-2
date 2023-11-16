"use client";

import { TableSupplies } from "@/components";
import SupplyForm from "@/components/SupplyForm";
import { useFetch } from "@/lib/useFetch";
import { SupplyType } from "@/types/supply";

const SuppliesPage = () => {
  const { data, error } = useFetch<SupplyType[]>("supply");
  return (
    <main className="flex flex-1 flex-col justify-center items-center gap-20">
      <SupplyForm />
      <TableSupplies supplies={data} />
    </main>
  );
};

export default SuppliesPage;
