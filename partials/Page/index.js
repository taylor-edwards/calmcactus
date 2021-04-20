import { cn } from 'utils'
import Colorize from 'components/Colorize'
import Icon from 'components/Icon'
import Nav from 'components/Nav'
import styles from './page.module.scss'

const Page = ({ children, className, color, ...props }) => (
  <div className={cn(styles.page, className)} {...props}>
    <Colorize color={color}>
      <Nav inheritColor={color === 'inherit'} />
      <main>{children}</main>
      <Icon
        name="eye"
        className={cn(styles.icon, { [styles.inherit]: color === 'inherit' })}
        size={65}
      />
    </Colorize>
  </div>
)

export default Page
