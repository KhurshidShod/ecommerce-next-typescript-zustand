import { create } from "zustand";
import { toast } from "react-toastify";
import {getCookie} from 'cookies-next'
import request from "@/server/request";
import UserType from '@/types/User'

interface UsersState {
    loading: boolean;
    totalOrders: number;
    params: object;
    orders: UserType[];
    getOrders: () => void;
    deleteOrder: (id: string) => void;
    setParams: (params: object) => void;
    setPage: (pg: number) => void;
}

const useOrders = create<UsersState>()((set, get) => ({
    loading: false,
    totalOrders: 0,
    orders: [],
    params: {
        page: 1,
        limit: 8
    },
    getOrders: async() => {
        set((state) => ({...state, loading: true}))
        await request.get("payment", {
            headers: {
            "Authorization": "Bearer " + getCookie("token")
        }, params: get().params}).then(res => {
            console.log(res.data)
            set((state) => ({...state, orders: res.data, totalOrders: res.data.length}))
        set((state) => ({...state, loading: false}))
        })
    },
    deleteOrder: async (id) => {
        await request.delete(`payment/${id}`, {
            headers: {
            "Authorization": "Bearer " + getCookie("token")
            }
        }).then(res => {
            toast.success(JSON.stringify(res));
            get().getOrders();
        });
    },
    setParams: (param) => {
        set(state => ({...state, params: {...get().params, ...param}}))
        get().getOrders()
    },
    setPage: (pg) => {
        set(state => ({...state, params: {...get().params, page: pg}}))
        get().getOrders()
    },
}));

export default useOrders;