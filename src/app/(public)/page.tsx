import { Metadata } from "next";
import { Fragment } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { ToastContainer } from 'react-toastify';
import styles from "./Hero.module.scss";
import Link from "next/link";
import LatestProducts from "@/components/latest-products";
import 'react-toastify/dist/ReactToastify.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoriesComp from "@/components/categories-component";

export const metadata: Metadata = {
  title: "MegaMart | Home",
  description: "MegaMart e-commerce by Xurshid",
};

const HomePage = () => {
  return (
      <Fragment>
      <ToastContainer />
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.hero__wrapper}>
            <div className={styles.hero__wrapper_content}>
              <button className={styles.hero__wrapper_content_leftBtn}>
                <HiOutlineChevronLeft />
              </button>
              <button className={styles.hero__wrapper_content_rightBtn}>
                <HiOutlineChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.latest}>
        <div className="container">
          <div className={styles.latest__wrapper}>
            <div className={styles.latest__wrapper_header}>
              <h1>
                Check out latest <span>products</span>
              </h1>
              <Link href="/allproducts">
                View all products{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M6.375 3.75L11.625 9L6.375 14.25"
                    stroke="#008ECC"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <LatestProducts />
          </div>
        </div>
      </section>
      <section className={styles.categories}>
        <div className="container">
          <div className={styles.categories__wrapper}>
            <div className={styles.categories__wrapper_header}>
              <h1>
                Shop from <span>Top Categories</span>
              </h1>
              <Link href="/allproducts">
                View all products{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M6.375 3.75L11.625 9L6.375 14.25"
                    stroke="#008ECC"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <CategoriesComp />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HomePage;
