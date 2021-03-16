import { cn } from 'utils'
import Card from 'components/Card'
import Image from 'components/Image'
import Link from 'components/Link'
import styles from './productCard.module.css'

const ProductCard = ({ className, children, href, imageSrc, title, subtitle }) => (
  <Card className={cn(styles.wrapper, className)}>
    <Link href={href} className={styles.link}>
      {!!imageSrc && <Image src={imageSrc} className={styles.content} />}
      {!imageSrc && <div className={styles.content}>{children}</div>}
      <div className={styles.label}>
        {title && <p className={styles.title}>{title}</p>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </Link>
  </Card>
)

export default ProductCard
