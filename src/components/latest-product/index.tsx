"use client";

import styles from "./LatestProduct.module.scss";
import Image from "next/image";
import { onImageError } from "@/utils/ImageErrorHandler";
import Product from "@/types/Product";
import Img from "@/assets/images/No-Image-Placeholder.svg";
import { getCookie } from "cookies-next";
import CartProduct, { CartProductType } from "@/types/CartItem";
import { useSelector } from "react-redux";
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import useCartProducts from "@/store/cart";

const LatestProduct = ({ product }: { product: Product }) => {
  // const state = useSelector(state => state);
  // console.log(state, 'this is state');
  const { cart, increaseQuantity, decreaseQuantity, addToCart } =
    useCartProducts();
  return (
    <div className={styles.latest_product}>
      <div className={styles.latest_product__image}>
        <Image
          onError={(e) =>
            onImageError(
              e,
              "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
            )
          }
          src={product?.image?.url ? product?.image?.url : Img}
          alt="Product Photo"
          width={200}
          height={200}
        />
      </div>
      <div className={styles.latest_product__info}>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <div>
          <p>
            <b>Available: </b>
            {product?.quantity}
          </p>
          <p>
            <b>Sold: </b>
            {product?.sold}
            {/* {getCookie("cart") ? <span>{JSON.parse(getCookie("cart")).find((prod: CartProduct) => prod.product === product?._id)?.quantity}</span> : null} */}
          </p>
        </div>
      </div>
      {cart.find((prod: CartProductType) => prod._id === product?._id) ? (
        <div className={styles.changeCartStatus}>
          <button onClick={() => {
            decreaseQuantity(product)
            }}><AiOutlineMinus /></button>
          <h1>
            {
              cart.find((prod: CartProductType) => prod._id === product?._id)
                ?.cartQuantity
            }
            <span>{product.price}</span>
          </h1>
          <button onClick={() => {
            increaseQuantity(product)
            }}><AiOutlinePlus /></button>
        </div>
      ) : (
        <button
          onClick={() => {
            addToCart(product);
            console.log(cart);
          }}
        >
          Buy - {product?.price}
        </button>
      )}
      {/* <button onClick={() => {
        addToCart(product)
        console.log(cart)
        }}>Buy - {product?.price}</button> */}
      {/* <div className={styles.changeCartStatus}>
        <button>-</button>
        <h1></h1>
        <button>+</button>
      </div> */}
    </div>
  );
};

export default LatestProduct;
