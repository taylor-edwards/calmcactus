import { forwardRef } from 'react'
import { cn } from 'utils'
import styles from './link.module.scss'

const Link = (
  { href, children, className, noStyles = false, target, ...props },
  ref,
) => (
  <a
    className={cn({ [styles.link]: !noStyles }, className)}
    href={href}
    ref={ref}
    rel="noreferrer"
    target={target ?? /^(\/|\?)/.test(href) ? '_self' : '_blank'}
    {...props}
  >
    {children}
  </a>
)

export default forwardRef(Link)
