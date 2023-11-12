import request from "@/server/request";
import { create } from "zustand";
import Category from "@/types/Category";

interface CategoryState {
  loading: boolean;
  categories: Category[];
  getCategories: () => void;
}
const useCategories = create<CategoryState>()((set) => ({
  loading: false,
  categories: [],
  getCategories: async () => {
    set((state) => ({ ...state, loading: true }));
    await request
      .get("category")
      .then((res) => set((state) => ({ ...state, categories: res.data })))
      .finally(() => set((state) => ({ ...state, loading: false })));
  },
}));

export default useCategories;
