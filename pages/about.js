import Page from 'partials/Page'
import { Description, PreviewImage, Title } from 'components/Helmet'
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
    <Title text="About | Calm Cactus" />
    <Description text={`${body.slice(0, 100)} ...`} />
    <PreviewImage src={imageSrc} />
    <div className={styles.content}>
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
  </Page>
)

export default About
