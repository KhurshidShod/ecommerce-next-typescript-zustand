"use client";
import {useState} from 'react'
import useCartProducts from '@/store/cart'
import styles from '../../app/(public)/cart/CartPage.module.scss'
import Image from 'next/image';
import { MdDelete } from "react-icons/md";

const CartItemCards = () => {
  const {cart, removeFromCart} = useCartProducts()
  return (
    <div className={styles.cart__wrapper_cards}>
    {cart.length ? cart.map(prod => <div key={prod._id} className={styles.cart__wrapper_cards_card}>
      <Image width={50} height={50} src={prod?.image.url} alt="Product Image" />
      <p>{prod?.title}</p>
      <p>{prod?.cartQuantity}</p>
      <p>{prod?.price}</p>
      <button onClick={() => removeFromCart(prod?._id)}>✖️</button>
    </div>) : <p>No products selected yet</p>}
    </div>
  )
}

export default CartItemCards