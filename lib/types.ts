/**
 *
 *
 * @description Types properties for UI components Module
 *
 *
 */

export type Price = {
  currency: string
  amount: number
  decimals?: number
}
export type Author = {
  name: string
  lastname: string
}

export type Item = {
  id: string
  itemId?: string
  title: string
  price: Price
  picture: string
  condition: string
  free_shipping: boolean
  place: string
  location?: string
  sold_quantity?: number
  description?: string
}

export type ItemResult = {
  author: Author
  categories: Array<string>
  item: Item
}

export type PagingResults = {
  total: number
  primary_results: number
  offset: number
  limit: number
}

export type SearchItemsResults = {
  author: Author
  categories: Array<string>
  items: Array<Item>
  paging: PagingResults
}

export type ItemProps = {
  item: Item
  amount?: number
  total?: number
}

export type BreadCumbProps = {
  categories: Array<string>
  separator?: string
}

export type LoaderProps = {
  message?: string
  active: boolean
  errorMessage?: string
}

export type SearchBarProps = { search: string }

export type LayoutProps = {
  window?: () => Window
}

export type PageProps = {
  title: string
  search?: string
}

export type DetailProps = {
  id: string
}
export type SearchPageProps = {
  search: string
  offset?: number
}

export type ErrorPlatform = {
  statusCode: number
  errorCode: string
  message: string
  reason?: Error | unknown
}

export type SnackbarProps = {
  value?: boolean
  message: string
  type: 'error' | 'warning' | 'info' | 'success'
  duration: number
}

export type FeedbackContextProps = {
  showMessage: (
    message: string,
    type: 'error' | 'warning' | 'info' | 'success',
    duration: number,
  ) => void
}

export type PaginatorProps = {
  paging: PagingResults
  changePagination: (params: number) => void
}

export type PurchasesResponse = {
  author: Author
  purchases: Array<Purchase>
}

export type PurchaseResponse = {
  author: Author
  purchase: Purchase
}

export type Purchase = {
  id: number
  amount: number
  total: number
  details: Array<PurchaseDetail>
}

export type PurchaseDetail = {
  id: number
  itemId: string
  condition: string
  description: string
  free_shipping: boolean
  picture: string
  sold_quantity: number
  title: string
  price: Price
  purchaseId?: number
  purchase?: Purchase
}

export type PurchaseItem = {
  amount: number
  item: PurchaseDetail
}

export type ErrorPageProps = {
  statusCode: number
}
export type PurchaseItemCreated = {
  id: number
}
