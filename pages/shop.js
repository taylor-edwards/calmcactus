import Page from 'partials/Page'
import ProductCard from 'components/ProductCard'
import styles from 'styles/shop.module.scss'

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
      <div className={styles.products}>
        {products.map(({ slug, ...product }) => (
          <ProductCard {...product} key={slug} href={`/shop/${slug}`} />
        ))}
      </div>
    </main>
  </Page>
)

export default Shop