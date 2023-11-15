import { SupplyType } from "@/types/supply";
import { formatDate, formatFuel, formatMoney } from "@/utils/utils";

type Props = {
  supplies: SupplyType[];
};

const TableSupplies = ({ supplies }: Props) => {
  return (
    <section className="flex flex-col justify-center">
      {supplies ? (
        <>
          <h2 className="h2-bold text-center">Últimos abastecimentos</h2>
          <table className="bg-gray-100 border-2 border-gray-200">
            <thead className="text-blue-300 text-xl">
              <tr>
                <th className="p-3">Motorista</th>
                <th className="p-3">Combustível</th>
                <th className="p-3">Litros</th>
                <th className="p-3">Data</th>
                <th className="p-3">Valor Total</th>
              </tr>
            </thead>
            <tbody>
              {supplies.map((supply) => {
                return (
                  <tr
                    className="text-blue-300 text-lg border-gray-200 border-b-2"
                    key={supply.id}
                  >
                    <td className="p-3">{supply.driver?.name}</td>
                    <td className="p-3 text-center">
                      {formatFuel(supply.fuel)}
                    </td>
                    <td className="p-3 text-center">{`${supply.liters}L`}</td>
                    <td className="p-3 text-center">
                      {formatDate(supply.createdAt)}
                    </td>
                    <td className="p-3 text-center">
                      {formatMoney(supply.totalPrice)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <h2 className="h2-bold text-center">
          Não há registros de abastecimentos
        </h2>
      )}
    </section>
  );
};

export default TableSupplies;
