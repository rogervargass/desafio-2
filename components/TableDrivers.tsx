"use client";

import { DriverType } from "@/types/driver";
import { useRouter } from "next/navigation";
import { FiChevronRight } from "react-icons/fi";

type Props = {
  drivers: DriverType[];
};

const TableDrivers = ({ drivers }: Props) => {
  const router = useRouter();

  return (
    <section className="flex flex-col justify-center">
      {drivers ? (
        <>
          <h2 className="h2-bold text-center">Motoristas</h2>
          <table className="bg-gray-100 border-2 border-gray-200">
            <thead className="text-blue-300 text-xl">
              <tr>
                <th className="p-3">Motorista</th>
                <th className="p-3">CPF</th>
              </tr>
            </thead>
            <tbody>
              {drivers.map((driver) => {
                return (
                  <tr
                    onClick={() => router.push(`drivers/${driver.id}`)}
                    className="text-blue-300 text-lg border-gray-200 border-b-2 cursor-pointer hover:bg-blue-100"
                    key={driver.id}
                  >
                    <td className="p-3">{driver.name}</td>
                    <td className="p-3 text-center">{driver.document}</td>
                    <td className="p-3">
                      <FiChevronRight />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <h2 className="h2-bold text-center">Não há registros de motoristas</h2>
      )}
    </section>
  );
};

export default TableDrivers;
