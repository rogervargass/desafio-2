"use client";

import { useRef, useState } from "react";
import Input from "./form/Input";
import Button from "./form/Button";
import { addNewDriver } from "@/lib/data";
import { useRouter } from "next/navigation";

const DriverForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputDocumentRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const response = await addNewDriver(formData);
    if (response !== null) router.push("/");
  };

  return (
    <form ref={formRef} action={handleSubmit} className="flex gap-8 items-end">
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
