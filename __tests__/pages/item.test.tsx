import React from 'react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { render, createMockRouter } from '../../test-utils'
import { useFeedback } from '../../lib/providers'

import SearchPage from '../../pages/items/index'

describe('Items results page', () => {
  it('render contents', () => {
    const search = 'Bolsa negra'
    const component = render(
      <RouterContext.Provider value={createMockRouter({ query: { search } })}>
        <SearchPage search={search} />
      </RouterContext.Provider>,
      { wrapper: useFeedback },
    )
    expect(component).toHaveProperty('container')
  })
})
