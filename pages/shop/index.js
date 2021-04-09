import Page from 'partials/Page'
import ProductCard from 'components/ProductCard'
import { products } from 'data'
import styles from 'styles/shop.module.scss'

const Shop = () => (
  <Page>
    <div className={styles.products}>
      {products.map(({ slug, ...product }) => (
        <ProductCard {...product} key={slug} href={`/shop/${slug}`} />
      ))}
    </div>
  </Page>
)

export default Shop
