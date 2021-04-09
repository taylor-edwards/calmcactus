import Page from 'partials/Page'
import ImageGrid from 'components/ImageGrid'
import Text from 'components/Text'
import { products } from 'data'
import styles from 'styles/product-page.module.scss'

export const getStaticProps = ({ params: { product } }) => {
  return {
    props: {
      product: products.find(({ slug }) => slug === product),
    },
  }
}

export const getStaticPaths = () => {
  return {
    paths: products.map(({ slug }) => ({ params: { product: slug } })),
    fallback: false,
  }
}

const ProductPage = ({ product }) => (
  <Page>
    <div className={styles.wrapper}>
      <ImageGrid images={product.images} className={styles.images} />
      <div>
        <Text element="h1" mode={Text.MODES.heading}>
          {product.title}
        </Text>
        <Text element="p">{product.subtitle}</Text>

        <Text mode={Text.MODES.subheading} allCaps>
          Limited stock
        </Text>

        <Text mode={Text.MODES.body}>
          {product.description ?? 'Missing description'}
        </Text>
      </div>
    </div>
  </Page>
)

export default ProductPage
