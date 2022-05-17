import { ChangeEvent, useEffect, useState } from 'react'
import Pagination from '@material-ui/lab/Pagination'
import Skeleton from '@material-ui/lab/Skeleton'

import { PaginatorProps } from '../../types'
import { meliLimitPage } from '../../constants'

/**
 * @description Permits paginate a set of list row from a page or a component
 * @param PaginatorProps { paging: PagingResults, changePagination: (params number)=> void }
 * @returns JSX.Element
 */
const Paginator = ({ paging, changePagination }: PaginatorProps): JSX.Element => {
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(0)

  useEffect(() => {
    if (paging) {
      setTotalPages(paging.primary_results / Number(meliLimitPage))
      setPage(Number(paging.offset))
    }
  }, [paging])

  const onChange = (ev: ChangeEvent<unknown>, page: number) => {
    changePagination(page)
  }

  if (!paging) {
    return (
      <div className="paginator-container" data-testid="paginator-skeleton">
        <Skeleton variant="rect" width={400} height={30} />
      </div>
    )
  }
  return (
    <div className="paginator-container">
      <Pagination
        page={page}
        count={totalPages}
        onChange={onChange}
        showFirstButton
        showLastButton
        color="primary"
      />
    </div>
  )
}

export default Paginator
