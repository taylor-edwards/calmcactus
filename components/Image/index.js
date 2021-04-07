import { cn } from 'utils'
import styles from './image.module.scss'

const Image = ({
  alt = '',
  className,
  src,
  ...props
}) => (
  <img
    {...props}
    alt={alt}
    className={cn(styles.image, className)}
    src={src}
  />
)

export default Image
