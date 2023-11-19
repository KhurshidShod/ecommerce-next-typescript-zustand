"use client";
import useOrders from '@/store/orders';
import styles from './AdminOrders.module.scss'
import { useEffect, Fragment } from 'react'
import { MdEdit, MdDelete } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const AdminOrdersPage = () => {
    const {loading, orders, getOrders, confirmOrder, cancelOrder} = useOrders();

    useEffect(() => {
        getOrders()
    }, [getOrders])
    console.log(orders);
    return (
        <section className={styles.admin_orders__wrapper}>
            <div className="container">
                <div className={styles.admin_orders__wrapper_table}>
                        <ul className={styles.admin_orders__wrapper_table_header}>
                            <li>User</li>
                            <li>Comment</li>
                            <li>Ordered at</li>
                            <li>Status</li>
                            <li>Actions</li>
                        </ul>
                        <div className={styles.admin_orders__wrapper_table_content}>
                        
                        {loading ? Array(8).fill(0).map((el, i) => <div key={i}>
                            <div>
                            <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" width={'90%'} height={30} />
                            </div>
                            <div>
                            <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" width={'90%'} height={30} />
                            </div>
                            <div>
                            <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" width={'90%'} height={30} />
                            </div>
                            <div>
                            <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" width={'90%'} height={30} />
                            </div>
                            <div>
                            <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" width={'35px'} height={'35px'} />
                            <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" width={'35px'} height={'35px'} />
                            </div>
                        </div>) :orders.map(order => <ul key={order._id}>
                            <li>{order.userId}</li>
                            <li>{order.comment}</li>
                            <li>{new Date(order.createdAt).toISOString()}</li>
                            <li style={{
                                color: order.status === "SUCCESS" ? 'green' : order.status === "CANCELED" ? 'red' : 'orange'
                            }}>{order.status}</li>
                            <li>
                                {order.status === 'ACCEPTED' ? 
                                <Fragment>
                                    <button onClick={() => {confirmOrder(order._id)}}>✅</button>
                                    <button onClick={() => {cancelOrder(order._id)}}>❌</button>
                                </Fragment> : null}
                            </li>
                        </ul>)}
                        </div>
                </div>
            </div>
        </section>
    )
}

export default AdminOrdersPage