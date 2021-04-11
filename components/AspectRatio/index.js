import { cn } from 'utils'
import styles from './aspect-ratio.module.css'

const AspectRatio = ({ ratio, children, className, style = {}, ...props }) => (
  <div
    className={cn(styles.wrapper, className)}
    style={{ ...style, paddingTop: `${ratio * 100}%` }}
    {...props}
  >
    <div className={styles.content}>{children}</div>
  </div>
)

export default AspectRatio
