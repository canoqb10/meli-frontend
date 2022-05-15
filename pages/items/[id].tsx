import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Paper, Button, CircularProgress } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import CheckIcon from '@material-ui/icons/Check'

import { Page } from '../../lib/layout'
import { getItem } from '../../lib/services'
import { BreadCumb } from '../../lib/components/commons'
import { ItemResult, DetailProps } from '../../lib/types'
import { formatAmount } from '../../lib/helpers'
import { useFeedback } from '../../lib/providers'
import { purchaseItem } from '../../lib/services'

const PURCHASE_BUYING = 'buying'
const PURCHASE_DONE = 'done'
const PURCHASE_STOPPED = 'stop'
/**
 * @description Item detail page
 * @param DetailProps { id: string }
 * @returns JSX.Element
 */
export const DetailPage = ({ id }: DetailProps): JSX.Element => {
  const [info, setInfo] = useState<ItemResult>(null)
  const [buying, setBuying] = useState<string>(PURCHASE_STOPPED)
  const router = useRouter()
  const { showMessage } = useFeedback()
  async function searchItems() {
    try {
      const data: ItemResult = await getItem('items', id)
      setInfo(data)
    } catch (e) {
      showMessage('Tenemos problemas al mostrar tu articulo', 'error', 5000)
      console.log('error', e)
    }
  }

  useEffect(() => {
    searchItems()
  }, [])

  function renderCondition() {
    if (info?.item?.condition === 'new') {
      return 'Nuevo'
    }
    return 'Usado'
  }

  function renderSold() {
    if (typeof info?.item?.sold_quantity !== 'undefined') {
      return ` - ${info?.item?.sold_quantity} Vendidos`
    }
    return null
  }

  const buyItem = async (item) => {
    setBuying(PURCHASE_BUYING)
    try {
      await purchaseItem({
        amount: 1,
        item,
      })
      showMessage('¡Este artículo ya es tuyo!', 'success', 3000)
      setBuying(PURCHASE_DONE)
      setTimeout(() => {
        router.push('/purchases')
      }, 1500)
    } catch (e) {
      showMessage('Tenemos problemas al mostrar tu articulo', 'error', 3000)
      console.log('error', e)
      setBuying(PURCHASE_STOPPED)
    }
  }

  const renderLabelButton = () => {
    if (buying === PURCHASE_BUYING) {
      return <CircularProgress variant="indeterminate" />
    }

    if (buying === PURCHASE_DONE) {
      return <CheckIcon />
    }

    return 'Comprar'
  }

  const renderButtonColor = () => {
    if (buying === PURCHASE_BUYING) {
      return 'default'
    }

    if (buying === PURCHASE_STOPPED) {
      return 'primary'
    }

    return
  }

  return (
    <Page title="Item">
      <BreadCumb categories={info?.categories} />
      <Paper>
        {!info?.item ? (
          <div className="detail-root">
            <div className="detail-buy-info">
              <div className="detail-image">
                <Skeleton variant="rect" width={300} height={300} />
              </div>
              <div className="detail-buy">
                <div className="detail-condition">
                  <Skeleton variant="text" width={100} />
                </div>
                <div className="detail-title">
                  <Skeleton variant="text" width={300} />
                </div>
                <div className="detail-price">
                  <Skeleton variant="text" width={300} />
                </div>
                <div className="detail-btn">
                  <Skeleton variant="rect" width={300} height={50} />
                </div>
              </div>
            </div>
            <div className="detail-description">
              <div>
                <Skeleton variant="text" width={300} />
                <div className="detail-text-description">
                  <Skeleton variant="text" width={500} height={800} />
                </div>
              </div>
              <div></div>
            </div>
          </div>
        ) : (
          <div className="detail-root">
            <div className="detail-buy-info">
              <div className="detail-image">
                <img src={info?.item?.picture} alt={info?.item?.picture} />
              </div>
              <div className="detail-buy">
                <div className="detail-condition">
                  {renderCondition()}
                  {renderSold()}
                </div>
                <div className="detail-title">{info?.item?.title}</div>
                <div className="detail-price">
                  {formatAmount(info?.item?.price?.amount, info?.item?.price?.currency)}
                </div>
                <div className="detail-btn">
                  <Button
                    variant="contained"
                    color={renderButtonColor()}
                    className={buying === PURCHASE_DONE ? 'button-success' : null}
                    onClick={() => {
                      buyItem(info?.item)
                    }}
                  >
                    {renderLabelButton()}
                  </Button>
                </div>
              </div>
            </div>
            <div className="detail-description">
              <div>
                <h3>Descripción del producto</h3>
                <div className="detail-text-description">{info?.item?.description}</div>
              </div>
              <div></div>
            </div>
          </div>
        )}
      </Paper>
    </Page>
  )
}

DetailPage.getInitialProps = (ctx) => {
  const { id } = ctx.query

  return { id }
}
export default DetailPage
