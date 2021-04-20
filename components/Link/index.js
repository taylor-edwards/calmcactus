import NextLink from 'next/link'
import { forwardRef } from 'react'
import { cn } from 'utils'
import styles from './link.module.scss'

const Link = (
  {
    children,
    className,
    href,
    inherit = false,
    noStyles = false,
    target,
    ...props
  },
  ref,
) => (
  <NextLink href={href}>
    <a
      className={cn(
        {
          [styles.link]: !noStyles,
          [styles.inherit]: inherit,
        },
        className,
      )}
      ref={ref}
      rel="noreferrer"
      target={target ?? /^(\/|\?)/.test(href) ? '_self' : '_blank'}
      {...props}
    >
      {children}
    </a>
  </NextLink>
)

export default forwardRef(Link)
