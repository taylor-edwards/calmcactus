import Icon from 'components/Icon'
import styles from 'styles/home.module.scss'

const Home = () => (
  <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>
        <Icon name="cclogo" alt="Calm Cactus" size={300} />
      </h1>

      <p className={styles.description}>See you soon</p>
      <p className={styles.smiley}>&#9787;</p>
    </main>
  </div>
)

export default Home
