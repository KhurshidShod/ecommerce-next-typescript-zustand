"use client";

import { useEffect } from "react";
import useCategories from "@/store/categories";
import styles from "./Categories.module.scss";
import CategoryCard from "../category";
import Slider from "react-slick";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";

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
    nextArrow: <LuMoveRight />,
    prevArrow: <LuMoveLeft />,
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
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    getCategories();
  }, [getCategories]);
  console.log(categories);

  return (
    <div className={styles.categoriescom}>
      <Slider {...settings}>
        {categories.map((cat) => (
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
