import { cn } from 'utils'
import styles from './link.module.css'

const Link = ({ href, children, className, noStyles = false }) => (
  <a href={href} className={cn({ [styles.link]: !noStyles }, className)}>
    {children}
  </a>
)

export default Link
