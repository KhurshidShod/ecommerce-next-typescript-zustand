import { deleteCookie, getCookie, setCookie } from "cookies-next";
import Product from "@/types/Product";
import { toast } from "react-toastify";
import CartProduct from "@/types/CartItem";

const addToCart = (product: Product) => {
  const cart: CartProduct[] = getCookie("cart")
    ? JSON.parse(getCookie("cart"))
    : [];
  console.log(cart);
  const item = cart.find((prod) => prod.product === product._id);
  if (item) {
    cart.map((prod) => {
      if (prod.product === product._id && prod.quantity < product.quantity) {
        prod.quantity += 1;
      } else if(prod.quantity === product.quantity){
        toast.error("Limit is reached")
      }
      return prod;
    });
  } else {
    cart.push({ product: product._id, quantity: 1 });
  }
  setCookie("cart", JSON.stringify(cart));
};

export default addToCart;
