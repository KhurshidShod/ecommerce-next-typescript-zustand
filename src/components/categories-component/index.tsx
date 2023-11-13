"use client";

import { useEffect } from "react";
import useCategories from "@/store/categories";
import styles from "./Categories.module.scss";
import CategoryCard from "../category";
import Slider from "react-slick";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import Category from "@/types/Category";
import { getCookie, setCookie } from "cookies-next";

const CategoriesComp = () => {
  const { getCategories, categories, loading } = useCategories();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    nextArrow: <button><HiOutlineChevronRight /></button>,
    prevArrow: <button><HiOutlineChevronLeft /></button>,
    draggable: true,

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
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
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <div className={styles.categoriescom}>
      <Slider {...settings}>
        {categories.map((cat: Category) => (
          <CategoryCard
            key={cat?._id}
            {...cat}
            color={Math.floor(Math.random() * 16777215).toString(16)}
          />
        ))}
      </Slider>
    </div>
  );
};

export default CategoriesComp;
