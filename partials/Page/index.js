import { cn } from 'utils'
import Icon from 'components/Icon'
import Nav from 'components/Nav'
import styles from './page.module.scss'

const Page = ({ children, className, ...props }) => (
  <div className={cn(styles.page, className)} {...props}>
    <Nav />
    {children}
    <Icon name="eye" className={styles.icon} size={65} />
  </div>
)

export default Page
