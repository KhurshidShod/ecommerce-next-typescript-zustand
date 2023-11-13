"use client";
import { Metadata } from 'next';
import styles from './CartPage.module.scss'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Fragment, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import CartItemCards from '@/components/cart-item-cards';
import { getCookie } from 'cookies-next';

// export const metadata: Metadata = {
//   title: "MegaMart | Cart",
//   description: "MegaMart e-commerce by Xurshid",
// };

const CartPage = () => {
  // const searchParams = useSearchParams();
  // const router = useRouter()
  console.log(getCookie("cart"))
  // console.log(searchParams.get("category"))
  // useEffect(() => {
  //   router.push(`?category=sovunlar`)
  // }, [router])
  return (
    <Fragment>
      <ToastContainer />
      <section className={styles.cart}>
        <div className="container">
        <div className={styles.cart__wrapper}>
          <div className={styles.cart__wrapper_header}>
            <b>Name</b>
            <b>Quantity</b>
            <b>Price</b>
            <b>Remove</b>
          </div>
          <CartItemCards />
        </div>
        </div>
      </section>
    </Fragment>
  )
}

export default CartPage