export const IS_PRODUCTION = process.env.NODE_ENV === 'production'
export const BASE_URL = IS_PRODUCTION ? 'https://leandrosms.com' : 'http://localhost:3000'