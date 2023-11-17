"use client";

import useCategories from "@/store/categories";
import styles from "../../app/(public)/allproducts/AllProducts.module.scss";
import { useEffect, useState } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { useRouter, useSearchParams } from 'next/navigation'
import useAllProducts from "@/store/allProducts";

const AllProductsHeader = () => {
  const { setParams, setPage } = useAllProducts();
  const router = useRouter()
  const searchParams = useSearchParams()
  const { categories, getCategories } = useCategories();
  const [priceOrder, setPriceOrder] = useState<string>("def");
  const [dateOrder, setDateOrder] = useState<string>("def");
  const [salesOrder, setSalesOrder] = useState<string>("def");
  useEffect(() => {
    getCategories();
  }, [getCategories]);
  return (
    <div className={styles.allproducts__wrapper_header}>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setParams({ search: e.target.value })
          if(searchParams.get("category")){
          router.push(`?page=1&category=${searchParams.get("category")}`)
          } else {
            router.push(`?page=1`)
          }
          setPage(1)
        }}
      />
      <div>
        <select
          name=""
          id=""
          onChange={(e) => {
            setParams({ category: e.target.value })
            router.push(`?page=1&category=${e.target.value}`)
            setPage(1)
          }}
        >
          <option defaultValue="" selected disabled>
            Categories
          </option>
          {categories.map((cat) => (
            <option value={cat?._id} key={cat?._id}>
              {cat?.name}
            </option>
          ))}
        </select>
        <button
          onClick={() => {
            setDateOrder("def");
            setSalesOrder("def");
            setPriceOrder(
              priceOrder === "def"
                ? "asc"
                : priceOrder === "asc"
                ? "desc"
                : "asc"
            );
            if (priceOrder === "asc") {
              setParams({ sort: "-price" });
            } else {
              setParams({ sort: "price" });
            }
          }}
        >
          Price{" "}
          <span>
            <BsFillCaretUpFill
              color={
                priceOrder === "asc" || priceOrder === "def"
                  ? "var(--blue)"
                  : "white"
              }
            />
            <BsFillCaretDownFill
              color={
                priceOrder === "desc" || priceOrder === "def"
                  ? "var(--blue)"
                  : "white"
              }
            />
          </span>
        </button>
        <button
          onClick={() => {
            setPriceOrder("def");
            setSalesOrder("def");
            setDateOrder(
              dateOrder === "def" ? "asc" : dateOrder === "asc" ? "desc" : "asc"
            );
            if (dateOrder === "asc") {
              setParams({ sort: "oldest" });
            } else {
              setParams({ sort: "" });
            }
          }}
        >
          Date{" "}
          <span>
            <BsFillCaretUpFill
              color={
                dateOrder === "asc" || dateOrder === "def"
                  ? "var(--blue)"
                  : "white"
              }
            />
            <BsFillCaretDownFill
              color={
                dateOrder === "desc" || dateOrder === "def"
                  ? "var(--blue)"
                  : "white"
              }
            />
          </span>
        </button>
        <button
          onClick={() => {
            setPriceOrder("def");
            setDateOrder("def");
            setSalesOrder(
              salesOrder === "def"
                ? "asc"
                : salesOrder === "asc"
                ? "desc"
                : "asc"
            );
            if (salesOrder === "asc") {
              setParams({ sort: "-sold" });
            } else {
              setParams({ sort: "sold" });
            }
          }}
        >
          Sales{" "}
          <span>
            <BsFillCaretUpFill
              color={
                salesOrder === "asc" || salesOrder === "def"
                  ? "var(--blue)"
                  : "white"
              }
            />
            <BsFillCaretDownFill
              color={
                salesOrder === "desc" || salesOrder === "def"
                  ? "var(--blue)"
                  : "white"
              }
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default AllProductsHeader;
