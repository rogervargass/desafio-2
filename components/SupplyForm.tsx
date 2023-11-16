"use client";

import { addNewSupply } from "@/lib/data";
import { useRef } from "react";
import Input from "./form/Input";
import Select from "./form/Select";
import Button from "./form/Button";

const SELECT_OPTIONS = [
  {
    label: "Gasolina",
    value: "GASOLINE",
  },
  {
    label: "Diesel",
    value: "DIESEL",
  },
  {
    label: "Etanol",
    value: "ETHANOL",
  },
];

const SupplyForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={formRef}
      action={addNewSupply}
      className="flex w-full max-w-5xl gap-8 justify-center items-center"
    >
      <Input
        type="text"
        name="cpf"
        label="CPF do motorista"
        placeholder="Digite o cpf"
      />
      <Select
        options={SELECT_OPTIONS}
        label="Combustível"
        name="fuel"
        defaultValue={"DEFAULT"}
      />
      <Input
        type="number"
        name="liters"
        label="Litros de combustível"
        placeholder="Digite quantos litros"
      />
      <Button className="p-3 self-end bg-blue-300 text-white hover:bg-blue-200 rounded-md">
        Cadastrar abastecimento
      </Button>
    </form>
  );
};

export default SupplyForm;
