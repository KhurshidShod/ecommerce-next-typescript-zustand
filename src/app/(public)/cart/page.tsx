import { Metadata } from 'next';
import styles from './CartPage.module.scss'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: "MegaMart | Cart",
  description: "MegaMart e-commerce by Xurshid",
};

const CartPage = () => {
  return (
    <Fragment>
      <ToastContainer />
    <section className={styles.cart}>
      
    </section>
    </Fragment>
  )
}

export default CartPage