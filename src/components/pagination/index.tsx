import React from 'react'
// import { Pagination } from 'antd'
import Pagination from '@mui/material/Pagination';

const PaginationComponent = ({total, store, currentPage}: {total: number, store: number, currentPage: number}) => {
  return (
    <Pagination onChange={(e, value) => store(value)} defaultChecked={1} count={Math.ceil(total / 8)} color="secondary" variant="outlined" shape="rounded" />
    // <Pagination onChange={(pg) => store(pg)} current={currentPage} pageSize={8} total={total} />
  )
}

export default PaginationComponent