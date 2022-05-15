import React from 'react'
import { render } from '../../test-utils'
import Loader from '../../lib/components/commons/Loader'

describe('Item Preview Component', () => {
  it('Renders content', () => {
    const message = 'cargando...'
    const active = true
    const errorMessage = 'error...'

    const component = render(
      <Loader message={message} active={active} errorMessage={errorMessage} />,
      {},
    )

    expect(component).toHaveProperty('container')
  })
  it('If active is true', () => {
    const message = 'cargando...'
    const active = true
    const errorMessage = 'error...'

    const component = render(
      <Loader message={message} active={active} errorMessage={errorMessage} />,
      {},
    )
    const el = component.getByText(message)
    expect(el).toBeDefined()
  })

  it('If active is false', () => {
    const message = 'cargando...'
    const active = false
    const errorMessage = 'error...'

    const component = render(
      <Loader message={message} active={active} errorMessage={errorMessage} />,
      {},
    )
    const el = component.getByText(errorMessage)
    expect(el).toBeDefined()
  })
})
