import request from "@/server/request";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import crud from "./crud";
import LastProductsType from "@/types/lastProductsTypes";
import { persist } from "zustand/middleware";

interface ProductsState {
  data: [];
  categories: [];
  getData: () => void;
  getCategories: () => void;
}
const useLastProducts = create<ProductsState>()((set) => ({
  data: [],
  categories: [],
  getData: async () => {
    await request
      .get("last-products")
      .then((res) => set((state) => ({ ...state, data: res.data })));
  },
  getCategories: async () => {
    await request
      .get("category")
      .then((res) => set((state) => ({ ...state, categories: res.data })));
  },
}));

export default useLastProducts;
