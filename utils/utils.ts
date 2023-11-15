import { FuelType } from "@/types/supply";

export const maskCpf = (value: string): string => {
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return value;
};

export const formatFuel = (fuel: FuelType) => {
  const fuels = {
    GASOLINE: "Gasolina",
    DIESEL: "Diesel",
    ETHANOL: "Etanol",
  };

  return fuels[fuel];
};

export const formatDate = (dateStr: string, locale: string = "pt-BR") => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const formatMoney = (
  value: string,
  locale: string = "pt-BR"
): string => {
  const moneyNumber = parseFloat(value.slice(1, value.length));

  return new Intl.NumberFormat(locale, {
    currency: "BRL",
    style: "currency",
  }).format(moneyNumber);
};
