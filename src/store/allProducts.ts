import request from "@/server/request";
import Product from "@/types/Product";
import { create } from "zustand";

interface AllProductsState {
    products: Product[];
    total: number;
    page: number;
    params: object;
    getAllProducts: () => void;
    setParams: (param: object) => void;
    setPage: (pg: number) => void;
    // setCategoryAll: (catId: string) => void;
}

const useAllProducts = create<AllProductsState>()((set, get) => ({
    products: [],
    page: 1,
    total: 0,
    params: {page: 1, limit: 8},
    getAllProducts: async() => {
        await request
        .get("product", {params: get().params})
        .then((res) => {
            set((state) => ({...state, total: res.data.total}))
            set((state) => ({ ...state, products: res.data.products }))
        });
    },
    setParams: (param) => {
        set(state => ({...state, params: {...get().params, ...param}}))
        get().getAllProducts()
    },
    setPage: (pg) => {
        set(state => ({...state, params: {...get().params, page: pg}}))
        get().getAllProducts()
    },
}))

export default useAllProducts;