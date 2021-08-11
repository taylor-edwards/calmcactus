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

const buildEtsyEndpoint = shopID =>
  `https://api.etsy.com/v3/application/shops/${shopID}`

const isOkay = res =>
  res.ok ? res : Promise.reject(new Error('Response not ok'))

export const fetchProductImages = (shopID, productID, apiKey, secret) =>
  fetch(`${buildEtsyEndpoint(shopID)}/listings/${productID}/images`, {
    headers: {
      'x-api-key': apiKey,
    },
  })
    .then(isOkay)
    .then(res => res.json())
    .then(data =>
      data.results.map(listingImage => ({
        src: listingImage.url_fullxfull,
      })),
    )

export const fetchProducts = (shopID, apiKey, secret) =>
  fetch(`${buildEtsyEndpoint(shopID)}/listings/active?limit=100`, {
    headers: {
      'x-api-key': apiKey,
    },
  })
    .then(isOkay)
    .then(res => res.json())
    .then(data =>
      // avoid rate limiting by performing batch requests serially with a delay
      series(
        ...data.results.map(listing => async () => {
          let images = []
          try {
            await sleep(500)
            images = await fetchProductImages(
              shopID,
              listing.listing_id,
              apiKey,
              secret,
            )
          } catch (err) {
            console.warn('Failed to fetch images', {
              shopID,
              listingID: listing?.listing_id,
            })
          }
          return {
            images,
            title: listing.title,
            label: listing.quantity > 0 ? 'In stock' : 'Sold out',
            subtitle: `$${listing.price.amount / listing.price.divisor} ${
              listing.materials.length > 0 ? '\u2014' : ''
            } ${listing.materials.join(', ')}`,
            slug: listing.url.slice(listing.url.lastIndexOf('/') + 1),
            url: listing.url,
            color: listingToColor(listing),
            description: listing.description,
          }
        }),
      ),
    )
