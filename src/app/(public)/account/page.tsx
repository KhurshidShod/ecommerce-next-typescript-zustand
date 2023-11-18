import AccountForm from "@/components/account-form";
import styles from "./AccountPage.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "MegaMart | Account",
    description: "MegaMart e-commerce by Xurshid",
  };
const AccountPage = () => {
  return (
    <section className={styles.account}>
      <div className="container">
        <div className={styles.account__wrapper}>
          <h1>Account</h1>
          <AccountForm />
        </div>
      </div>
    </section>
  );
};

export default AccountPage;
