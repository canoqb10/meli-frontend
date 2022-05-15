import { Breadcrumbs, Link as Linked } from '@material-ui/core'
import Link from 'next/link'
import classnames from 'classnames'
import { BreadCumbProps } from '../../types'

/**
 * @description Component of show breadcumb links
 * @params BreadCumbProps { categories: string[], separator: string }
 * @returns JSX.Element
 */
export const BreadCumb = ({ categories, separator = '›' }: BreadCumbProps): JSX.Element => {
  if (!Array.isArray(categories) || categories.length === 0) {
    return <div className="breadcumb-root" />
  }

  return (
    <div className="breadcumb-root">
      <Breadcrumbs separator={separator} aria-label="breadcrumb" className="breadcumb-container">
        {categories.map((category, i) => (
          <Link href={`/items?search=${category}`} key={`bread-cumb-${i}`}>
            <Linked
              color="inherit"
              className={classnames('breadcumb-text', { bold: i === categories.length })}
            >
              {category}
            </Linked>
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  )
}
export default BreadCumb
