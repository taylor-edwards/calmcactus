import Page from 'partials/Page'
import { products } from 'data'

export const getStaticProps = ({ params: { product } }) => {
  return {
    props: {
      product,
    },
  }
}

export const getStaticPaths = () => {
  return {
    paths: products.map(({ slug }) => ({ params: { product: slug } })),
    fallback: false,
  }
}

const ProductPage = ({ product }) => {
  return <Page>Product page: {product}</Page>
}

export default ProductPage
