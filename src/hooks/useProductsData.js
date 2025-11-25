import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { productsMock } from "../mocks/productsMock";

const API_URL = "http://localhost:8080";

const fetchData = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/product`);

    if (!data || data.length === 0) {
      console.log("API retornou vazio. Usando Mock...");
      return productsMock;
    }

    return data;
  } catch (error) {
    console.log("Erro na API. Usando Mock de fallback.", error);

    return productsMock;
  }
};

export function useProductsData() {
  const query = useQuery({
    queryKey: ["products-todos"],
    queryFn: fetchData,
  });

  return query;
}
