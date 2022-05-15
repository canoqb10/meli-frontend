/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState, PropsWithChildren, SyntheticEvent } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { SnackbarProps, FeedbackContextProps } from '../types'

/**
 * @description Renders to alert component
 * @param props  any
 * @returns JSX.Element
 */
const Alert = (props: any): JSX.Element => {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

export const FeedbackContext = createContext<FeedbackContextProps>(null)

export const useFeedback = (): FeedbackContextProps => useContext(FeedbackContext)

/**
 * @description Creates an context provider for show feedback input to the user
 * @param PropsWithChildren { children: any }
 * @returns
 */
export const FeedbackProvider = ({ children }: PropsWithChildren<any>): JSX.Element => {
  const [snackbar, setSnackbar] = useState<SnackbarProps>({
    message: '',
    value: false,
    duration: 6000,
    type: 'info',
  })

  const value = {
    ...snackbar,
    showMessage(message, type, duration) {
      setSnackbar({
        value: true,
        message,
        type,
        duration,
      })
    },
  }

  const close = (event?: SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setSnackbar({
      message: '',
      value: false,
      duration: 6000,
      type: 'info',
    })
  }

  return (
    <FeedbackContext.Provider value={value}>
      <Snackbar
        open={snackbar.value}
        onClose={close}
        autoHideDuration={6000}
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
      >
        <Alert elevation={6} variant="filled" severity={snackbar.type} onClose={close}>
          {snackbar.message}
        </Alert>
      </Snackbar>
      {children}
    </FeedbackContext.Provider>
  )
}
