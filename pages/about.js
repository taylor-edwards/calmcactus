import Page from 'partials/Page'
import Head from 'components/Head'
import Image from 'components/Image'
import Link from 'components/Link'
import ProductLabel from 'components/ProductLabel'
import Text from 'components/Text'
import styles from 'styles/about-page.module.scss'

export const getStaticProps = async () => ({
  props: await require('data').about,
})

const About = ({ contactEmail, title, body, imageSrc }) => (
  <Page>
    <Head>
      <title>About | Calm Cactus</title>
    </Head>
    <div className={styles.content}>
      <Image src={imageSrc} className={styles.image} />

      <div>
        <ProductLabel title={title} />
        <Text className={styles.description} mode={Text.MODES.body}>
          {body}
          <br />
          <br />
          If you have questions or concerns, please email us at{' '}
          <Link href={`mailto:${contactEmail}`} className={styles.link}>
            {contactEmail}
          </Link>
          <br />
          <br />
          Thanks for the support and have fun :)
        </Text>
      </div>
    </div>
  </Page>
)

export default About
