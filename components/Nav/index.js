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
      <Link className={styles.link} href="/about">
        <Text mode={Text.MODES.heading} allCaps>About</Text>
      </Link>
      <Link className={styles.link} href="/about">
        <Text mode={Text.MODES.heading} allCaps>Twitter</Text>
      </Link>
      <Link className={styles.link} href="/about">
        <Text mode={Text.MODES.heading} allCaps>Instagram</Text>
      </Link>
    </div>
  </nav>
)

export default Nav
