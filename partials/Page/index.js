import { cn } from 'utils'
import Image from 'components/Image'
import Nav from 'components/Nav'
import styles from './page.module.scss'

const Page = ({ children, className, ...props }) => (
  <div className={cn(styles.page, className)} {...props}>
    <Nav />
    {children}
    <Image src="/assets/cclogoicon.svg" className={styles.icon} />
  </div>
)

export default Page
