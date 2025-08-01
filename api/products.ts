import { Product } from "@/types";
import axios from "axios";
import toast from "react-hot-toast";

export const getProducts = async () => {
  try {
    const res = await axios.get<Product[]>("https://fakestoreapi.com/products");
    return res.data;
  } catch (error) {
    console.log(error);
    toast.error("Failed to fetch Products!");
  }
};

export const getOneProduct = async (id?: string | number) => {
  try {
    const res = await axios.get<Product>(
      `https://fakestoreapi.com/products/${id}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    toast.error("Failed to fetch Product!");
  }
};
