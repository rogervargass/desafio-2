import { DriverType } from "./driver";

export type FuelType = "GASOLINE" | "DIESEL" | "ETHANOL";

export type SupplyType = {
  id: string;
  fuel: FuelType;
  liters: number;
  createdAt: string;
  totalPrice: string;
  driverName?: string;
  driverId?: string;
};
