import { Box, Divider, Grid, Typography } from '@material-ui/core'
import { NextPage } from 'next'
import { Page } from '../lib/layout'
import { ErrorPageProps } from '../lib/types'

/**
 * @description Map the stattus code of an error
 * @param statusCode
 * @returns message string
 */
const mapStatusCode = (statusCode: number) => {
  switch (statusCode) {
    case 404:
      return 'La página que buscas no existe'
    default:
      return '¡Tenemos inconvenientes! Intenta más tarde'
  }
}

/**
 * @description Error Page Handler
 * @param ErrorPageProps { statusCode: number}
 * @returns JSX.Element
 */
const ErrorPage: NextPage<{ statusCode: number }> = ({
  statusCode,
}: ErrorPageProps): JSX.Element => {
  return (
    <Page title={`Error ${statusCode}`}>
      <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Box mt={5} mb={3}>
            <img src="/assets/logo_ml_2x.png" alt="Logo ML" />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography color="textPrimary" variant="h5">
            {mapStatusCode(statusCode)}
          </Typography>

          <br />
        </Grid>
        <Grid item xs={12}>
          <Typography color="error" variant="h3">
            ERROR: {statusCode}
            <Divider />
          </Typography>
        </Grid>
      </Grid>
    </Page>
  )
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default ErrorPage
