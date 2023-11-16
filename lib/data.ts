import api from "@/lib/axios";
import { DriverType } from "@/types/driver";
import { maskCpf } from "@/utils/utils";
import { AxiosError } from "axios";

export async function fetchDrivers() {
  try {
    const { data } = await api.get("/driver");
    if (data.length > 0) {
      const drivers: DriverType[] = data.map((driver: any) => {
        return {
          id: driver.id,
          name: driver.name,
          document: maskCpf(driver.document),
          supplies: driver.supplies,
        };
      });

      return drivers;
    }
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function addNewDriver(formData: FormData) {
  const name = formData.get("name");
  const cpf = formData.get("cpf");

  try {
    return await api.post("/driver", {
      name: name,
      document: cpf,
    });
  } catch (error) {
    return error;
  }
}

export async function fetchSupplies() {
  try {
    const { data } = await api.get("/supply");
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function addNewSupply(formData: FormData) {
  const fuel = formData.get("fuel");
  const cpf = formData.get("cpf");
  const liters = formData.get("liters");

  try {
    await api.post("/supply", {
      fuel: fuel,
      driverCpf: cpf,
      liters: liters,
    });
  } catch (error) {
    console.log(error);
  }
}
