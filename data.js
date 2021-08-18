import { series, sleep } from './utils'

export const about = {
  name: 'Calm Cactus',
  brandColor: '#ff7f7f',
  contactEmail: 'hello@calmcact.us',
  title: 'Hi! Nice to see you.',
  body: 'Calm Cactus is a small art shop making limited edition goods for you and your home. Our goal is to have fun making things that might bring a smile to your life. CC is a one person shop, so please be patient for new goods & re-stocking.',
}

export const social = {
  domain: 'calmcact.us',
  previewImage: '/assets/cclogo-preview.png',
  instagramHandle: 'calmcactusgoods',
  instagramURL: 'https://www.instagram.com/calmcactusgoods/',
  twitterHandle: '@calmcactusgoods',
  twitterURL: 'https://twitter.com/calmcactusgoods',
  etsyURL: 'https://www.etsy.com/shop/calmcactusgoods',
}

const colors = {
  'canary yellow': 'canary',
  coral: 'coral',
  'salt blue': 'salt-blue',
}

const listingToColor = listing => {
  for (const tag of listing.tags) {
    if (colors.hasOwnProperty(tag)) {
      return colors[tag]
    }
  }
  const colorValues = Object.values(colors)
  return colorValues[
    (listing.title.length + listing.description.length + listing.tags.length) %
      colorValues.length
  ]
}

const mapListingImage = ({ url_fullxfull }) => ({
  src: url_fullxfull ?? null,
})

const mapListingToProduct = listing => ({
  color: listingToColor(listing),
  description: listing.description,
  id: listing.listing_id.toString(),
  images: (listing.images ?? []).map(mapListingImage),
  label: listing.quantity > 0 ? 'In stock' : 'Sold out',
  slug: listing.url.slice(listing.url.lastIndexOf('/') + 1),
  subtitle: `$${listing.price.amount / listing.price.divisor} ${
    listing.materials.length > 0 ? '\u2014' : ''
  } ${listing.materials.join(', ')}`,
  title: listing.title,
  url: listing.url,
})

const fetchEtsyEndpoint = (apiKey, secret, shopID, path) =>
  fetch(`https://api.etsy.com${path}`, {
    headers: {
      'x-api-key': apiKey,
    },
  })
    .then(res =>
      res.ok
        ? res
        : Promise.reject(
            new Error(`(Etsy) Couldn't fetch ${path}. Response code ${res.status} (${res.statusText})`, {
              res,
            }),
          ),
    )
    .then(res => res.json())

export const fetchProduct = (apiKey, secret, shopID, productID) =>
  fetchEtsyEndpoint(
    apiKey,
    secret,
    shopID,
    `/v3/application/listings/${productID}?includes=images`,
  ).then(mapListingToProduct)

const fetchProductImages = (apiKey, secret, shopID, productID) =>
  fetchEtsyEndpoint(
    apiKey,
    secret,
    shopID,
    `/v3/application/shops/${shopID}/listings/${productID}/images`,
  ).then(data => data.results.map(mapListingImage))

export const fetchProducts = (apiKey, secret, shopID) =>
  fetchEtsyEndpoint(
    apiKey,
    secret,
    shopID,
    `/v3/application/shops/${shopID}/listings/active?limit=100`,
  ).then(data => data.results.map(mapListingToProduct))

export const fetchProductsWithImages = (apiKey, secret, shopID) =>
  fetchProducts(apiKey, secret, shopID).then(products =>
    // avoid rate limiting by spacing out requests with a delay
    series(
      ...products.map(product => async () => {
        let images = []
        try {
          await sleep(50)
          images = await fetchProductImages(apiKey, secret, shopID, product.id)
        } catch (err) {
          console.warn(
            'Failed to fetch images',
            {
              shopID,
              productID: product?.id,
            },
            err,
          )
        }
        return { ...product, images }
      }),
    ),
  )
