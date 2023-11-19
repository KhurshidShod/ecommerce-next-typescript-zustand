"use client";
import useAuth from "@/store/auth"
import { useRouter } from "next/navigation"

const LogoutButton = () => {
    const router = useRouter()
    const {logout} = useAuth()
  return (
    <button onClick={() => logout(router)}>Logout</button>
  )
}

export default LogoutButton