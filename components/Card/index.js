import { cn } from 'utils'
import styles from './card.module.css'

const Card = ({ children, className, ...props }) => (
  <div className={cn(styles.wrapper, className)} {...props}>
    {children}
  </div>
)

export default Card