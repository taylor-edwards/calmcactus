import { cn } from 'utils'
import { social } from 'data'
import Icon from 'components/Icon'
import Link from 'components/Link'
import Text from 'components/Text'
import styles from './nav.module.scss'

const Nav = ({ className, inheritColor }) => (
  <nav className={cn(styles.nav, className)}>
    <Link href="/" inherit={inheritColor}>
      <Icon
        alt="Calm Cactus"
        className={styles.logo}
        name="cclogo"
        size={100}
      />
    </Link>
    <div className={styles.links}>
      <Link className={styles.link} href="/shop" inherit={inheritColor}>
        <Text mode={Text.MODES.heading} allCaps>
          Shop
        </Text>
      </Link>
      <Link className={styles.link} href="/about" inherit={inheritColor}>
        <Text mode={Text.MODES.heading} allCaps>
          About
        </Text>
      </Link>
      <Link
        className={styles.link}
        href={social.instagram}
        inherit={inheritColor}
      >
        <Icon name="instagram" alt="Calm Cactus on Instagram" />
      </Link>
      <Link
        className={styles.link}
        href={social.twitter}
        inherit={inheritColor}
      >
        <Icon name="twitter" alt="Calm Cactus on Twitter" />
      </Link>
    </div>
  </nav>
)

export default Nav
