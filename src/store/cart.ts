import CartProduct from "@/types/CartItem";
import Product from "@/types/Product";
import { getCookie, setCookie } from "cookies-next";
import { toast } from "react-toastify";
import { create } from "zustand";

interface CartState {
  cartCookie: any;
  cart: CartProduct[];
  addToCart: (product: Product) => void;
  increaseQuantity: (product: Product) => void;
  decreaseQuantity: (product: Product) => void;
  removeFromCart: (id: string) => void;
}

const useCartProducts = create<CartState>()((set, get) => ({
  cartCookie: getCookie("cart"),
  cart: getCookie("cart") ? JSON.parse(get().cartCookie) : [],
  addToCart: (product) => {
    const item = get().cart.find((prod) => prod.product === product._id);
    set((state) => ({
      cart: [...state.cart, { product: product._id, quantity: 1 }],
    }));
    setCookie("cart", JSON.stringify(get().cart));
  },
  removeFromCart: (id) => {
    set({ cart: get().cart.filter((prod) => prod.product !== id) });
  },
  increaseQuantity: (product) => {
    set((state) => ({
      cart: get().cart.map((prod) => {
        if (prod.product === product._id && prod.quantity < product.quantity) {
          prod.quantity++;
        } else if (prod.quantity === product.quantity) {
          toast.error("Limit reached");
        }
        return prod;
      }),
    }));
    setCookie("cart", JSON.stringify(get().cart));
  },
  decreaseQuantity: (product) => {
    if (
      get().cart.find((prod) => prod.product === product._id)?.quantity === 1
    ) {
      get().removeFromCart(product._id);
    } else {
      set((state) => ({
        cart: get().cart.map((prod) => {
          if (prod.product === product._id && prod.quantity > 1) {
            prod.quantity--;
          }
          return prod;
        }),
      }));
    }
    setCookie("cart", JSON.stringify(get().cart));
  },
}));

export default useCartProducts;
