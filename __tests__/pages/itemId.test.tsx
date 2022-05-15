import React from 'react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { render, createMockRouter } from '../../test-utils'
import { useFeedback } from '../../lib/providers'

import DetailPage from '../../pages/items/[id]'

describe('Item Id Page', () => {
  it('render contents', () => {
    const id = 'MLA796015965'
    const component = render(
      <RouterContext.Provider value={createMockRouter({ query: { id } })}>
        <DetailPage id={id} />
      </RouterContext.Provider>,
      { wrapper: useFeedback },
    )
    expect(component).toHaveProperty('container')
  })
})
