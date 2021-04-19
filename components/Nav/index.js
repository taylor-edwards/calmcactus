import { cn } from 'utils'
import { social } from 'data'
import Icon from 'components/Icon'
import Link from 'components/Link'
import Text from 'components/Text'
import styles from './nav.module.scss'

const Nav = ({ className }) => (
  <nav className={cn(styles.nav, className)}>
    <Link href="/">
      <Icon name="cclogo" alt="Calm Cactus" className={styles.logo} size={100} />
    </Link>
    <div className={styles.links}>
      <Link className={styles.link} href="/shop">
        <Text mode={Text.MODES.heading} allCaps>Shop</Text>
      </Link>
      <Link className={styles.link} href="/about">
        <Text mode={Text.MODES.heading} allCaps>About</Text>
      </Link>
      <Link className={styles.link} href={social.instagram}>
        <Icon name="instagram" alt="Calm Cactus on Instagram" />
      </Link>
      <Link className={styles.link} href={social.twitter}>
        <Icon name="twitter" alt="Calm Cactus on Twitter" />
      </Link>
    </div>
  </nav>
)

export default Nav
