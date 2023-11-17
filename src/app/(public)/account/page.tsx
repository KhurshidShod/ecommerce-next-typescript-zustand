"use client";
import { useState } from "react";
import styles from "./AccountPage.module.scss";
import useAuth from "@/store/auth";
import { useFormik } from "formik";

// export const metadata: Metadata = {
//     title: "MegaMart | Account",
//     description: "MegaMart e-commerce by Xurshid",
//   };
const AccountPage = () => {
  const { user, token, editUserData } = useAuth();
  const [editing, setEditing] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      phoneNumber: user.phoneNumber,
    },
    onSubmit: (values) => {
      editUserData(values)
      setEditing(!editing);
    },
  });
  return (
    <section className={styles.account}>
      <div className="container">
        <div className={styles.account__wrapper}>
          <h1>Account</h1>
          <form action="" onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor=""></label>
              <input
                readOnly={!editing}
                type="text"
                name="firstName"
                id="firstName"
                onChange={formik.handleChange}
                defaultValue={formik.values.firstName}
              />
            </div>
            <div>
              <label htmlFor=""></label>
              <input
                readOnly={!editing}
                type="text"
                name="lastName"
                id="lastName"
                onChange={formik.handleChange}
                defaultValue={formik.values.lastName}
              />
            </div>
            <div>
              <label htmlFor=""></label>
              <input
                readOnly={!editing}
                type="text"
                name="username"
                id="username"
                onChange={formik.handleChange}
                defaultValue={formik.values.username}
              />
            </div>
            <div>
              <label htmlFor=""></label>
              <input
                readOnly={!editing}
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                onChange={formik.handleChange}
                defaultValue={formik.values.phoneNumber}
              />
            </div>
            {editing ? (
              <button
                type="submit"
                className={styles.saveInfos}
              >
                Save infos
              </button>
            ) : (
              <div onClick={() => setEditing(!editing)}>Edit profile</div>
            )}
          </form>
          <div className={styles.submitButton}>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountPage;
