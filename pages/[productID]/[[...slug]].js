import { useRouter } from 'next/router'
import Page from 'partials/Page'
import { Title, PreviewImage, Meta, Description } from 'components/Helmet'
import ImageGrid from 'components/ImageGrid'
import Label from 'components/Label'
import ProductLabel from 'components/ProductLabel'
import Text from 'components/Text'
import styles from 'styles/product-page.module.scss'

export const getStaticProps = async ({ params: { productID } }) => {
  const etsyShopID = process.env.ETSY_SHOP_ID
  const etsyAPIKey = process.env.ETSY_API_KEY
  const etsySecret = process.env.ETSY_SECRET
  const { fetchProduct } = await require('data')
  const product = await fetchProduct(etsyAPIKey, etsySecret, etsyShopID, productID)
  return {
    props: { product },
    revalidate: 600, // 10 minutes
  }
}

export const getStaticPaths = async () => {
  const etsyShopID = process.env.ETSY_SHOP_ID
  const etsyAPIKey = process.env.ETSY_API_KEY
  const etsySecret = process.env.ETSY_SECRET
  const { fetchProducts } = await require('data')
  const products = await fetchProducts(etsyAPIKey, etsySecret, etsyShopID)
  return {
    fallback: 'blocking',
    paths: products.map(({ id, slug }) => ({ params: { productID: id, slug: [slug] } })),
  }
}

const INDEX_KEY = 'img'

const ProductPage = ({ product }) => {
  const { query, replace } = useRouter()
  const queryIndex = query[INDEX_KEY]
  const imageIndex =
    typeof queryIndex !== 'undefined' ? parseInt(queryIndex) : 0
  return (
    <Page color={product.color}>
      <Title text={`${product.title} | Calm Cactus`} />
      <PreviewImage src={product.images[0]?.src} />
      <Description text={product.description ?? ''} />
      <Meta property="og:type" content="product.item" />
      <Meta name="twitter:card" content="summary_large_image" />

      <div className={styles.wrapper}>
        <div className={styles.images}>
          <Label position="top left" className={styles.label}>
            {product.label}
          </Label>
          <ImageGrid
            images={product.images}
            selectedIndex={imageIndex}
            onSelect={i =>
              replace(`${location.pathname}?${INDEX_KEY}=${i}`, undefined, {
                scroll: false,
              })
            }
          />
        </div>

        <div className={styles.info}>
          <ProductLabel title={product.title} subtitle={product.subtitle} />

          <div className={styles.description}>
            <Text mode={Text.MODES.body}>
              {product.description ?? 'No description'}
            </Text>
          </div>

          <ProductLabel
            title="Buy now"
            subtitle="Available on Etsy.com"
            href={product.url}
          />
        </div>
      </div>
    </Page>
  )
}

export default ProductPage
