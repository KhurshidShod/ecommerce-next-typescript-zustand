import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import styles from "./PublicLayout.module.scss";
import Link from "next/link";
import Header from "@/components/header/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MegaMart | Home",
  description: "MegaMart e-commerce by Xurshid",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
