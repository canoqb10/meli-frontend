import Head from 'next/head'
import { AppBar, Grid } from '@material-ui/core'
import React, { PropsWithChildren } from 'react'
import { SearchBar } from '../components/commons'
import { PageProps } from '../types'

/**
 * @description Renders a template for all Pages
 * @param PropsWithChildren<PageProps> { title: string, search: string, children: unknown }
 * @returns JSX.Element
 */
export const Page = ({ title, search, children }: PropsWithChildren<PageProps>): JSX.Element => {
  const capitalizedTitle = `${title.charAt(0).toLocaleUpperCase()}${title.substr(1)}`

  return (
    <>
      <Head>
        <title>{capitalizedTitle} | ML-FRONT-END-TEST</title>
      </Head>
      <h2 hidden>{capitalizedTitle}</h2>
      <AppBar position="fixed" className="app-bar">
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={8}>
            <SearchBar search={search} />
          </Grid>
        </Grid>
      </AppBar>
      <Grid
        container
        className="page-root"
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={8}>
          {children}
        </Grid>
      </Grid>
    </>
  )
}

export default Page
