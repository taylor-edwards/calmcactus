import Page from 'partials/Page'
import { Title } from 'components/Helmet'
import ProductCard from 'components/ProductCard'
import styles from 'styles/shop.module.scss'

export const getStaticProps = async () => {
  const etsyShopID = process.env.ETSY_SHOP_ID
  const etsyAPIKey = process.env.ETSY_API_KEY
  const etsySecret = process.env.ETSY_SECRET
  const { fetchProducts } = await require('data')
  const products = await fetchProducts(etsyShopID, etsyAPIKey, etsySecret)
  return {
    props: { products },
  }
}

const Shop = ({ products }) => (
  <Page>
    <Title text="Shop | Calm Cactus" />
    <div className={styles.products}>
      {products.map(({ slug, ...product }) => (
        <ProductCard {...product} key={slug} href={`/${slug}`} />
      ))}
    </div>
  </Page>
)

export default Shop
