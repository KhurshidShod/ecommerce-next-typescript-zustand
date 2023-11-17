import { Metadata } from "next";
import styles from "./CartPage.module.scss";
import { Fragment, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CartItemCards from "@/components/cart-item-cards";
import { getCookie } from "cookies-next";

export const metadata: Metadata = {
  title: "MegaMart | Cart",
  description: "MegaMart e-commerce by Xurshid",
};

const CartPage = () => {
  return (
    <Fragment>
      <section className={styles.cart}>
        <div className="container">
          <div className={styles.cart__wrapper}>
            <div className={styles.cart__wrapper_header}>
              <b>Image</b>
              <b>Name</b>
              <b>Quantity</b>
              <b>Price</b>
            </div>
            <CartItemCards />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CartPage;
