import { cn } from 'utils'
import Link from 'components/Link'
import Row from 'components/Row'
import Text from 'components/Text'
import styles from './product-label.module.scss'

const Div = ({ children, className }) => (
  <div className={className}>{children}</div>
)

const ProductLabel = ({ className, href, title, subtitle, ...props }) => {
  const Wrapper = href ? Link : Div
  return (
    <Row
      className={cn(styles.label, className, {
        [styles.link]: typeof href !== 'undefined',
      })}
      {...props}
    >
      <Wrapper href={href} className={Row.styles.grow} noStyles>
        {title && (
          <Text mode={Text.MODES.heading} className={styles.title}>
            {title}
          </Text>
        )}
        {subtitle && <Text mode={Text.MODES.caption}>{subtitle}</Text>}
      </Wrapper>
    </Row>
  )
}

export default ProductLabel
