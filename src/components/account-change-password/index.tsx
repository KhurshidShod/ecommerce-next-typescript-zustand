"use client";
import { useState } from 'react';
import styles from '../../app/(public)/account/AccountPage.module.scss';
import useAuth from '@/store/auth';

const AccountPasswordChange = () => {
    const [password, setPassword] = useState({
        currentPassword: "",
        newPassword: ""
    })
    const [changePassVisible, setChangePassVisible] = useState(false);
    const {loading, changePassword} = useAuth()
  return (
    <div onClick={() => setChangePassVisible(true)} className={`${styles.changePassword} ${changePassVisible ? styles.open : ''}`}>
            <h1>Change password</h1>
            <div className={styles.form}>
              <div>
              <input value={password.currentPassword} onChange={(e) => setPassword({...password, currentPassword: e.target.value})} placeholder='Enter current password' type="text" name="" id="" />
              <input value={password.newPassword} onChange={(e) => setPassword({...password, newPassword: e.target.value})} placeholder='Enter new password' type="text" name="" id="" />
              </div>
              <button onClick={() => {
                changePassword(password, setChangePassVisible, setPassword)
                }}>{loading ? 'Changing...' : 'Change'}</button>
            </div>
    </div>
  )
}

export default AccountPasswordChange