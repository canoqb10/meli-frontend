import React from 'react'
import { render } from '../../test-utils'
import { Layout } from '../../lib/layout'

describe('Layout Component', () => {
  it('Render contents', () => {
    const component = render(<Layout />, {})

    expect(component).toHaveProperty('container')
    expect(component).toBeDefined()
  })
})
