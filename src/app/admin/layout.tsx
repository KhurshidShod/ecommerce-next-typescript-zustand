"use client";
import { useState } from 'react'
import AdminHeader from "@/components/admin-header";
import "../globals.css";
import AdminSidebar from "@/components/admin-sidebar";
import styles from './AdminLayout.module.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <html lang="en">
      <body>
        <AdminHeader collapsed={collapsed} setCollapse={() => setCollapsed(!collapsed)} />
        <AdminSidebar collapsed={collapsed} />
        <div className={`${styles.adminContent} ${collapsed ? styles.collapsed : ''}`}>
          {children}
        </div>
      </body>
    </html>
  );
}
