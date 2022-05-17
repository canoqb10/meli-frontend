import Link from 'next/link'
import { ItemProps } from '../../types'
import { formatAmount } from '../../helpers'
/**
 * @description Shows a summary info for an item
 * @params ItemProps { item: Item, amount: number, total: number }
 * @returns JSX.Element
 */
export const ItemPreview = ({ item, amount, total }: ItemProps): JSX.Element => {
  return (
    <Link href={`/items/${total ? item.itemId : item.id}`} data-testid="items-preview-id">
      <div className="item-preview-root">
        <div className="item-preview-img">
          <img src={item?.picture} alt={item?.picture} />
        </div>
        <div className="item-preview-description">
          <div>
            {formatAmount(item?.price?.amount, item?.price?.currency)}{' '}
            {item.free_shipping && (
              <img src="assets/ic_shipping.png" alt="assets/ic_shipping.png" />
            )}
          </div>
          <div>{item?.title}</div>
        </div>
        <div className="item-preview-place" data-testid="item-preview-price">
          {amount ? `Piezas: ${amount}` : item?.location}
        </div>
        <div className="item-preview-place" data-testid="item-preview-amount">
          {total ? `Total: ${formatAmount(total, item.price.currency)}` : null}
        </div>
      </div>
    </Link>
  )
}

export default ItemPreview
