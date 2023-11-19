import { create } from "zustand";
import { toast } from "react-toastify";
import {getCookie} from 'cookies-next'
import request from "@/server/request";
import OrderType from '@/types/Orders'

interface UsersState {
    loading: boolean;
    totalOrders: number;
    orders: OrderType[];
    getOrders: () => void;
    cancelOrder: (id: string) => void;
    confirmOrder: (id: string) => void;
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
        }}).then(res => {
            console.log(res.data)
            set((state) => ({...state, orders: res.data, totalOrders: res.data.length}))
        set((state) => ({...state, loading: false}))
        })
    },
    cancelOrder: async (id) => {
        await request.put(`payment/${id}`, {}, {
            headers: {
                "Authorization": "Bearer " + getCookie("token")
            }
        }).then(res => {
            console.log(res.data)
            get().getOrders();
        });
    },
    confirmOrder: async(id) => {
        console.log(getCookie("token"))
        await request.post(`payment/${id}`, {}, {
            headers: {
                "Authorization": "Bearer " + getCookie("token")
            }
        }).then(res => {
            console.log(res.data)
            get().getOrders()
        })
    }
}));

export default useOrders;