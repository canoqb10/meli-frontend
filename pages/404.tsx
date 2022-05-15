import { Grid, Box, Typography, Divider } from '@material-ui/core'
import { NextPage } from 'next'
import { Page } from '../lib/layout'

/**
 * @description Search Error 404 page
 * @returns JSX.Element
 */

const NotFoundPage: NextPage = () => {
  return (
    <Page title="Página no encontrada">
      <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Box mt={5} mb={3}>
            <img src="/assets/logo_ml_2x.png" alt="Logo ML" />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <div className="text-center">
            <Typography color="textPrimary" variant="h5">
              <Divider />
              <br />
              La página que buscas no existe
            </Typography>
            <Typography color="textPrimary" variant="h5">
              Nunca dejes de buscar
            </Typography>
            <br />
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography color="error" variant="h4">
            Código 404
          </Typography>
        </Grid>
      </Grid>
    </Page>
  )
}

export default NotFoundPage
