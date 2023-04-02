import React from 'react'
import ReactPaginate from 'react-paginate'

import styles from './Pagination.module.scss'
type PaginationParams = {
  onChangePage: (page: number) => void
  currentPage: number
}
const Pagination: React.FC<PaginationParams> = ({
  onChangePage,
  currentPage,
}) => {
  return (
    <div className={styles.root}>
      <ReactPaginate
        className={styles.pagination}
        breakLabel='...'
        nextLabel='>'
        previousLabel='<'
        onPageChange={(e) => onChangePage(e.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage - 1}
      />
    </div>
  )
}

export default Pagination
