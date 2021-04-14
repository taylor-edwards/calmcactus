import Head from 'components/Head'
import 'styles/globals.scss'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="cache-control" content="public" />
      <meta property="og:type" content="website" />
      <meta name="format-detection" content="telephone=no" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, viewport-fit=cover"
      />

      <title>Calm Cactus</title>
      <meta name="application-name" content="Calm Cactus" />
      <meta name="theme-color" content="#ff7f7f" />
      <meta name="msapplication-TileColor" content="#ff7f7f" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff7f7f" />
    </Head>
    <Component {...pageProps} />
  </>
)

export default App
