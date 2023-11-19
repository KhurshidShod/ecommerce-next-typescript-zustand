"use client";
import {useEffect, useState} from 'react'
import styles from './AdminUsersPage.module.scss'
import { useFormik } from 'formik'
import { MdEdit, MdDelete } from "react-icons/md";
import { IoMdPersonAdd, IoIosCloseCircleOutline } from "react-icons/io";
import useUsers from '@/store/users';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import PaginationComponent from '@/components/pagination';

const AdminUsersPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selected, setSelected] = useState<string | null>(null)
    const {totalUsers, loading, users, createUser, editUser, getUser, getUsers, setPage, deleteUser, setParams} = useUsers();
      const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            username: "",
            phoneNumber: "",
            password: "",
        },
          onSubmit: (values) => {
              if(selected === null){
                createUser(values)
              } else {
                editUser(selected, {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    username: values.username,
                    phoneNumber: values.phoneNumber,
                    password: values.password,
                })
              }
              setModalOpen(false);
              setSelected(null)
              formik.resetForm()
            },
      })
    const editUserForm = (id: string) => {
        getUser(id, formik)
        setSelected(id)
        setModalOpen(true)
    }
      useEffect(() => {
        getUsers()
      }, [getUsers])
    return (
        <section className={styles.admin_users__wrapper}>
            {modalOpen ? <div className={styles.addModal}>
                <div className="container">
                <span onClick={() => {
                    setModalOpen(false)
                    setSelected(null)
                    formik.resetForm()
                    }}><IoIosCloseCircleOutline /></span>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor="firstName">Firstname</label>
                        <input 
                        onChange={formik.handleChange}
                        defaultValue={formik.values.firstName}
                         id="firstName" name="firstName" />
                    </div>
                    <div>
                        <label htmlFor="lastName">Lastname</label>
                        <input
                        onChange={formik.handleChange}
                        defaultValue={formik.values.lastName}
                         id="lastName" name="lastName" />
                    </div>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input 
                        onChange={formik.handleChange}
                        defaultValue={formik.values.username}
                         id="username" name="username" />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Phone number</label>
                        <input 
                        onChange={formik.handleChange}
                        defaultValue={formik.values.phoneNumber}
                        id="phoneNumber" name="phoneNumber" />
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
            <div className={styles.admin_users__wrapper_header}>
            <input placeholder="Search..." onChange={(e) => setParams({search: e.target.value})} />
            <button onClick={() => {
                setModalOpen(true)
                }}><IoMdPersonAdd /></button>
            </div>
                <div className={styles.admin_users__wrapper_table}>
                        <ul className={styles.admin_users__wrapper_table_header}>
                            <li>Firstname</li>
                            <li>Lastname</li>
                            <li>Username</li>
                            <li>Phone number</li>
                            <li>Role</li>
                            <li>Actions</li>
                        </ul>
                        <div className={styles.admin_users__wrapper_table_content}>
                        
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
                            <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" width={'90%'} height={30} />
                            </div>
                            <div>
                            <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" width={'35px'} height={'35px'} />
                            <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" width={'35px'} height={'35px'} />
                            </div>
                        </div>) :users.map(user => <ul key={user._id}>
                            <li>{user.firstName}</li>
                            <li>{user.lastName}</li>
                            <li>{user.username}</li>
                            <li>{user.phoneNumber}</li>
                            <li>{user.role == 0 ? 'User' : 'Admin'}</li>
                            <li>
                                <button onClick={() => editUserForm(user._id)}><MdEdit /></button>
                                <button onClick={() => deleteUser(user._id)}><MdDelete /></button>
                            </li>
                        </ul>)}
                        </div>
                </div>
                <div className={styles.admin_users__wrapper_pagination}>
                <PaginationComponent total={totalUsers} store={(pg) => setPage(pg)} />
                </div>
            </div>
        </section>
    )
}

export default AdminUsersPage