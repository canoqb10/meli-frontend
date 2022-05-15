import { NextRouter } from 'next/router'
import { render } from '@testing-library/react'

const Providers = ({ children }) => {
  return children
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const customRender = (ui, options = {}) => render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'

// override render method
export { customRender as render }

export function createMockRouter(router: Partial<NextRouter>): NextRouter {
  return {
    basePath: '',
    pathname: '',
    route: '/',
    asPath: '',
    query: {},
    back: jest.fn(),
    beforePopState: jest.fn(),
    prefetch: jest.fn(),
    push: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: false,
    defaultLocale: 'en',
    domainLocales: [],
    isPreview: false,
    ...router,
  }
}
