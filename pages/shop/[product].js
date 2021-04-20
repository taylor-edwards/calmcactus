import Page from 'partials/Page'
import Head from 'components/Head'
import ImageGrid from 'components/ImageGrid'
import Label from 'components/Label'
import ProductLabel from 'components/ProductLabel'
import Text from 'components/Text'
import styles from 'styles/product-page.module.scss'

export const getStaticProps = async ({ params: { product } }) => {
  const { products } = await require('data')
  return {
    props: {
      product: products.find(({ slug }) => slug === product),
    },
  }
}

export const getStaticPaths = async () => {
  const { products } = await require('data')
  return {
    fallback: false,
    paths: products.map(({ slug }) => ({ params: { product: slug } })),
  }
}

const ProductPage = ({ product }) => (
  <Page color={product.color}>
    <Head>
      <title>{product.title} | Calm Cactus</title>
    </Head>
    <div className={styles.wrapper}>
      <div className={styles.images}>
        <Label position="top left" className={styles.label}>
          {product.label}
        </Label>
        <ImageGrid images={product.images} />
      </div>

      <div className={styles.info}>
        <ProductLabel title={product.title} subtitle={product.subtitle} />

        <div className={styles.description}>
          <Text mode={Text.MODES.body}>
            {product.description ?? 'No description'}
          </Text>
        </div>

        <ProductLabel
          title="Continue to checkout"
          subtitle="You have 5 items in your cart"
          href="/shop/checkout"
        />
      </div>
    </div>
  </Page>
)

export default ProductPage
