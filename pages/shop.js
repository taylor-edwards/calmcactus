import Page from 'partials/Page'
import Grid from 'components/Grid'
import ProductCard from 'components/ProductCard'

const products = [
  {
    title: 'GROW THROW',
    label: 'Sold out',
    subtitle: 'Throw blanket. Made in NY',
    slug: 'grow-throw',
    color: 'coral',
  },
  {
    title: 'ARTWORK NAME',
    label: '$120',
    subtitle: 'Materials used. Contributions',
    slug: 'artwork1',
    color: 'canary',
  },
  {
    title: 'ARTWORK NAME',
    label: '$10',
    subtitle: 'Materials used. Contributions',
    slug: 'artwork2',
    color: 'saltBlue',
  },
  {
    title: 'ARTWORK NAME',
    label: '$50',
    subtitle: 'Materials used. Contributions',
    slug: 'artwork3',
    color: 'saltBlue',
  },
  {
    title: 'ARTWORK NAME',
    label: 'Coming soon',
    subtitle: 'Materials used. Contributions',
    slug: 'artwork4',
    color: 'coral',
  },
  {
    title: 'ARTWORK NAME',
    label: '$25',
    subtitle: 'Materials used. Contributions',
    slug: 'artwork5',
    color: 'canary',
  },
]

const Shop = () => (
  <Page>
    <main>
      <Grid
        style={{
          '--size': 'calc(33% - 28px)',
          '--columns': '3',
        }}
      >
        {products.map(({ slug, ...product }) => (
          <ProductCard key={slug} href={`/shop/${slug}`} {...product} />
        ))}
      </Grid>
    </main>
  </Page>
)

export default Shop
