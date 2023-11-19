"use client";
import useAuth from "@/store/auth"
import { useRouter } from "next/navigation"
import styles from '../../app/(public)/account/AccountPage.module.scss'

const LogoutButton = () => {
    const router = useRouter()
    const {logout} = useAuth()
  return (
    <button className={styles.logoutBtn} onClick={() => logout(router)}>Logout</button>
  )
}

export default LogoutButton