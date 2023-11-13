"use client";
import useCartProducts from '@/store/cart'
import styles from '../../app/(public)/cart/CartPage.module.scss'

const CartItemCards = () => {
  const {cart} = useCartProducts()
  return (
    <div className={styles.cart__wrapper_cards}>
    {cart.length ? cart.map(prod => <div key={prod._id} className={styles.cart__wrapper_cards_card}>
      <p>{prod?.title}</p>
      <p>{prod?.cartQuantity}</p>
      <p>{prod?.price}</p>
      <div>
      <button>❌</button>
      </div>
    </div>) : <p>No products selected yet</p>}
    </div>
  )
}

export default CartItemCards