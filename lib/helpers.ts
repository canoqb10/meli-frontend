/**
 *
 * @description These functions does not belongs to any module but they are very useful
 *
 * /
 

 /* function to format a amount by currency
 * @params amount number
 * @params currency string
 * @params lang string
 * @return numberFormat string
 */
export function formatAmount(amount: number, currency: string, lang = 'es-ar'): string {
  if (!amount) {
    return ''
  }

  const numberFormat = amount.toLocaleString(lang, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  })
  return numberFormat
}

/**
 * Checks if is an valid array
 * @param value Array <unknown>
 * @returns
 */
export const isValidArray = (value: Array<unknown>): boolean => {
  if (Array.isArray(value) && value.length > 0) {
    return true
  }
  return false
}
