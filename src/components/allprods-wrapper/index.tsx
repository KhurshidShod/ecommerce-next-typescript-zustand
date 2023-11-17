"use client";
import { Fragment, useEffect, useState } from "react";
import useAllProducts from "@/store/allProducts";

import styles from '../../app/(public)/allproducts/AllProducts.module.scss'
import LatestProduct from "../latest-product";
import Product from "@/types/Product";
import PaginationComponent from "../pagination";
import { useRouter, useSearchParams } from "next/navigation";

const AllProductsWrapper = () => {
  const { page, setPage, total, products, getAllProducts, setParams } = useAllProducts()
  const router = useRouter();
  const searchParams = useSearchParams()

  useEffect(() => {
    if (searchParams.get("page") !== page) {
      setPage(Number(searchParams.get("page")))
    } else {
      router.push(`?page=${page}`)
    }
    if (!searchParams.get("page")) {
      router.push(`?page=${page}`)
    }
    if (searchParams.get("category")) {
      router.push(`?page=${page}&category=${searchParams.get("category")}`)
      setParams({ category: searchParams.get("category") })
    }
    getAllProducts()
  }, [getAllProducts, page, router, setParams, searchParams, setPage])
  return (
    <Fragment>
      <div className={styles.allproducts__wrapper_cards}>
        {products.map((prod: Product) => <div key={prod?._id}><LatestProduct product={prod} /></div>)}
      </div>
      <div className={styles.allproducts__wrapper_pagination}>
        <PaginationComponent total={total} store={(pg: number) => {
          if (searchParams.get("category")) {
            router.push(`?page=${pg}&category=${searchParams.get("category")}`)
          } else {
            router.push(`?page=${pg}`)
          }
          setPage(pg)
        }} />
      </div>
    </Fragment>
  )
}

export default AllProductsWrapper