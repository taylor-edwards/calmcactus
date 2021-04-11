import { forwardRef } from 'react'
import { cn } from 'utils'
import styles from './row.module.scss'

const Row = ({ className, children, ...props }, ref) => (
  <div className={cn(styles.row, className)} ref={ref} {...props}>
    {children}
  </div>
)

const HookedRow = forwardRef(Row)

HookedRow.styles = styles

export default HookedRow
