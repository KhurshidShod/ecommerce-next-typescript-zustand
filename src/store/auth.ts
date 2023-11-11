import create, { StateCreator } from "zustand"
import request from '../server/request';

interface AuthState {
    register: (user: object) => void
}

const useAuth = create<AuthState>()((set, get) => ({
    register: (user) => {
        request.post('auth/register', user).then(res => console.log(res.data))
    },
}))

export default useAuth;