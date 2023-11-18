"use client";

import { useState } from "react";
import useAuth from "@/store/auth";
import { useFormik } from "formik";
import styles from '../../app/(public)/account/AccountPage.module.scss'

const AccountForm = () => {
      const { user, token, editUserData } = useAuth();
  const [editing, setEditing] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      username: user?.username,
      phoneNumber: user?.phoneNumber,
    },
    onSubmit: (values) => {
      editUserData(values)
      setEditing(!editing);
    },
  });
  return (
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
  <div className={styles.submitButton}>
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
  </div>
  </form>
  )
}

export default AccountForm