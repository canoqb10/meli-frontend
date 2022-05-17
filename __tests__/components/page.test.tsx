import React from 'react'
import { render } from '../../test-utils'
import { Page } from '../../lib/layout'

describe('Layout Component', () => {
  it('Render contents', () => {
    const title = 'meli'
    const capitalizedTitle = `${title.charAt(0).toLocaleUpperCase()}${title.substr(1)}`

    const component = render(<Page title={title} />, {})
    expect(component).toHaveProperty('container')
    expect(component).toBeDefined()
    expect(component.getByTestId('title-page')).toContainHTML(
      `<h2 hidden data-testid="title-page">${capitalizedTitle}</h2>`,
    )
  })
})
