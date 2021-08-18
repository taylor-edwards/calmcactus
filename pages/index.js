import Page from 'partials/Page'
import { Title } from 'components/Helmet'
import ProductCard from 'components/ProductCard'
import styles from 'styles/shop.module.scss'

export const getStaticProps = async () => {
  const etsyShopID = process.env.ETSY_SHOP_ID
  const etsyAPIKey = process.env.ETSY_API_KEY
  const etsySecret = process.env.ETSY_SECRET
  const { fetchProductsWithImages } = await require('data')
  const products = await fetchProductsWithImages(
    etsyAPIKey,
    etsySecret,
    etsyShopID,
  )
  return {
    props: { products },
    revalidate: 600, // 10 minutes
  }
}

const Shop = ({ products }) => (
  <Page>
    <Title text="Shop | Calm Cactus" />
    <div className={styles.products}>
      {products.map(product => (
        <ProductCard
          {...product}
          key={product.slug}
          href={`/${product.id}/${product.slug}`}
        />
      ))}
    </div>
  </Page>
)

export default Shop
