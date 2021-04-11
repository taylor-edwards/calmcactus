import { forwardRef } from 'react'
import { cn } from 'utils'
import styles from './image.module.scss'

const Image = ({ alt = '', className, src, ...props }, ref) => (
  <img
    alt={alt}
    className={cn(styles.image, className)}
    ref={ref}
    src={src}
    {...props}
  />
)

export default forwardRef(Image)
