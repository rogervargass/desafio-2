import { SupplyType } from "./supply";

export type DriverType = {
  id: string;
  name: string;
  document: string;
  supplies?: SupplyType[];
};
