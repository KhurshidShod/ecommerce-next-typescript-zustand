import React from 'react'
// import { Pagination } from 'antd'
import Pagination from '@mui/material/Pagination';

const PaginationComponent = ({total, store}: {total: number, store: (value: any) => void}) => {
  return (
    <Pagination onChange={(e, value: number) => store(value)} count={Math.ceil(total / 8)} color="secondary" variant="outlined" shape="rounded" />
    // <Pagination onChange={(pg) => store(pg)} current={currentPage} pageSize={8} total={total} />
  )
}

export default PaginationComponent