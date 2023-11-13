import request from "@/server/request";
import Product from "@/types/Product";
import { create } from "zustand";

interface AllProductsState {
    products: Product[];
    getAllProducts: () => void;
}

const useAllProducts = create<AllProductsState>()((set, get) => ({
    products: [],
    getAllProducts: async() => {
        await request
        .get("product")
        .then((res) => set((state) => ({ ...state, products: res.data.products })));
    }
}))

export default useAllProducts;