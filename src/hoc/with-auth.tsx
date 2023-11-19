import { useEffect } from 'react'
import { useRouter, usePathname } from "next/navigation";
import useAuth from '@/store/auth';

function withAuth<P>(
    Component: React.ComponentType<P>
){
    const AuthComponent = (props: P) => {
        const {isAuth, user} = useAuth();
        const router = useRouter();
        const pathname = usePathname();

        useEffect(() => {
            if(isAuth){
                if(pathname.startsWith('/admin') && user?.role === 0){
                    router.push('/')
                }
            } else {
                router.push("/")
            }
        }, [isAuth, pathname, router, user]);

        return <Component {...props} />
    }
    return AuthComponent
}

export default withAuth