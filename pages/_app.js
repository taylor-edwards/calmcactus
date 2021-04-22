import { about, social } from 'data'
import { Head, Meta, PreviewImage, Title } from 'components/Helmet'
import 'styles/globals.scss'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="cache-control" content="public" />
      <meta name="format-detection" content="telephone=no" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, viewport-fit=cover"
      />
    </Head>
    <Title text={about.name} />
    <Meta name="application-name" content={about.name} />
    <Meta property="og:type" content="website" />
    <Meta name="twitter:domain" content={social.domain} />
    <Meta name="twitter:site" content={social.twitterHandle} />
    <Meta name="twitter:creator" content={social.twitterHandle} />
    <Meta name="theme-color" content={about.brandColor} />
    <Meta name="msapplication-TileColor" content={about.brandColor} />
    <PreviewImage src={social.previewImage} />
    <Component {...pageProps} />
  </>
)

export default App
