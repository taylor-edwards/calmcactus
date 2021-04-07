import { cn } from 'utils'
import styles from './grid.module.scss'

const Grid = ({ children, className, ...props }) => (
  <div className={cn(styles.grid, className)} {...props}>
    {children}
  </div>
)

export default Grid
