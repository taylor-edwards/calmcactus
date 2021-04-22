import Page from 'partials/Page'
import { Title } from 'components/Helmet'
import ProductCard from 'components/ProductCard'
import styles from 'styles/shop.module.scss'

export const getStaticProps = async () => ({
  props: { products: await require('data').products },
})

const Shop = ({ products }) => (
  <Page color="inherit">
    <Title text="Shop | Calm Cactus" />
    <div className={styles.products}>
      {products.map(({ slug, ...product }) => (
        <ProductCard {...product} key={slug} href={`/shop/${slug}`} />
      ))}
    </div>
  </Page>
)

export default Shop
