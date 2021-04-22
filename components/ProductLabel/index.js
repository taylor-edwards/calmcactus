import { cn } from 'utils'
import Link from 'components/Link'
import Text from 'components/Text'
import styles from './product-label.module.scss'

const Div = ({ children, className }) => (
  <div className={className}>{children}</div>
)

const ProductLabel = ({ className, href, subtitle, title }) => {
  const hasHref = typeof href !== 'undefined'
  const Wrapper = hasHref ? Link : Div
  return (
    <Wrapper
      href={href}
      className={cn(styles.label, className, {
        [styles.link]: hasHref,
      })}
      noStyles
    >
      {title && (
        <Text mode={Text.MODES.heading} className={styles.title}>
          {title}
        </Text>
      )}
      {subtitle && <Text mode={Text.MODES.caption}>{subtitle}</Text>}
    </Wrapper>
  )
}

export default ProductLabel
