/**
 * @description Export constants for all application
 * */
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const meliMiddleEndUrl = publicRuntimeConfig?.meliMiddleEndUrl
const meliIcon = publicRuntimeConfig?.meliIcon
const meliLimitPage = publicRuntimeConfig?.meliLimitPage || 4
const author = {
  name: publicRuntimeConfig?.authorName || 'Alberto',
  lastname: publicRuntimeConfig?.authorLastname || 'Cano',
}

export { meliMiddleEndUrl, meliIcon, meliLimitPage, author }
