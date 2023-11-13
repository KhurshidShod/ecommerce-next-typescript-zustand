import Product from "./Product";

export default interface CartProduct {
  cartQuantity: number;
}

export type CartProductType = CartProduct & Product;