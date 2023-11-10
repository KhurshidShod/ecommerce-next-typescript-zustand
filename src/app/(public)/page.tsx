import { Fragment, useEffect } from "react";
import styles from "./Hero.module.scss";
import Link from "next/link";
import useLastProducts from "../../store/products";
import LatestProducts from "@/components/latest-products";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoriesComp from "@/components/categories-component";
import Slider from "react-slick";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

const HomePage = () => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   autoplay: true,
  //   nextArrow: <LuMoveRight />,
  //   prevArrow: <LuMoveLeft />,
  //   draggable: true,

  //   responsive: [
  //     {
  //       breakpoint: 1100,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 850,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 450,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <Fragment>
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
              <Link href="#">
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
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
              <Link href="#">
                View all categories{" "}
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
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
