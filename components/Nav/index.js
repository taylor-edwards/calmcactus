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
      <Link
        className={styles.link}
        href={social.etsyURL}
        inherit={inheritColor}
      >
        <Icon name="etsy" alt="Calm Cactus on Etsy" />
      </Link>
      <Link
        className={styles.link}
        href={social.twitterURL}
        inherit={inheritColor}
      >
        <Icon name="twitter" alt="Calm Cactus on Twitter" />
      </Link>
      <Link
        className={styles.link}
        href={social.instagramURL}
        inherit={inheritColor}
      >
        <Icon name="instagram" alt="Calm Cactus on Instagram" />
      </Link>
      <Link className={styles.link} href="/about" inherit={inheritColor}>
        <Text mode={Text.MODES.heading} allCaps>
          About
        </Text>
      </Link>
    </div>
  </nav>
)

export default Nav
