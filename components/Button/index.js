import { forwardRef } from 'react'
import { cn } from 'utils'
import styles from './button.module.scss'

const Button = (
  { children, className, type = 'button', noStyles = false, ...props },
  ref,
) => (
  <button
    type={type}
    ref={ref}
    className={cn({ [styles.wrapper]: !noStyles }, className)}
    {...props}
  >
    {children}
  </button>
)

export default forwardRef(Button)
