"use client";
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { MdEdit, MdDelete } from "react-icons/md";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import useProductsAdmin from "@/store/productsAdmin"
import styles from './AdminProducts.module.scss'
import Skeleton from '@mui/material/Skeleton';
import useCategories from "@/store/categories";
import Image from "next/image";
import PaginationComponent from '@/components/pagination';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const AdminProductsPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selected, setSelected] = useState(null);
  const { categories, getCategories } = useCategories();
    const {loading, totalProducts, products, getProducts, deleteProduct, setParams, setPage} = useProductsAdmin()
    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
  price: "",
  quantity: "",
  category: ""
        },
          onSubmit: (values) => {
            //   if(selected === null){
            //   } else {
            //   }
              setModalOpen(false);
              setSelected(null)
              formik.resetForm()
            },
      })
    useEffect(() => {
        getProducts()
        getCategories()
    }, [getProducts, getCategories])
    console.log(products)
    return (
        <section className={styles.admin_products__wrapper}>
            {modalOpen ? <div className={styles.addModal}>
                <div className="container">
                <span onClick={() => {
                    setModalOpen(false)
                    setSelected(null)
                    formik.resetForm()
                    }}><IoIosCloseCircleOutline /></span>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input 
                        onChange={formik.handleChange}
                        defaultValue={formik.values.title}
                         id="title" name="title" />
                    </div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <input type="number"
                        onChange={formik.handleChange}
                        defaultValue={formik.values.price}
                         id="price" name="price" />
                    </div>
                    <div>
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number"
                        onChange={formik.handleChange}
                        defaultValue={formik.values.quantity}
                         id="quantity" name="quantity" />
                    </div>
                    <div>
                    <select
          name="category"
          id="category"
          onChange={formik.handleChange}
                        defaultValue={formik.values.category}
        >
          <option defaultValue="" selected disabled>
            Categoriy
          </option>
          {categories.map((cat) => (
            <option value={cat?._id} key={cat?._id}>
              {cat?.name}
            </option>
          ))}
        </select>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input 
                        onChange={formik.handleChange}
                        defaultValue={formik.values.password}
                        id="password" name="password" />
                    </div>
                    <div>
                        <button>{selected === null ? 'Add user' : 'Save user'}</button>
                    </div>
                </form>
                </div>
            </div> : null}
            <div className="container">
            <div className={styles.admin_products__wrapper_header}>
            <input placeholder="Search..." onChange={(e) => setParams({search: e.target.value})} />
            <button onClick={() => setModalOpen(true)}><MdOutlineAddShoppingCart /></button>
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