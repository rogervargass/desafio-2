"use client";

import { TableDrivers } from "@/components";
import DriverForm from "@/components/DriverForm";
import { useFetch } from "@/lib/useFetch";
import { DriverType } from "@/types/driver";

const DriversPage = () => {
  const { data, error } = useFetch<DriverType[]>("driver");
  return (
    <main className="flex flex-1 flex-col justify-center items-center gap-20">
      <DriverForm />
      <TableDrivers drivers={data} />
    </main>
  );
};

export default DriversPage;
