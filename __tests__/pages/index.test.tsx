import React from 'react'
import { render } from '../../test-utils'
import { useFeedback } from '../../lib/providers'

import Home from '../../pages/index'

describe('Home Page', () => {
  it('render contents', () => {
    const component = render(<Home />, { wrapper: useFeedback })
    expect(component).toHaveProperty('container')
  })
})
