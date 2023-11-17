import create, { StateCreator } from "zustand";
import request from "../server/request";
import UserType from "@/types/User";
import { toast } from "react-toastify";
import { getCookie, setCookie } from "cookies-next";

interface AuthState {
  loading: boolean;
  user: UserType;
  token: string;
  isAuth: boolean;
  register: (user: object) => void;
  login: (user: object, router: any) => void;
  setIsAuth: (bool: boolean) => void;
  editUserData: (data: object) => void;
}

const useAuth = create<AuthState>()((set, get) => ({
  user: getCookie("user") ? JSON.parse(getCookie("user")) : {},
  isAuth: getCookie("token") ? true : false,
  loading: false,
  token: getCookie("token") ? getCookie("token") : "",
  setIsAuth: (bool) => {
    set((state) => ({...state, isAuth: bool}))
  },
  register: async (user) => {
    set((state) => ({ ...state, loading: true }));
    await request
      .post("auth/register", user)
      .then((res) => {
        setCookie("token", res.data.accesstoken)
        setCookie("user", res.data.user)
        get().setIsAuth(true)
        set((state) => ({...state, token: res.data.accesstoken, user: res.data.user}))
        toast.success("Registered successfully")
    })
      .catch(err => {
        toast.error(err.response.data.msg)
      })
      .finally(() => {
        set((state) => ({ ...state, loading: true }));
      });
  },
  login: async (user, router) => {
    set((state) => ({ ...state, loading: true }));
    await request.post("auth/login", user).then((res) => {
      request.defaults.headers.Authorization = `Bearer ${res.data.accesstoken}`;
      setCookie("token", res.data.accesstoken)
      setCookie("user", res.data.user)
      set((state) => ({...state, token: res.data.accesstoken, user: res.data.user}))
        get().setIsAuth(true)
        toast.success("Logged in successfully")
        router.push('/')
    })
    .catch(err => {
        toast.error(err.response.data.msg)
        console.log(err)
    })
    .finally(() => {
        set((state) => ({ ...state, loading: false }))
    });
  },
  editUserData: async(data) => {
    console.log(get().token)
    await request.put('auth/update', data, {headers: {
      "Authorization": "Bearer " + get().token
    }}).then(res => {
      setCookie("user", res.data)
      set(state => ({...state, user: res.data}))
      toast.success("User data changed successfully")
    }).catch(err => toast.error("Something went wrong. Try again later"));
  },
}));

export default useAuth;
