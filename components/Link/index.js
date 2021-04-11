import { forwardRef } from 'react'
import { cn } from 'utils'
import styles from './link.module.scss'

const Link = (
  { href, children, className, noStyles = false, ...props },
  ref,
) => (
  <a
    href={href}
    className={cn({ [styles.link]: !noStyles }, className)}
    ref={ref}
    {...props}
  >
    {children}
  </a>
)

export default forwardRef(Link)
