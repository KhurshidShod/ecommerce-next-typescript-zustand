
"use client";
import styles from './AdminCategories.module.scss'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { MdEdit, MdDelete } from "react-icons/md";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import useProductsAdmin from "@/store/productsAdmin"
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import Skeleton from '@mui/material/Skeleton';
import {getCookie} from 'cookies-next'
import useCategories from "@/store/categories";
import request from "@/server/request";
import Image from "next/image";
import PaginationComponent from '@/components/pagination';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const AdminCategoriesPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);
    const {loading, totalCategories, categories, getCategories, getCategory, deleteCategory, editCategory, createCategory} = useCategories()
    const formik = useFormik({
        initialValues: {
            name: "",
            image: {
                public_id: "",
                url: ""
            }
        },
          onSubmit: (values) => {

              if(selected === null){
                createCategory(values)
              } else {
                editCategory(selected, values);
              }
              setModalOpen(false);
              setSelected(null)
              formik.resetForm()
            },
      })
      const editCategoryForm = (id: string) => {
        getCategory(id, formik)
        setSelected(id)
        setModalOpen(true)
    }
    const uploadProductImage = async(file: any) => {
        const formData = new FormData();
        formData.append("file", file);
        console.log(formData)
        await request.post("upload", formData, {
            headers: {
                "Authorization": "Bearer " + getCookie("token")
            }
        }).then(res => {
            formik.setFieldValue("image", res.data)
        })
    }
    useEffect(() => {
        getCategories()
    }, [getCategories])
    return (
        <section className={styles.admin_categories__wrapper}>
            {modalOpen ? <div className={styles.addModal}>
                <div className="container">
                <span onClick={() => {
                    setModalOpen(false)
                    setSelected(null)
                    formik.resetForm()
                    }}><IoIosCloseCircleOutline /></span>
                <form onSubmit={formik.handleSubmit}>
                    <input style={{
                        backgroundImage: "url(" + formik.values.image.url + ")"
                    }} defaultValue={formik.values.image.url} type="file" onChange={(e) => uploadProductImage(e.target.files ? e.target.files[0] : null)} />
                    <div>
                        <label htmlFor="name">Name</label>
                        <input 
                        onChange={formik.handleChange}
                        defaultValue={formik.values.name}
                         id="name" name="name" />
                    </div>
                    <div>
                        <button>{selected === null ? 'Add user' : 'Save user'}</button>
                    </div>
                </form>
                </div>
            </div> : null}
            <div className="container">
            <div className={styles.admin_categories__wrapper_header}>
            <div>
            <button onClick={() => setModalOpen(true)}><MdOutlineAddShoppingCart /></button>
            </div>
            </div>
                <div className={styles.admin_categories__wrapper_table}>
                        <ul className={styles.admin_categories__wrapper_table_header}>
                            <li>Image</li>
                            <li>Name</li>
                            <li>Actions</li>
                        </ul>
                        <div className={styles.admin_categories__wrapper_table_content}>
                        {loading ? Array(8).fill(0).map((el, i) => <div key={i}>
                            <div>
                            <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" width={'35px'} height={35} />
                            </div>
                            <div>
                            <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" width={'100%'} height={30} />
                            </div>
                            <div>
                            <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" width={'35px'} height={'35px'} />
                            <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" width={'35px'} height={'35px'} />
                            </div>
                        </div>) :categories.map(category => <ul key={category._id}>
                            <li><Image alt="Image" src={category.image.url} width={35} height={35} /></li>
                            <li>{category.name}</li>
                            <li>
                                <button onClick={() => {editCategoryForm(category._id)}}><MdEdit /></button>
                                <button onClick={() => {deleteCategory(category._id)}}><MdDelete /></button>
                            </li>
                        </ul>)}
                        </div>
                </div>
                        <div className={styles.admin_categories__wrapper_pagination}>
                </div>
            </div>
        </section>
    )
}

export default AdminCategoriesPage