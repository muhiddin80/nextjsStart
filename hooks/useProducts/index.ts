import { getOneProduct, getProducts } from "@/api";
import { queryKeys } from "@/constants";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
  return useQuery({
    queryKey: [queryKeys.PRODUCTS],
    queryFn: getProducts,
  });
};

export const useProduct = (id: string | number) => {
  return useQuery({
    queryKey: [queryKeys.PRODUCT, id],
    queryFn: () => getOneProduct(id),
    enabled: !!id,
  });
};
