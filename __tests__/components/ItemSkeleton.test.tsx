import React from 'react'
import { render } from '../../test-utils'
import ItemSkeleton from '../../lib/components/items/ItemSkeleton'

describe('ItemSkeleton Component', () => {
  it('Render contents', () => {
    const component = render(<ItemSkeleton />, {})

    expect(component).toHaveProperty('container')
    expect(component).toBeDefined()
  })
})
