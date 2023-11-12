"use client";
import { Metadata } from 'next';
import styles from './CartPage.module.scss'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Fragment, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

// export const metadata: Metadata = {
//   title: "MegaMart | Cart",
//   description: "MegaMart e-commerce by Xurshid",
// };

const CartPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter()
  console.log(searchParams.get("category"))
  useEffect(() => {
    router.push(`?category=sovunlar`)
  }, [router])
  return (
    <Fragment>
      <ToastContainer />
      <section className={styles.cart}>
        <div className={styles.cart__wrapper}>
          <div className={styles.cart__wrapper_header}>
            <p>Name</p>
            <p>Category</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Action</p>
          </div>
          <div className={styles.cart__wrapper_cards}>
          <div className={styles.cart__wrapper_cards_card}>
            <p>Lorem</b>
            <span>Sovunlar</span>
            <p>170000</p>
            <p>3</p>
            <button>❌</button>
          </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default CartPage