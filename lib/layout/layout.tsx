import { PropsWithChildren } from 'react'
import Head from 'next/head'

import { LayoutProps } from '../types'
import { meliIcon } from '../constants'

console.log('meliIcon', meliIcon)
/**
 * @description Create a template layout for app
 * @param PropsWithChildren<LayoutProps> { children: unknown }
 * @returns JSX.Element
 */
export const Layout = ({ children }: PropsWithChildren<LayoutProps>): JSX.Element => {
  return (
    <div id="layout-container">
      <Head>
        <>
          <title>Mercado Libre</title>
          <link rel="icon" href={meliIcon} />
        </>
      </Head>
      <main id="layout-main">
        <div id="layout-toolbar" />
        {children}
      </main>
    </div>
  )
}
