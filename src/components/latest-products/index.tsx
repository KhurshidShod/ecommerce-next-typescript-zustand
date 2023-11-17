"use client";

import { useEffect, Fragment } from "react";
import useLastProducts from "@/store/products";
import LatestProduct from "../latest-product";
import styles from "./LatestProducts.module.scss";
import Slider from "react-slick";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import Product from "@/types/Product";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const LatestProducts = () => {
  const { data, loading, getData } = useLastProducts();

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
  return (
    <div className={styles.latest_products}>
      {loading ? <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', gap: '1rem'}}>
        <div style={{width: '100%'}}>
        <Stack spacing={0.2} style={{width: '90%'}}>
      <Skeleton sx={{ bgcolor: 'grey.500' }} variant="rounded" width={'100%'} height={250} />
      <Skeleton sx={{ bgcolor: 'grey.500' }} variant="text" width={'50%'} height={30} />
      <Skeleton sx={{ bgcolor: 'grey.500' }} variant="text" width={'100%'} height={30} />
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <Skeleton sx={{ bgcolor: 'grey.500' }} variant="text" width={'30%'} height={30} />
      <Skeleton sx={{ bgcolor: 'grey.500' }} variant="text" width={'30%'} height={30} />
      </div>
      <Skeleton sx={{ bgcolor: 'grey.500' }} variant="rounded" width={'100%'} height={40} />
    </Stack>
      </div>
      <div style={{width: '100%'}}>
        <Stack spacing={0.2} style={{width: '90%'}}>
      <Skeleton sx={{ bgcolor: 'grey.500' }} variant="rounded" width={'100%'} height={250} />
      <Skeleton sx={{ bgcolor: 'grey.500' }} variant="text" width={'50%'} height={30} />
      <Skeleton sx={{ bgcolor: 'grey.500' }} variant="text" width={'100%'} height={30} />
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <Skeleton sx={{ bgcolor: 'grey.500' }} sx={{ bgcolor: 'grey.500' }} variant="text" width={'30%'} height={30} />
      <Skeleton sx={{ bgcolor: 'grey.500' }} sx={{ bgcolor: 'grey.500' }} variant="text" width={'30%'} height={30} />
      </div>
      <Skeleton sx={{ bgcolor: 'grey.500' }} variant="rounded" width={'100%'} height={40} />
    </Stack>
      </div>
      <div style={{width: '100%'}}>
        <Stack spacing={0.2} style={{width: '90%'}}>
      <Skeleton sx={{ bgcolor: 'grey.500' }} variant="rounded" width={'100%'} height={250} />
      <Skeleton sx={{ bgcolor: 'grey.500' }} variant="text" width={'50%'} height={30} />
      <Skeleton sx={{ bgcolor: 'grey.500' }} variant="text" width={'100%'} height={30} />
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <Skeleton sx={{ bgcolor: 'grey.500' }} variant="text" width={'30%'} height={30} />
      <Skeleton sx={{ bgcolor: 'grey.500' }} variant="text" width={'30%'} height={30} />
      </div>
      <Skeleton sx={{ bgcolor: 'grey.500' }} variant="rounded" width={'100%'} height={40} />
    </Stack>
      </div>
      <div style={{width: '100%'}}>
        <Stack spacing={0.2} style={{width: '90%'}}>
      <Skeleton sx={{ bgcolor: 'grey.500' }} variant="rounded" width={'100%'} height={250} />
      <Skeleton sx={{ bgcolor: 'grey.500' }} variant="text" width={'50%'} height={30} />
      <Skeleton sx={{ bgcolor: 'grey.500' }} variant="text" width={'100%'} height={30} />
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <Skeleton sx={{ bgcolor: 'grey.500' }} variant="text" width={'30%'} height={30} />
      <Skeleton sx={{ bgcolor: 'grey.500' }} variant="text" width={'30%'} height={30} />
      </div>
      <Skeleton sx={{ bgcolor: 'grey.500' }} variant="rounded" width={'100%'} height={40} />
    </Stack>
      </div>
      </div> :
      <Slider {...settings}>
      {data.map((prod: Product) => <LatestProduct key={prod?._id} product={prod}  />)}
      </Slider>
}
    </div>
  );
};

export default LatestProducts;