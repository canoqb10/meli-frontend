import React from 'react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { render, createMockRouter } from '../../test-utils'
import Paginator from '../../lib/components/commons/Paginator'
import { render as renderWithEvent, fireEvent, getByText, screen } from '@testing-library/react'

const paging = {
  total: 100,
  primary_results: 100,
  offset: 10,
  limit: 10,
}
let page = 0

const changePagination = (pagina) => {
  page += pagina
}

describe('Paginator Component', () => {
  it('Render contents', () => {
    const component = render(<Paginator paging={paging} changePagination={changePagination} />, {})
    component.getByText(1)
    component.getByText(10)

    expect(component).toHaveProperty('container')
    expect(component).toBeDefined()
  })

  it('Show a skeleton when paging is not received', () => {
    const component = render(<Paginator paging={null} changePagination={changePagination} />, {})
    const skeleton = component.getByTestId('paginator-skeleton')
    expect(skeleton.childNodes.length).toBe(1)
  })

  it('On changing page correctly', () => {
    renderWithEvent(<Paginator paging={paging} changePagination={() => changePagination(1)} />, {})

    const paginator = screen.getByText('1')

    fireEvent(
      getByText(paginator, '1'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )

    expect(page).toBe(1)
  })
})
