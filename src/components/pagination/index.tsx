import React from 'react'
import Pagination from '@mui/material/Pagination';

const PaginationComponent = ({total, store}: {total: number, store: (value: any) => void}) => {
  return (
    <Pagination onChange={(e, value: number) => store(value)} count={Math.ceil(total / 8)} color="primary" variant="outlined" shape="rounded" />
  )
}

export default PaginationComponent