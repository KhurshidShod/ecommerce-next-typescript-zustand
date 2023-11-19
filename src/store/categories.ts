import request from "@/server/request";
import { create } from "zustand";
import Category from "@/types/Category";
import { toast } from "react-toastify";
import { getCookie } from "cookies-next";
import CategoryCreating from "@/types/CategoryCreating";

interface CategoryState {
  loading: boolean;
  totalCategories: number;
  categories: Category[];
  getCategories: () => void;
  createCategory: (category: CategoryCreating) => void;
  deleteCategory: (id: string) => void;
  editCategory: (id: string, category: CategoryCreating) => void;
  getCategory: (
    id: string,
    formik: {
      setFieldValue: (field: string, value: string) => void;
    }
  ) => void;
}
const useCategories = create<CategoryState>()((set, get) => ({
  loading: false,
  categories: [],
  totalCategories: 0,
  getCategories: async () => {
    set((state) => ({ ...state, loading: true }));
    await request
      .get("category")
      .then((res) =>
        set((state) => ({
          ...state,
          categories: res.data,
          totalCategories: res.data.length,
        }))
      )
      .finally(() => set((state) => ({ ...state, loading: false })));
  },
  deleteCategory: async (id) => {
    await request
      .delete(`category/${id}`, {
        headers: {
          Authorization: "Bearer " + getCookie("token"),
        },
      })
      .then((res) => {
        toast.success(res.data.msg);
        get().getCategories();
      });
  },
  editCategory: async (id, category) => {
    await request
      .put(`category/${id}`, category, {
        headers: {
          Authorization: "Bearer " + getCookie("token"),
        },
      })
      .then((res) => {
        get().getCategories();
      });
  },
  getCategory: async (id, formik) => {
    await request.get(`category/${id}`).then((res) => {
      formik.setFieldValue("name", res.data.name);
      formik.setFieldValue("image", res.data.image);
      console.log(res.data);
    });
  },
  createCategory: async (category) => {
    await request
      .post(`category`, category, {
        headers: {
          Authorization: "Bearer " + getCookie("token"),
        },
      })
      .then((res) => {
        get().getCategories();
      });
  },
}));

export default useCategories;
