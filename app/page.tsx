import { TableDrivers, TableSupplies } from "@/components";
import { fetchDrivers, fetchSupplies } from "@/lib/data";

async function Home() {
  const drivers = await fetchDrivers();
  const supplies = await fetchSupplies();
  return (
    <main className="flex justify-center flex-1 gap-24">
      <TableDrivers drivers={drivers} />
      <TableSupplies supplies={supplies} />
    </main>
  );
}

export default Home;
