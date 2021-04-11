import { forwardRef } from 'react'
import { cn } from 'utils'
import styles from './colorize.module.scss'

const styleByColor = color => styles[color] ?? styles.coral

const Colorize = ({ className, children, color, ...props }, ref) => (
  <div className={cn(styleByColor(color), className)} ref={ref} {...props}>
    {children}
  </div>
)

export default forwardRef(Colorize)
