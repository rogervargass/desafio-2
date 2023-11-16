"use client";

import { TableSupplies } from "@/components";
import Button from "@/components/form/Button";
import { useFetch } from "@/lib/useFetch";
import { useRouter } from "next/navigation";

const SingleDriverPage = ({ params }: { params: { id: string } }) => {
  const { data, error } = useFetch(`driver/${params.id}`);
  const router = useRouter();
  return (
    <main className="flex flex-1 flex-col justify-center items-center gap-20">
      <h2 className="h2-bold text-center">{data?.name}</h2>
      <TableSupplies supplies={data?.supplies} driverName={data?.name} />
      <Button
        className="p-3 bg-blue-300 text-white hover:bg-blue-200 rounded-md"
        onClick={() => router.back()}
      >
        Voltar
      </Button>
    </main>
  );
};

export default SingleDriverPage;
