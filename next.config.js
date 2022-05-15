/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()

module.exports = {
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    meliMiddleEndUrl: process.env.MELI_MIDDLE_END_URL,
    meliIcon: process.env.MELI_ICON,
    meliLimitPage: process.env.MELI_LIMIT_PAGE,
    authorName: process.env.AUTHOR_NAME,
    authorLastname: process.env.AUTHOR_LASTNAME,
  },
}
