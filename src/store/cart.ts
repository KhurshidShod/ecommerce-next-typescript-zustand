import { CartProductType } from "@/types/CartItem";
import Product from "@/types/Product";
import { getCookie, setCookie } from "cookies-next";
import { toast } from "react-toastify";
import { create } from "zustand";

interface CartState {
  cart: CartProductType[];
  addToCart: (product: Product) => void;
  increaseQuantity: (product: Product) => void;
  decreaseQuantity: (product: Product) => void;
  removeFromCart: (id: string) => void;
}
const cartCookie = getCookie("cart");
const useCartProducts = create<CartState>()((set, get) => ({
  cart: JSON.parse(cartCookie !== undefined ? cartCookie : '[]'),
  addToCart: (product) => {
    if(product.quantity > 0){
      set((state) => ({...state,
        cart: [...state.cart, {...product, cartQuantity: 1}],
      }));
    } else {
      toast.error("Not available now")
    }
    setCookie("cart", JSON.stringify(get().cart));
  },
  removeFromCart: (id) => {
    set((state) => ({...state, cart: get().cart.filter((prod) => prod._id !== id) }));
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
}));

export default useCartProducts;
