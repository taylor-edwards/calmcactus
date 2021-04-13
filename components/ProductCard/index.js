import { cn } from 'utils'
import AspectRatio from 'components/AspectRatio'
import Card from 'components/Card'
import Colorize from 'components/Colorize'
import Image from 'components/Image'
import Label from 'components/Label'
import Link from 'components/Link'
import Row from 'components/Row'
import Text from 'components/Text'
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
      <Card className={styles.image}>
        <AspectRatio ratio={1}>
          {images.length > 0 && (
            <Image src={images[0].src} className={styles.content} />
          )}
        </AspectRatio>
      </Card>
    </Link>
    <Row className={styles.label}>
      <Link href={href} className={Row.styles.grow} noStyles>
        {title && <Text mode={Text.MODES.heading} className={styles.title}>{title}</Text>}
        {subtitle && (
          <Text mode={Text.MODES.caption} className={styles.subtitle}>
            {subtitle}
          </Text>
        )}
      </Link>
      <Link className={styles.buyBtn}>Buy</Link>
    </Row>
    {label && <Label position="top right">{label}</Label>}
  </Colorize>
)

export default ProductCard
