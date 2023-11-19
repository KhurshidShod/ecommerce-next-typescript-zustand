"use client";

import { Fragment, useState } from "react";
import { useFormik } from "formik";
import { Space_Grotesk } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

import Img from "@/assets/images/log-reg.png";
import Image from "next/image";
import Link from "next/link";
import useAuth from "@/store/auth";
import styles from "./LoginPage.module.scss";

import "../../globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

const font = Space_Grotesk({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const LoginPage = () => {
  const router = useRouter();
  const [passVisible, setPassVisible] = useState<boolean>(false)
  const {loading, login, user} = useAuth();
  console.log(user)

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      login(values, router)
    },
  });
  return (
    <Fragment>
      <ToastContainer />
      <section className={`${styles.login} ${font.className}`}>
      <div className="container">
        <div className={styles.login__wrapper}>
          <form action="" onSubmit={formik.handleSubmit}>
            <span></span>
            <h1>Log in</h1>
            <div>
              <label htmlFor="username">Username</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.username}
                className={font.className}
                type="text"
                name="username"
                id="username"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.password}
                className={font.className}
                type={passVisible ? "text" : "password"}
                name="password"
                id="password"
              />
              <p onClick={() => setPassVisible(!passVisible)}>{passVisible ? <AiFillEyeInvisible /> : <AiFillEye />}</p>
            </div>
            <div>
              <button disabled={loading} type="submit" className={font.className}>{loading ? 'Logging in...' : 'Log in'}</button>
              <Link href="/register">Not registered yet?</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
    </Fragment>
  );
};

export default LoginPage;
