import styles from "./LoginPage.module.scss";
import Img from "@/assets/images/log-reg.png";
import { Space_Grotesk } from "next/font/google";

const font = Space_Grotesk({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

import "../../globals.css";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <section className={`${styles.login} ${font.className}`}>
      <div className="container">
        <div className={styles.login__wrapper}>
          <form action="">
          <span></span>

          <h1>Log in</h1>
            <div>
              <label htmlFor="username">Username</label>
              <input className={font.className} type="text" name="username" id="username" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input className={font.className} type="text" name="password" id="password" />
            </div>
            <div>
            <button className={font.className}>Log in</button>
            <Link href='/register'>Not registered yet?</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
