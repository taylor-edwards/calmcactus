import { cn } from 'utils'
import AspectRatio from 'components/AspectRatio'
import Colorize from 'components/Colorize'
import Image from 'components/Image'
import Label from 'components/Label'
import ProductLabel from 'components/ProductLabel'
import styles from './cart-item.module.scss'

const CartItem = ({ className, product }) => (
  <Colorize color={product.color} className={cn(styles.wrapper, className)}>
    <div>
      <div className={styles.image}>
        <AspectRatio ratio="1">
          <Image src={product.images[0]?.src} />
        </AspectRatio>
      </div>
    </div>
    <div className={styles.content}>
      <div>
        <Label>{product.label}</Label>
        </div>
      <ProductLabel title={product.title} subtitle={product.subtitle} />
    </div>
  </Colorize>
)

export default CartItem
