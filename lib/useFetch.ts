import useSWR from "swr";
import api from "./axios";

const fetcher = async (url: string) => {
  const response = await api.get(url);
  return response.data;
};

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, fetcher);

  return { data, error };
}
