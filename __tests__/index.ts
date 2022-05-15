import moxios from 'moxios'
import sinon from 'sinon'
import { formatAmount } from '../lib/helpers'
import { getItem, searchItems } from '../lib/services'

const categories = ['Bolsas', 'Perros', 'Mascotas']
const items = {
  author: { name: 'Alberto', lastname: 'cano' },
  categories,
  items: [
    {
      id: 'ML123849',
      description: 'Cama perro',
    },
  ],
}
const item = {
  author: { name: 'Alberto', lastname: 'cano' },
  categories,
  item: {
    id: 'ML123849',
    description: 'Cama perro grande, chica, mediana economica',
    free_shipping: true,
    picture: 'https://imagen.com.mx',
    sold_quantity: 20,
    title: 'Cama para perro',
    price: {
      amount: 100,
      currency: 'ARS',
      decimals: 3,
    },
  },
}
describe('General functions helpers', () => {
  it('Format an amount correctly', () => {
    const amount = 10
    const currency = 'ARS'

    const formatAmout = formatAmount(amount, currency)
    expect(formatAmout.replace(/\s/g, '')).toEqual(`${currency} ${amount}.00`.replace(/\s/g, ''))
  })
})

describe('Integration with the API Test', () => {
  let axiosInstance
  beforeEach(function () {
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall(axiosInstance)
  })

  it('Returns a properly formatted SearchItemsResults object from the /items resource', async () => {
    moxios.withMock(() => {
      const onFulfilled = sinon.spy()
      searchItems('item', 'Cama perro').then(onFulfilled)
      moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        request
          .respondWith({
            status: 200,
            response: items,
          })
          .then((data) => {
            expect(onFulfilled).toHaveBeenCalledTimes(1)
            expect(data.status).toBe(200)
            expect(data).toHaveProperty('author')
            expect(data).toHaveProperty('categories')
            expect(data).toHaveProperty('items')
            expect(data.items).toBeDefined()
            expect(data.categories).toBeDefined()
            expect(data.items).toBeDefined()
            expect(data.items.length).toBeGreaterThan(0)
            expect(data.categories.length).toBeGreaterThan(0)
          })
      })
    })
  })

  it('Returns a properly formatted SearchItemsResults object from the /items/:id resource', async () => {
    moxios.withMock(() => {
      const onFulfilled = sinon.spy()
      getItem('item', 'MLA796015965').then(onFulfilled)
      moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        request
          .respondWith({
            status: 200,
            response: item,
          })
          .then((data) => {
            console.log('data', data)
            expect(onFulfilled).toHaveBeenCalledTimes(1)
            expect(data.status).toBe(200)
            expect(data).toHaveProperty('author')
            expect(data).toHaveProperty('categories')
            expect(data).toHaveProperty('item')
            expect(data.item).toBeDefined()
            expect(data.categories).toBeDefined()
            expect(data.categories.length).toBeGreaterThan(0)
            expect(data.item).toHaveProperty('id')
            expect(data.item).toHaveProperty('description')
            expect(data.item).toHaveProperty('free_shipping')
            expect(data.item).toHaveProperty('picture')
            expect(data.item).toHaveProperty('sold_quantity')
            expect(data.item).toHaveProperty('title')
            expect(data.item).toHaveProperty('price')
            expect(data.item.price).toHaveProperty('amount')
            expect(data.item.price).toHaveProperty('currency')
            expect(data.item.price).toHaveProperty('decimals')
          })
      })
    })
  })
})
