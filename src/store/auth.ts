import create from "zustand"
import request from '../server/request';

interface AuthState {
    login: (user: object) => void
}

const useAuth = create<AuthState>()({
    register: (user) => {
        request.post('auth/register', user).then(res => console.log(res.data))
    },
})

export default useAuth;