import { cn } from 'utils'
import styles from './row.module.scss'

const Row = ({ className, children, ...props  })  => (
    <div className={cn(styles.row, className)} {...props}>
        {children}
    </div>
)

Row.styles = styles

export default Row
