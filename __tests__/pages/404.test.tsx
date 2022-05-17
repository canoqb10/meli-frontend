import React from 'react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { render, createMockRouter } from '../../test-utils'
import { useFeedback } from '../../lib/providers'

import ErrorPage from '../../pages/404'

describe('Render Error 404 Page ', () => {
  it('Render Page', () => {
    const component = render(
      <RouterContext.Provider value={createMockRouter({})}>
        <ErrorPage />
      </RouterContext.Provider>,
      { wrapper: useFeedback },
    )
    expect(component).toHaveProperty('container')
  })
})
