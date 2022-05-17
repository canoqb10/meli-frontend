import Skeleton from '@material-ui/lab/Skeleton'

/**
 * @description Skeleton Component renders a fake element into the screen simulates the load html/react element
 * @returns JSX.Element
 */
export const ItemSkeleton = (): JSX.Element => {
  return (
    <>
      <div className="item-preview-root">
        <div className="item-preview-img">
          <Skeleton variant="rect" width={120} height={120}></Skeleton>
        </div>
        <div className="item-preview-description">
          <div>
            <Skeleton variant="text"></Skeleton>
          </div>
          <div>
            <Skeleton variant="text"></Skeleton>
          </div>
        </div>
        <div className="item-preview-place">
          <Skeleton variant="text"></Skeleton>
        </div>
      </div>
    </>
  )
}
export default ItemSkeleton
