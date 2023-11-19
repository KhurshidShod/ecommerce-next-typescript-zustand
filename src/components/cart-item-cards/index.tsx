"use client";
import { Fragment, useState} from 'react'
import useCartProducts from '@/store/cart'
import styles from '../../app/(public)/cart/CartPage.module.scss'
import Image from 'next/image';
import { MdDelete } from "react-icons/md";

const CartItemCards = () => {
  const {cart, removeFromCart, confirmCart} = useCartProducts();
  const [comment, setComment] = useState("")
  const submitCart = () => {
    confirmCart({cart: [...cart.map(el => {
      return {product: el._id, quantity: el.cartQuantity}
    })], comment})
  }
  return (
      <Fragment>
        <div className={styles.cart__wrapper_cards}>
    {cart.length ? cart.map(prod => <div key={prod._id} className={styles.cart__wrapper_cards_card}>
      <Image width={50} height={50} src={prod?.image.url} alt="Product Image" />
      <p>{prod?.title}</p>
      <p>{prod?.cartQuantity}</p>
      <p>{prod?.price}</p>
      <button onClick={() => removeFromCart(prod?._id)}>✖️</button>
    </div>) : <p>No products selected yet</p>}
    </div>
    <div className={styles.cart__wrapper_actions}>
    <textarea onChange={(e) => setComment(e.target.value)} placeholder="Comment here" name="" id="" cols={30} rows={10}></textarea>
    <button onClick={submitCart}>Confirm payment</button>
  </div>
      </Fragment>
  )
}

export default CartItemCards