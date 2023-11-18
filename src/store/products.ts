import request from "@/server/request";
import { create } from "zustand";
import crud from "./crud";

interface ProductsState {
  data: [];
  loading: boolean;
  categories: [];
  getData: () => void;
  getCategories: () => void;
}
const useLastProducts = create<ProductsState>()((set) => ({
  data: [],
  loading: false,
  categories: [],
  getData: async () => {
    set(state => ({...state, loading: true}))
    await request
      .get("last-products")
      .then((res) => {
        set((state) => ({ ...state, data: res.data }))
      }).finally(() => set(state => ({...state, loading: false})));
  },
  getCategories: async () => {
    await request
      .get("category")
      .then((res) => set((state) => ({ ...state, categories: res.data })));
  },
}));

export default useLastProducts;