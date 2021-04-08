import { cn } from 'utils'
import Image from 'components/Image'
import Link from 'components/Link'
import Text from 'components/Text'
import styles from './nav.module.scss'

const Nav = ({ className }) => (
  <nav className={cn(styles.nav, className)}>
    <Link href="/">
      <Image src="/assets/cclogo.svg" alt="Calm Cactus" className={styles.logo} />
    </Link>
    <div className={styles.links}>
      <Link className={styles.link} href="/shop">
        <Text mode={Text.MODES.heading} allCaps>Shop</Text>
      </Link>
      <Link className={styles.link} href="/about">
        <Text mode={Text.MODES.heading} allCaps>About</Text>
      </Link>
      <Link className={styles.link} href="/about">
        <Image src="/assets/instagram.svg" alt="Calm Cactus on Instagram"/>
      </Link>
      <Link className={styles.link} href="/about">
        <Image src="/assets/twitter.svg" alt="Calm Cactus on Twitter"/>
      </Link>
    </div>
  </nav>
)

export default Nav
