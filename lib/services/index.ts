import axios from 'axios'
import {
  PurchaseItem,
  ItemResult,
  SearchItemsResults,
  PurchasesResponse,
  PurchaseItemCreated,
} from '../types'
import { meliMiddleEndUrl, author } from '../constants'

export const http = axios.create()

/**
 * @description Pastes the token from every request sending to the API
 * */
http.interceptors.request.use(async (config) => {
  try {
    config.headers = config.headers || {}
    config.headers['Authorization'] = `Bearer ${author.name} ${author.lastname}`
  } catch (e) {
    console.log('No current user', e)
  }
  return config
})

/**
 * @description Request http to API for search items
 * @param path
 * @param query
 * @returns Promise<SearchItemsResults>
 */
export const searchItems = async (
  path?: string,
  query?: string,
  offset = 1,
): Promise<SearchItemsResults> => {
  const { data } = await http.get<SearchItemsResults>(`${meliMiddleEndUrl}/${path}`, {
    params: {
      search: query,
      offset,
    },
  })

  return data
}

/**
 * @description Request http to API for get an items by id
 * @param path
 * @param id
 * @returns Promise<ItemResult>
 */
export const getItem = async (path: string, id: string): Promise<ItemResult> => {
  const { data } = await http.get<ItemResult>(`${meliMiddleEndUrl}/${path}/${id}`)
  return data
}

/**
 * @description Creates an item purchase
 * @param item PurchaseItem
 * @returns PurchaseItemCreated
 */
export const purchaseItem = async (item: PurchaseItem): Promise<PurchaseItemCreated> => {
  const { data } = await http.post(`${meliMiddleEndUrl}/purchases`, item)
  return data
}

/**
 * @description Gets all purchases
 * @returns Promise<PurchasesResponse>
 */
export const getPurchases = async (): Promise<PurchasesResponse> => {
  const { data } = await http.get(`${meliMiddleEndUrl}/purchases`)
  return data
}
