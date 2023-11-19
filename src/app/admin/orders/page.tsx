"use client";
import useOrders from '@/store/orders';
import styles from './AdminOrders.module.scss'
import { useEffect } from 'react'
import { MdEdit, MdDelete } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const AdminOrdersPage = () => {
    const {loading, orders, getOrders} = useOrders();

    useEffect(() => {
        getOrders()
    }, [getOrders])
    return (
        <div></div>
        // <section className={styles.admin_orders__wrapper}>
        //     <div className="container">
        //         <div className={styles.admin_orders__wrapper_table}>
        //                 <ul className={styles.admin_orders__wrapper_table_header}>
        //                     <li>User</li>
        //                     <li>Comment</li>
        //                     <li>Ordered at</li>
        //                     <li>Status</li>
        //                 </ul>
        //                 <div className={styles.admin_orders__wrapper_table_content}>
                        
        //                 {loading ? Array(8).fill(0).map((el, i) => <div key={i}>
        //                     <div>
        //                     <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" width={'90%'} height={30} />
        //                     </div>
        //                     <div>
        //                     <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" width={'90%'} height={30} />
        //                     </div>
        //                     <div>
        //                     <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" width={'90%'} height={30} />
        //                     </div>
        //                     <div>
        //                     <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" width={'90%'} height={30} />
        //                     </div>
        //                     <div>
        //                     <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" width={'90%'} height={30} />
        //                     </div>
        //                     <div>
        //                     <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" width={'35px'} height={'35px'} />
        //                     <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" width={'35px'} height={'35px'} />
        //                     </div>
        //                 </div>) :orders.map(user => <ul key={user._id}>
        //                     <li>{user.firstName}</li>
        //                     <li>{user.lastName}</li>
        //                     <li>{user.username}</li>
        //                     <li>{user.phoneNumber}</li>
        //                     <li>{user.role == 0 ? 'User' : 'Admin'}</li>
        //                     <li>
        //                         <button><MdEdit /></button>
        //                         <button onClick={() => deleteUser(user._id)}><MdDelete /></button>
        //                     </li>
        //                 </ul>)}
        //                 </div>
        //         </div>
        //     </div>
        // </section>
    )
}

export default AdminOrdersPage