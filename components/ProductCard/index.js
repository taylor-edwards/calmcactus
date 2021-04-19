import { cn } from 'utils'
import AspectRatio from 'components/AspectRatio'
import Colorize from 'components/Colorize'
import Image from 'components/Image'
import Label from 'components/Label'
import Link from 'components/Link'
import ProductLabel from 'components/ProductLabel'
import styles from './product-card.module.scss'

const ProductCard = ({
  className,
  color,
  href,
  images,
  label,
  title,
  subtitle,
}) => (
  <Colorize className={cn(styles.wrapper, className)} color={color}>
    <Link href={href} title={title}>
      <div className={styles.image}>
        <AspectRatio ratio={1}>
          {images.length > 0 && (
            <Image src={images[0].src} className={styles.content} />
          )}
        </AspectRatio>
      </div>
    </Link>
    <ProductLabel
      className={styles.label}
      href={href}
      subtitle={subtitle}
      title={title}
    />
    {label && <Label position="top right">{label}</Label>}
  </Colorize>
)

export default ProductCard
