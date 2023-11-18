import { Montserrat } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Header from "@/components/header/Header";

import "react-toastify/dist/ReactToastify.css";
import "../globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ToastContainer />
        <Header />
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
