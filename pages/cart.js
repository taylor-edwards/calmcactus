import { cn } from 'utils'
import Page from 'partials/Page'
import CartItem from 'components/CartItem'
import Colorize from 'components/Colorize'
import ProductLabel from 'components/ProductLabel'
import styles from 'styles/cart-page.module.scss'

export const getStaticProps = async () => {
  const { products } = await require('data')
  return {
    props: {
      products: [products[2], products[1], products[4]].map(product => [
        product,
        0,
      ]),
    },
  }
}

const Cart = ({ products }) => (
  <Page>
    <div className={styles.grid}>
      <Colorize color="canary">
        <ProductLabel
          title="3 items in cart"
          subtitle="Total before shipping & taxes: $175"
        />
      </Colorize>
      <Colorize color="salt-blue">
        <ProductLabel
          title="Continue to Shipping & Payment"
          href="/shop/checkout"
        />
      </Colorize>
    </div>

    <div className={cn(styles.grid, styles.content)}>
      {products.map(([product, quantity]) => (
        <CartItem key={product.slug} product={product} quantity={quantity} />
      ))}
    </div>
  </Page>
)

export default Cart
