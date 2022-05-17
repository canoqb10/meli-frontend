import React from 'react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { fireEvent, screen } from '@testing-library/react'

import { render, createMockRouter } from '../../test-utils'
import SearchBar from '../../lib/components/commons/SearchBar'

describe('SearchBar Component', () => {
  it('Render contents', () => {
    const search = 'Bolsas de mano'
    const component = render(
      <RouterContext.Provider value={createMockRouter({})}>
        <SearchBar search={search} />
      </RouterContext.Provider>,
      {},
    )

    expect(component).toHaveProperty('container')
  })

  it('Search items', () => {
    const search = 'Bolsas de mano'
    const pathname = `/items`
    const router = createMockRouter({ query: { search }, pathname })
    render(
      <RouterContext.Provider value={router}>
        <SearchBar search={search} />
      </RouterContext.Provider>,
      {},
    )

    fireEvent.click(screen.getByRole('button', { name: '/assets/ic_search.png' }))

    expect(router.push).toHaveBeenCalledWith({ query: { search }, pathname })
    expect(router.push).toHaveBeenCalledTimes(1)
    expect(router.pathname).toMatch(pathname)
    expect(router.query.search).toMatch(search)
  })
})
