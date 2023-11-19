"use client";
import { useState, useEffect } from 'react'
import Chart from "chart.js/auto";
import useUsers from '@/store/users';
import useOrders from '@/store/orders';
import useProductsAdmin from '@/store/productsAdmin';
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Skeleton } from "@mui/material";
import React from "react";
Chart.register(CategoryScale);
const AdminDashboardPage = () => {
  const {totalUsers, getUsers} = useUsers()
  const {totalProducts, getProducts} = useProductsAdmin()
  const {totalOrders, getOrders} = useOrders()
  useEffect(() => {
    getUsers()
    getProducts()
    getOrders()
  }, [getUsers, getProducts, getOrders])
  const [chartData, setChartData] = useState({
    labels: ["Users", "Orders", "Products"],
    datasets: [
      {
        label: 'Sum',
        data: [
          totalUsers, totalOrders, totalProducts
        ],
        backgroundColor: ["red", "green", "blue"],
        borderWidth: 1,
      },
    ],
  });
  return (
    <div>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Statistics of our website: ",
            },
          },
        }}
      />
    </div>
  );
};

export default AdminDashboardPage;
