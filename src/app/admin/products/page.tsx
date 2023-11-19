"use client";
import { useEffect } from 'react'
import { MdEdit, MdDelete } from "react-icons/md";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import useProductsAdmin from "@/store/productsAdmin"
import styles from './AdminProducts.module.scss'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Image from "next/image";
import PaginationComponent from '@/components/pagination';

const AdminProductsPage = () => {
    const {loading, totalProducts, products, getProducts, deleteProduct, setParams, setPage} = useProductsAdmin()
    useEffect(() => {
        getProducts()
    }, [getProducts])
    console.log(products)
    return (
        <section className={styles.admin_products__wrapper}>
            <div className="container">
            <div className={styles.admin_products__wrapper_header}>
            <input placeholder="Search..." onChange={(e) => setParams({search: e.target.value})} />
            <button><MdOutlineAddShoppingCart /></button>
            </div>
                <div className={styles.admin_products__wrapper_table}>
                        <ul className={styles.admin_products__wrapper_table_header}>
                            <li>Image</li>
                            <li>Name</li>
                            <li>Category</li>
                            <li>Price</li>
                            <li>Quantity</li>
                            <li>Sold</li>
                            <li>Actions</li>
                        </ul>
                        <div className={styles.admin_products__wrapper_table_content}>
                        {loading ? Array(8).fill(0).map((el, i) => <div key={i}>
                            <div>
                            <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" width={'35px'} height={35} />
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
                            <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" width={'90%'} height={30} />
                            </div>
                            <div>
                            <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" width={'90%'} height={30} />
                            </div>
                            <div>
                            <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" width={'35px'} height={'35px'} />
                            <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" width={'35px'} height={'35px'} />
                            </div>
                        </div>) :products.map(product => <ul key={product._id}>
                            <li><Image alt="Image" src={product.image.url} width={35} height={35} /></li>
                            <li>{product.title}</li>
                            <li>{product.category.name}</li>
                            <li>{product.price}</li>
                            <li>{product.quantity}</li>
                            <li>{product.sold}</li>
                            <li>
                                <button><MdEdit /></button>
                                <button onClick={() => deleteProduct(product._id)}><MdDelete /></button>
                            </li>
                        </ul>)}
                        </div>
                </div>
                        <div className={styles.admin_products__wrapper_pagination}>
                <PaginationComponent total={totalProducts} store={(pg) => setPage(pg)} />
                </div>
            </div>
        </section>
    )
}

export default AdminProductsPage