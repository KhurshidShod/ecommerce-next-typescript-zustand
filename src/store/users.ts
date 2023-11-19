import { create } from "zustand";
import { toast } from "react-toastify";
import {getCookie} from 'cookies-next'
import request from "@/server/request";
import UserType from '@/types/User'

interface UsersState {
    loading: boolean;
    totalUsers: number;
    params: object;
    users: UserType[];
    user: UserType | object;
    getUsers: () => void;
    deleteUser: (id: string) => void;
    setParams: (params: object) => void;
    setPage: (pg: number) => void;
    getUser: (id: string, formik: {
        setFieldValue: (field: string, value: string) => void
    }) => void;
    editUser: (id: string, user: object) => void;
    createUser: (user: object) => void;
}

const useUsers = create<UsersState>()((set, get) => ({
    loading: false,
    totalUsers: 0,
    user: {},
    users: [],
    params: {
        page: 1,
        limit: 8
    },
    getUsers: async() => {
        set((state) => ({...state, loading: true}))
        await request.get("user", {
            headers: {
            "Authorization": "Bearer " + getCookie("token")
        }, params: get().params}).then(res => {
            set((state) => ({...state, users: res.data.users, totalUsers: res.data.total}))
        set((state) => ({...state, loading: false}))
        })
    },
    editUser: async(id, user) => {
        await request.put(`user/${id}`, user, {
            headers: {
            "Authorization": "Bearer " + getCookie("token")
            }
        }).then(res => {
            console.log(res.data)
            get().getUsers();
        })
    },
    getUser: async(id, formik) => {
        await request.get(`user/${id}`, {
            headers: {
            "Authorization": "Bearer " + getCookie("token")
        }}).then(res => {
            console.log(typeof formik)
            formik.setFieldValue("firstName", res.data.firstName)
            formik.setFieldValue("lastName", res.data.lastName)
            formik.setFieldValue("username", res.data.username)
            formik.setFieldValue("phoneNumber", res.data.phoneNumber)
            set((state) => ({...state, user: res.data}))
        })
    },
    deleteUser: async (id) => {
        await request.delete(`user/${id}`, {
            headers: {
            "Authorization": "Bearer " + getCookie("token")
            }
        }).then(res => {
            toast.success(res.data.msg);
            get().getUsers();
        });
    },
    setParams: (param) => {
        set(state => ({...state, params: {...get().params, ...param}}))
        get().getUsers()
    },
    setPage: (pg) => {
        set(state => ({...state, params: {...get().params, page: pg}}))
        get().getUsers()
    },
    createUser: async(user) => {
        await request.post(`user`, user, {
            headers: {
            "Authorization": "Bearer " + getCookie("token")
            }
        }).then(res => {
            console.log(res.data)
            get().getUsers()
        })
    }
}));

export default useUsers;