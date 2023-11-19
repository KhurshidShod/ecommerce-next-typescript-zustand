import { CartProductType } from "@/types/CartItem";
import Product from "@/types/Product";
import { getCookie, setCookie } from "cookies-next";
import { toast } from "react-toastify";
import request from "@/server/request";
import { create } from "zustand";
import useAuth from "./auth";

interface CartState {
  cart: CartProductType[];
  addToCart: (product: Product) => void;
  increaseQuantity: (product: Product) => void;
  decreaseQuantity: (product: Product) => void;
  removeFromCart: (id: string) => void;
  confirmCart: (cart: object) => void;
}
const cartCookie = getCookie("cart");
const useCartProducts = create<CartState>()((set, get) => ({
  cart: JSON.parse(cartCookie !== undefined ? cartCookie : '[]'),
  addToCart: (product) => {
    if(getCookie("token")){
      if(product.quantity > 0){
        set((state) => ({...state,
          cart: [...state.cart, {...product, cartQuantity: 1}],
        }));
      } else {
        toast.error("Not available now")
      }
      setCookie("cart", JSON.stringify(get().cart));
    } else {
      toast.error("Please login first!")
    }
  },
  removeFromCart: (id) => {
    set((state) => ({...state, cart: get().cart.filter((prod) => prod._id !== id) }));
    setCookie("cart", JSON.stringify(get().cart));
  },
  increaseQuantity: (product) => {
    set((state) => ({...state,
      cart: get().cart.map((prod) => {
        if (prod._id === product._id && prod.cartQuantity < product.quantity) {
          prod.cartQuantity++;
        } else if (prod.cartQuantity === product.quantity) {
          toast.error("Limit reached");
        }
        return prod;
      }),
    }));
    setCookie("cart", JSON.stringify(get().cart));
    console.log(get().cart)

  },
  decreaseQuantity: (product) => {
    if (
      get().cart.find((prod) => prod._id === product._id)?.cartQuantity === 1
    ) {
      get().removeFromCart(product._id);
    } else {
      set((state) => ({
        cart: get().cart.map((prod) => {
          if (prod._id === product._id && prod.cartQuantity > 1) {
            prod.cartQuantity--;
          }
          return prod;
        }),
      }));
    }
    setCookie("cart", JSON.stringify(get().cart));
  },
  confirmCart: async(cart) => {
    await request.post("payment", cart, {
      headers: {
        "Authorization": "Bearer " + getCookie("token")
      }
    }).then(res => {
      toast.success(res.data.msg)
      set(state => ({...state, cart: []}))
    })
  }
}));

export default useCartProducts;
