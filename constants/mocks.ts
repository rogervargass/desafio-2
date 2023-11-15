import { DriverType } from "@/types/driver";
import { SupplyType } from "@/types/supply";

export const drivers: DriverType[] = [
  {
    id: "183a3fcd-fe5b-4f39-ab7f-d65e234c6c31",
    name: "Roger Teste",
    document: "111.111.111-11",
    supplies: [],
  },
  {
    id: "b44e14d0-5a86-4018-9b31-3f778fc75703",
    name: "Roger Mock",
    document: "222.222.222-22",
    supplies: [
      {
        fuel: "GASOLINE",
        liters: 4,
        createdAt: "2023-11-12T09:10:34.755Z",
        totalPrice: "$23.80",
        id: "fe511ccd-ab90-430c-9b39-04b84af4076f",
      },
    ],
  },
  {
    id: "481ba6ff-ab0e-4fa8-b23d-5b9e9112feda",
    name: "Roger Mock",
    document: "222.222.222-22",
    supplies: [
      {
        fuel: "GASOLINE",
        liters: 5,
        createdAt: "2023-11-12T11:17:48.919Z",
        totalPrice: "$29.75",
        id: "7f8471ed-b30b-4da4-8960-ff3dec939893",
      },
    ],
  },
];
export const supplies: SupplyType[] = [
  {
    id: "55fa0913-5016-4092-85a8-0de2e97d89f3",
    fuel: "GASOLINE",
    liters: 10,
    createdAt: "2023-11-14T14:04:19.708Z",
    totalPrice: "$59.50",
    driver: {
      id: "183a3fcd-fe5b-4f39-ab7f-d65e234c6c31",
      name: "Roger Teste",
      document: "11111111111",
    },
  },
  {
    id: "855819d2-4180-4385-812a-a3bcee0949b3",
    fuel: "GASOLINE",
    liters: 10,
    createdAt: "2023-11-14T14:04:20.631Z",
    totalPrice: "$59.50",
    driver: {
      id: "183a3fcd-fe5b-4f39-ab7f-d65e234c6c31",
      name: "Roger",
      document: "11111111111",
    },
  },
  {
    id: "7fca80bf-3672-4560-acd9-ef953d3301dc",
    fuel: "GASOLINE",
    liters: 10,
    createdAt: "2023-11-14T14:04:50.515Z",
    totalPrice: "$59.50",
    driver: {
      id: "481ba6ff-ab0e-4fa8-b23d-5b9e9112feda",
      name: "Roger 2",
      document: "22222222222",
    },
  },
];
