"use client";

import { addNewSupply } from "@/lib/data";
import { useRef } from "react";

const SupplyForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={formRef}
      action={addNewSupply}
      className="flex gap-8 items-center"
    >
      <input
        type="text"
        name="cpf"
        className="bg-gray-200 p-2 rounded-md"
        placeholder="Digite o cpf"
      />
      <select
        name="fuel"
        defaultValue={"DEFAULT"}
        className="bg-gray-200 p-2 rounded-md"
      >
        <option disabled value="DEFAULT">
          Escolha o combustível...
        </option>
        <option value="GASOLINE">Gasolina</option>
        <option value="DIESEL">Diesel</option>
        <option value="ETHANOL">Etanol</option>
      </select>
      <input
        type="number"
        name="liters"
        className="bg-gray-200 p-2 rounded-md"
        placeholder="Digite quantos litros"
      />
      <button className="p-3 bg-blue-300 text-white hover:bg-blue-200 rounded-md">
        Cadastrar abastecimento
      </button>
    </form>
  );
};

export default SupplyForm;
