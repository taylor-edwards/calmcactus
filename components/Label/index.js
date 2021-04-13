import { cn } from 'utils'
import Text from 'components/Text'
import styles from './label.module.scss'

const Label = ({ children, className, position, ...props }) => (
  <div
    className={cn(styles.wrapper, className)}
    data-position={position}
    {...props}
  >
    <Text mode={Text.MODES.heading} allCaps>
      {children}
    </Text>
  </div>
)

export default Label
