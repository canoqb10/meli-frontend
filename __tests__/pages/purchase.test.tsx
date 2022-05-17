import React from 'react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { render, createMockRouter } from '../../test-utils'
import { useFeedback } from '../../lib/providers'

import PurchasesPage, { TabPanel } from '../../pages/purchases'

describe('Render Purchases page', () => {
  it('Render Page', () => {
    const component = render(
      <RouterContext.Provider value={createMockRouter({})}>
        <PurchasesPage />
      </RouterContext.Provider>,
      { wrapper: useFeedback },
    )
    expect(component).toHaveProperty('container')
  })

  it('Render TabPanel', () => {
    const component = render(<TabPanel />)
    expect(component).toHaveProperty('container')
  })
})
