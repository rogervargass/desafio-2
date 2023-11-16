import { TableDrivers, TableSupplies } from "@/components";
import { fetchDrivers, fetchSupplies } from "@/lib/data";

async function Home() {
  const drivers = await fetchDrivers();
  const supplies = await fetchSupplies();
  return (
    <main className="flex justify-center items-center flex-1">
      <section className="flex items-start gap-24">
        <TableDrivers drivers={drivers} />
        <TableSupplies supplies={supplies} />
      </section>
    </main>
  );
}

export default Home;
