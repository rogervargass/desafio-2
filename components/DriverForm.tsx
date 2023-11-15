"use client";

import { useRef } from "react";
import Input from "./form/Input";
import Button from "./form/Button";
import { addNewDriver } from "@/lib/data";

const DriverForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form action={addNewDriver} ref={formRef} className="flex gap-8 items-end">
      <Input
        type="text"
        name="name"
        label="Nome do motorista"
        placeholder="Digite o nome"
      />
      <Input
        type="text"
        name="cpf"
        label="CPF do motorista"
        placeholder="Digite o cpf"
      />
      <Button className="p-3 bg-blue-300 text-white hover:bg-blue-200 rounded-md">
        Cadastrar motorista
      </Button>
    </form>
  );
};

export default DriverForm;
