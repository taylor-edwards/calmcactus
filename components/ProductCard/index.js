import { cn } from 'utils'
import AspectRatio from 'components/AspectRatio'
import Card from 'components/Card'
import Colorize from 'components/Colorize'
import Image from 'components/Image'
import Link from 'components/Link'
import Row from 'components/Row'
import Text from 'components/Text'
import styles from './product-card.module.scss'

const ProductCard = ({
  className,
  color,
  children,
  href,
  imageSrc,
  label,
  title,
  subtitle,
}) => (
  <Colorize className={cn(styles.wrapper, className)} color={color}>
    <Link href={href} title={title}>
      <Card className={styles.image}>
        <AspectRatio ratio={1}>
          {!!imageSrc && <Image src={imageSrc} className={styles.content} />}
          {!imageSrc && <div className={styles.content}>{children}</div>}
        </AspectRatio>
      </Card>
    </Link>
    <Row className={styles.label}>
      <Link href={href} className={cn(styles.link, Row.styles.grow)}>
        {title && <Text mode={Text.MODES.heading}>{title}</Text>}
        {subtitle && (
          <Text mode={Text.MODES.caption} className={styles.subtitle}>
            {subtitle}
          </Text>
        )}
      </Link>
      <Link className={styles.buyBtn}>Buy</Link>
    </Row>
    {label && <Text mode={Text.MODES.heading} allCaps className={styles.offsetLabel}>{label}</Text>}
  </Colorize>
)

export default ProductCard
