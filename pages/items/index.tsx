import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Paper, Divider } from '@material-ui/core'
import { Page } from '../../lib/layout'
import { searchItems } from '../../lib/services'
import { ItemPreview, ItemSkeleton } from '../../lib/components/items'
import { BreadCumb, Paginator } from '../../lib/components/commons'
import { SearchItemsResults, SearchPageProps } from '../../lib/types'
import { useFeedback } from '../../lib/providers'

/**
 * @description Search items page
 * @param SearchPageProps { search: string, offset: number }
 * @returns JSX.Element
 */
export const SearchPage = ({ search, offset }: SearchPageProps): JSX.Element => {
  const [info, setInfo] = useState<SearchItemsResults>(null)
  const [infoAux, setInfoAux] = useState<SearchItemsResults>(null)
  const { showMessage } = useFeedback()
  const router = useRouter()
  console.log('search, offset', search, offset)
  async function searchResults() {
    try {
      if (offset) {
        setInfoAux(info)
        setInfo(null)
      }
      const data: SearchItemsResults = await searchItems('items', search, offset)
      setInfo(data)
    } catch (e) {
      showMessage('Tenemos problemas al buscar tu articulo', 'error', 5000)
      console.log('error', e.response)
      setInfo(infoAux)
    }
  }

  useEffect(() => {
    setInfo(null)
    setTimeout(() => {
      searchResults()
    }, 500)
  }, [search, offset])

  const paginateResults = (page: number) => {
    console.log('router', router)
    router.push({
      pathname: '/items',
      query: {
        search: search,
        offset: page,
      },
    })
  }

  const renderSkeleton = () => {
    const mock = [0, 1, 2, 3]
    return mock.map((i, index) => {
      return (
        <>
          <ItemSkeleton />
          {index < mock.length - 1 ? <Divider /> : null}
        </>
      )
    })
  }

  return (
    <Page title="Search" search={search}>
      <BreadCumb categories={info?.categories} />
      <Paper>
        {Array.isArray(info?.items) && info?.items.length
          ? info?.items.map((item, index) => {
              return (
                <div key={`item-preview-${index}`}>
                  <ItemPreview item={item} />
                  {index < info?.items.length - 1 ? (
                    <div className="divider">
                      <Divider />
                    </div>
                  ) : null}
                </div>
              )
            })
          : renderSkeleton()}
        <Paginator paging={info?.paging} changePagination={paginateResults} />
      </Paper>
    </Page>
  )
}

SearchPage.getInitialProps = (ctx) => {
  const { search, offset } = ctx.query

  return { search, offset }
}

export default SearchPage
