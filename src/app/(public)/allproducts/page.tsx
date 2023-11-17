import {Fragment} from 'react';
import { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import AllProductsHeader from '@/components/allprods-header'
import AllProductsWrapper from '@/components/allprods-wrapper'
import PaginationComponent from '@/components/pagination'
import styles from './AllProducts.module.scss'

import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: "MegaMart | Products",
  description: "MegaMart e-commerce by Xurshid",
};
const AllProductsPage = () => {
  return (
    <Fragment>
      <ToastContainer />
      <section className={styles.allproducts}>
        <div className="container">
            <div className={styles.allproducts__wrapper}>
                <AllProductsHeader />
                <AllProductsWrapper />
            </div>
        </div>
    </section>
    </Fragment>
  )
}

export default AllProductsPage