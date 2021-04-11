import { forwardRef } from 'react'
import { cn } from 'utils'
import styles from './card.module.scss'

const Card = ({ children, className, ...props }, ref) => (
  <div className={cn(styles.wrapper, className)} ref={ref} {...props}>
    {children}
  </div>
)

export default forwardRef(Card)
