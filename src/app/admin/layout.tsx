"use client";
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { ToastContainer } from "react-toastify";
import AdminHeader from "@/components/admin-header";
import AdminSidebar from "@/components/admin-sidebar";
import useAuth from '@/store/auth';
import styles from './AdminLayout.module.scss';

import "../globals.css";
import "react-toastify/dist/ReactToastify.css";
import withAuth from '@/hoc/with-auth';

function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const {user} = useAuth()
  // const router = useRouter()
  const [collapsed, setCollapsed] = useState<any>(false);
  // useEffect(() => {
  //   console.log(user)
  //   if(user.role === 0){
  //     router.push('/')
  //   }
  // }, [user, router])
  return (
    <html lang="en">
      <body>
      <ToastContainer />
        <AdminHeader collapsed={collapsed} setCollapse={() => setCollapsed(!collapsed)} />
        <AdminSidebar collapsed={collapsed} />
        <div className={`${styles.adminContent} ${collapsed ? styles.collapsed : ''}`}>
          {children}
        </div>
      </body>
    </html>
  );
}

export default withAuth(AdminLayout)