import { useEffect, useState } from 'react'
import { Paper, Divider, Tabs, Tab } from '@material-ui/core'
import { Page } from '../lib/layout'
import { getPurchases } from '../lib/services'
import { isValidArray } from '../lib/helpers'
import { ItemPreview, ItemSkeleton } from '../lib/components/items'
import { PurchasesResponse } from '../lib/types'

const mock = [1, 2, 3]
/**
 * @description Renders purchases of user
 * @returns JSX.Element
 */
export const PurchasesPage = (): JSX.Element => {
  const [purchases, setPurchases] = useState(null)
  const [loader, setLoader] = useState<boolean>(true)
  const [tabValue, setTabValue] = useState<number>(0)

  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
      loadPurchases()
    }, 500)
  }, [])

  const loadPurchases = async () => {
    try {
      const _purchases: PurchasesResponse = await getPurchases()
      setPurchases(_purchases.purchases)
    } catch (e) {
      console.log('e', e)
    } finally {
      setLoader(false)
    }
  }

  const renderPurchases = () => {
    if (loader) {
      return mock.map((i, index) => {
        return (
          <>
            <ItemSkeleton />
            {index < mock.length - 1 ? <Divider /> : null}
          </>
        )
      })
    }

    if (!isValidArray(purchases)) {
      return <div className="purchases-not-found">No hay artículos comprados...</div>
    }

    return purchases.map(({ amount, total, details }, index) => {
      if (isValidArray(details)) {
        const item = details[0]
        return (
          <div key={`purchases-${index}`}>
            <ItemPreview item={item} amount={amount} total={total} />
            {index < purchases.length - 1 ? <Divider /> : null}
          </div>
        )
      }
    })
  }
  const handleChange = (event, newValue) => {
    console.log('newValue', newValue)
    setTabValue(newValue)
  }

  return (
    <Page title="Shopping Cart">
      <Paper className="purchases-container">
        <Tabs value={tabValue} onChange={handleChange} indicatorColor="primary" textColor="primary">
          <Tab label={`Tus compras (${isValidArray(purchases) ? purchases.length : 0})`} />
          <Tab label="Guardados (0)" disabled />
        </Tabs>
        <Divider />
        <TabPanel value={tabValue} index={0}>
          {renderPurchases()}
        </TabPanel>
        <TabPanel value={tabValue} index={1} />
      </Paper>
    </Page>
  )
}

export const TabPanel = (props)  => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  )
}

export default PurchasesPage
