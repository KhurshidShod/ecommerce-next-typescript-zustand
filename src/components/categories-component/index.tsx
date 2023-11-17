"use client";

import { useEffect } from "react";
import useCategories from "@/store/categories";
import styles from "./Categories.module.scss";
import CategoryCard from "../category";
import Slider from "react-slick";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import Category from "@/types/Category";
import { getCookie, setCookie } from "cookies-next";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

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
  console.log()
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <div className={styles.categoriescom}>
      {loading ? <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', gap: '1rem'}}>
        <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexDirection: 'column'}}>
        <Stack spacing={0.2} style={{width: '90%'}}>
        <Skeleton style={{margin: '0 auto'}} sx={{ bgcolor: 'grey.500' }} variant="circular" width={'80%'} height={200} />
          <Skeleton style={{margin: '.5rem auto'}} sx={{ bgcolor: 'grey.500' }} variant="text" width={'65%'} height={30} />
          </Stack>
        </div>
        <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexDirection: 'column'}}>
        <Stack spacing={0.2} style={{width: '90%'}}>
        <Skeleton style={{margin: '0 auto'}} sx={{ bgcolor: 'grey.500' }} variant="circular" width={'80%'} height={200} />
          <Skeleton style={{margin: '.5rem auto'}} sx={{ bgcolor: 'grey.500' }} variant="text" width={'65%'} height={30} />
          </Stack>
        </div>
        <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexDirection: 'column'}}>
        <Stack spacing={0.2} style={{width: '90%'}}>
        <Skeleton style={{margin: '0 auto'}} sx={{ bgcolor: 'grey.500' }} variant="circular" width={'80%'} height={200} />
          <Skeleton style={{margin: '.5rem auto'}} sx={{ bgcolor: 'grey.500' }} variant="text" width={'65%'} height={30} />
          </Stack>
        </div>
        <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexDirection: 'column'}}>
        <Stack spacing={0.2} style={{width: '90%'}}>
        <Skeleton style={{margin: '0 auto'}} sx={{ bgcolor: 'grey.500' }} variant="circular" width={'80%'} height={200} />
          <Skeleton style={{margin: '.5rem auto'}} sx={{ bgcolor: 'grey.500' }} variant="text" width={'65%'} height={30} />
          </Stack>
        </div>
      </div> : <Slider {...settings}>
        {categories.map((cat: Category) => (
          <CategoryCard
            key={cat?._id}
            {...cat}
            color={Math.floor(Math.random() * 16777215).toString(16)}
          />
        ))}
      </Slider>}
    </div>
  );
};

export default CategoriesComp;
