import { useState, useEffect } from 'react'
import { TextField, Button } from '@material-ui/core'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { SearchBarProps } from '../../types'

/**
 * @description Search Input Bar Component for searching items
 * @params SearchBarProps { search: string }
 * @returns JSX.Element
 */
export const SearchBar = ({ search }: SearchBarProps): JSX.Element => {
  const [value, setValue] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (search) {
      setValue(search)
    }
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    console.log(value)
    router.push({
      pathname: '/items',
      query: {
        search: value,
      },
    })
  }

  return (
    <form className="search-container" onSubmit={(e) => handleSubmit(e)}>
      <div className="search-inner">
        <div className="search-logo">
          <Link href="/">
            <img src="/assets/logo_ml.png" alt="/assets/logo_ml.png" />
          </Link>
        </div>
        <div className="search-field">
          <TextField
            className="search-text-field"
            placeholder="Nunca dejes de buscar"
            variant="outlined"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            fullWidth
            InputProps={{
              endAdornment: (
                <Button variant="text" color="default" type="submit">
                  <img
                    className="search-bar-img"
                    src="/assets/ic_search.png"
                    alt="/assets/ic_search.png"
                  />
                </Button>
              ),
            }}
          />
        </div>
        <div>
          <Button
            variant="text"
            color="default"
            type="button"
            onClick={() => router.push('/purchases')}
          >
            <div className="shopping-button">
              <ShoppingCartOutlinedIcon />
              <span>Mis compras</span>
            </div>
          </Button>
        </div>
      </div>
    </form>
  )
}

export default SearchBar
