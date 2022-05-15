import React from 'react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { render, createMockRouter } from '../../test-utils'
import BreadCumb from '../../lib/components/commons/BreadCumb'
import { fireEvent, screen } from '@testing-library/react'

describe('BreadCumb Component', () => {
  it('Render contents', () => {
    const categories = ['Bolsas', 'Mandado', 'Basura', 'Bolsos', 'Cocina']
    const separator = '*'

    const component = render(<BreadCumb categories={categories} separator={separator} />, {})
    component.getByText(categories[0])
    component.getByText(categories[4])

    expect(component).toHaveProperty('container')
  })

  it('Show correct separators ', () => {
    const categories = ['Bolsas', 'Mandado', 'Basura', 'Bolsos', 'Cocina']
    const separator = '*'

    const component = render(<BreadCumb categories={categories} separator={separator} />, {})
    const separatorEls = component.getAllByText(separator)
    expect(separatorEls.length).toBe(categories.length - 1)
  })

  it('Clicks an category', () => {
    const categories = ['Bolsas', 'Mandado', 'Basura', 'Bolsos', 'Cocina']
    const separator = '*'
    const pathname = `/items?search=${categories[0]}`
    const router = createMockRouter({ query: { search: categories[0], pathname } })
    const options = { locale: undefined, scroll: undefined, shallow: undefined }
    const component = render(
      <RouterContext.Provider value={router}>
        <BreadCumb categories={categories} separator={separator} />
      </RouterContext.Provider>,
      {},
    )
    component.getByText(categories[0])
    component.getByText(categories[4])
    const separatorEls = component.getAllByText(separator)
    expect(separatorEls.length).toBe(categories.length - 1)
    fireEvent.click(screen.getByText(categories[0]))

    expect(router.push).toHaveBeenCalledWith(pathname, pathname, options)
    expect(router.push).toHaveBeenCalledTimes(1)
  })
})
