"use client";

import { useEffect } from "react";
import useLastProducts from "@/store/products";
import LatestProduct from "../latest-product";
import styles from "./LatestProducts.module.scss";
import Slider from "react-slick";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import LastProductsType from '@/types/lastProductsTypes';

const LatestProducts = () => {
  const { data, getData } = useLastProducts();

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    draggable: true,
    nextArrow: <button><HiOutlineChevronRight /></button>,
    prevArrow: <button><HiOutlineChevronLeft /></button>,
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
  console.log(data)
  return (
    <div className={styles.latest_products}>
      <Slider {...settings}>
      {data.map((prod: LastProductsType) => <LatestProduct key={prod?._id} {...prod}  />)}
      </Slider>
    </div>
  );
};

export default LatestProducts;
