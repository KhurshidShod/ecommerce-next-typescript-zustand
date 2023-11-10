'use client';

import { Space_Grotesk } from "next/font/google";
import Img from "@/assets/images/log-reg.png";
import { useFormik } from 'formik'
import styles from "./RegisterPage.module.scss";
import "../../globals.css";
import Image from "next/image";
import Link from "next/link";

const font = Space_Grotesk({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});


const RegisterPage = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      phoneNumber: '',
      password: ''
    },
    onSubmit: values => {
    },
  });
  return (
    <section className={`${styles.register} ${font.className}`}>
      <div className="container">
        <div className={styles.register__wrapper}>
          <form action="" onSubmit={formik.handleSubmit}>
            <span></span>
            <h1>Register</h1>
            <div>
              <label htmlFor="firstName">Firstname</label>
              <input
                className={font.className}
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
            </div>
            <div>
              <label htmlFor="lastName">Lastname</label>
              <input
                className={font.className}
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone number</label>
              <input
                className={font.className}
                type="tel"
                name="phoneNumber"
                autoComplete="off"
                id="phoneNumber"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
              />
            </div>
            <div>
              <label htmlFor="username">Username</label>
              <input
                className={font.className}
                type="text"
                name="username"
                autoComplete="off"
                id="username"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                className={font.className}
                type="text"
                autoComplete="off"
                name="password"
                id="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>
            <div>
            <button className={font.className}>Register</button>
            <Link href='/login'>Already registered?</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
