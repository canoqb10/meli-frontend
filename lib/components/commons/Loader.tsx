import { CircularProgress } from '@material-ui/core'
import { LoaderProps } from '../../types'

/**
 * @description Shows a Circular Loader Component
 * @param LoaderProps { message: string, active: boolean, errorMessage: string }
 * @returns JSX.Element
 */
export const Loader = ({ message, active, errorMessage }: LoaderProps): JSX.Element => {
  let display = (
    <>
      <CircularProgress color="primary" /> {message || 'Cargando ...'}{' '}
    </>
  )
  if (!active) {
    display = <>{errorMessage}</>
  }
  return <div className="loader">{display}</div>
}

export default Loader
