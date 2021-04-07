import { cn } from 'utils'
import styles from './colorize.module.scss'

const styleByColor = (color) =>
  ({
    ...styles,
    undefined: styles.coral,
  }[color])

const Colorize = ({ className, children, color }) => (
  <div className={cn(styleByColor(color), className)}>{children}</div>
)

export default Colorize
