"use client";

import { useEffect } from "react";
import useLastProducts from "@/store/products";
import LatestProduct from "../latest-product";
import styles from "./LatestProducts.module.scss";
import Slider from "react-slick";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import Product from "@/types/Product";

const LatestProducts = () => {
  const { data, getData } = useLastProducts();

  // const SlickArrowLeft = ({ currentSlide, slideCount, ...props } : {currentSlide: number; slideCount: number}) => (
  //   <button
  //     {...props}
  //     className={
  //       "slick-prev slick-arrow" +
  //       (currentSlide === 0 ? " slick-disabled" : "")
  //     }
  //     aria-hidden="true"
  //     aria-disabled={currentSlide === 0 ? true : false}
  //     type="button"
  //   >
  //     <HiOutlineChevronLeft />
  //   </button>
  // );
  // const SlickArrowRight = ({ currentSlide, slideCount, ...props }: {currentSlide: number, slideCount: number}) => (
  //   <button
  //     {...props}
  //     className={
  //       "slick-next slick-arrow" +
  //       (currentSlide === slideCount - 1 ? " slick-disabled" : "")
  //     }
  //     aria-hidden="true"
  //     aria-disabled={currentSlide === slideCount - 1 ? true : false}
  //     type="button"
  //   >
  //     <HiOutlineChevronRight />
  //   </button>
  // );

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    draggable: true,
    nextArrow: <HiOutlineChevronRight />,
    prevArrow: <HiOutlineChevronLeft />,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <div className={styles.latest_products}>
      <Slider {...settings}>
      {data.map((prod: Product) => <LatestProduct key={prod?.createdAt} product={prod}  />)}
      </Slider>
    </div>
  );
};

export default LatestProducts;
