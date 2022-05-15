import React from 'react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { render, createMockRouter } from '../../test-utils'
import ItemPreview from '../../lib/components/items/ItemsPreview'
import { fireEvent, screen } from '@testing-library/react'

describe('Item Preview Component', () => {
  it('Render contents', () => {
    const item = {
      id: 'ML2807653',
      title: 'Bolsa de Basura',
      price: {
        currency: 'MXN',
        amount: 20,
        decimals: 10,
      },
      picture: 'https://www.mercadolibre.com',
      condition: 'nuevo',
      free_shipping: true,
      place: 'CDMX',
      location: 'Mexico',
      sold_quantity: 30,
      description: 'Una bolsa de basura resitente',
    }

    const pathname = `/items/${item.id}`
    const router = createMockRouter({ query: { id: item.id }, pathname })
    const component = render(
      <RouterContext.Provider value={router}>
        <ItemPreview item={item} />
      </RouterContext.Provider>,
      {},
    )
    expect(component).toHaveProperty('container')
  })

  it('Selects an item', () => {
    const item = {
      id: 'ML2807653',
      title: 'Bolsa de Basura',
      price: {
        currency: 'MXN',
        amount: 20,
        decimals: 10,
      },
      picture: 'https://www.mercadolibre.com',
      condition: 'nuevo',
      free_shipping: true,
      place: 'CDMX',
      location: 'Mexico',
      sold_quantity: 30,
      description: 'Una bolsa de basura resitente',
    }
    const options = { locale: undefined, scroll: undefined, shallow: undefined }
    const pathname = `/items/${item.id}`
    const router = createMockRouter({ query: { id: item.id }, pathname })
    render(
      <RouterContext.Provider value={router}>
        <ItemPreview item={item} />
      </RouterContext.Provider>,
      {},
    )

    fireEvent.click(screen.getByText(item.location))

    expect(router.push).toHaveBeenCalledWith(pathname, pathname, options)
    expect(router.push).toHaveBeenCalledTimes(1)
  })
})
