import Head from 'next/head'
import Image from 'components/Image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Calm Cactus</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Image src="/assets/cclogo.svg" alt="Calm Cactus" />
        </h1>

        <p className={styles.description}>
          See you soon
        </p>
        <p className={styles.smiley}>&#9787;</p>
      </main>
    </div>
  )
}
