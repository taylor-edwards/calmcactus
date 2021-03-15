import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Calm Cactus</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Calm Cactus
        </h1>

        <p className={styles.description}>
          Coming soon...
        </p>
      </main>
    </div>
  )
}
