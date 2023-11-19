import { create } from "zustand";
import { toast } from "react-toastify";
import {getCookie} from 'cookies-next'
import request from "@/server/request";
import UserType from '@/types/User'
import Product from "@/types/Product";

interface AdminProductsState {
    loading: boolean;
    totalProducts: number;
    params: object;
    products: Product[];
    getProducts: () => void;
    deleteProduct: (id: string) => void;
    setParams: (params: object) => void;
    setPage: (pg: number) => void;
}

const useProductsAdmin = create<AdminProductsState>()((set, get) => ({
    loading: false,
    totalProducts: 0,
    products: [],
    params: {
        page: 1,
        limit: 8
    },
    getProducts: async() => {
        set((state) => ({...state, loading: true}))
        await request.get("product", {
            headers: {
            "Authorization": "Bearer " + getCookie("token")
        }, params: get().params}).then(res => {
            set((state) => ({...state, products: res.data.products, totalProducts: res.data.total}))
        set((state) => ({...state, loading: false}))
        })
    },
    deleteProduct: async (id) => {
        await request.delete(`product/${id}`, {
            headers: {
            "Authorization": "Bearer " + getCookie("token")
            }
        }).then(res => {
            toast.success(res.data.msg);
            get().getProducts();
        });
    },
    setParams: (param) => {
        set(state => ({...state, params: {...get().params, ...param}}))
        get().getProducts()
    },
    setPage: (pg) => {
        set(state => ({...state, params: {...get().params, page: pg}}))
        get().getProducts()
    },
}));

export default useProductsAdmin;