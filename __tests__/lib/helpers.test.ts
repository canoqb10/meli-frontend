import { formatAmount, isValidArray } from '../../lib/helpers'

describe('General functions helpers', () => {
  it('Validate a format for an amount', () => {
    const amount = 10
    const currency = 'ARS'

    const formatAmout = formatAmount(amount, currency)
    expect(formatAmout.replace(/\s/g, '')).toEqual(`$${amount},00`.replace(/\s/g, ''))
  })

  it('Validate a format for an amount when is not a valid amount', () => {
    const amount = null
    const currency = 'ARS'

    const formatAmout = formatAmount(amount, currency)
    expect(formatAmout).toEqual('')
  })

  it('Validate if an array is valid', () => {
    const myArray = [1, 2, 3]
    expect(isValidArray(myArray)).toEqual(true)
  })

  it('Validate if an array is not valid', () => {
    const myArray = null
    expect(isValidArray(myArray)).toEqual(false)
  })
})
