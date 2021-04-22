import NextHead from 'next/head'

export const Head = NextHead

/**
 * Use these components to ensure rendered elements are unique per
 * name/property within the document head.
 *
 * Make sure not to nest them components within <Head>. This is
 * due to a limitation of next/head being unable to parse components
 * nested within fragments.
 */

// must use one of {name, property}
export const Meta = ({ name, property, ...props }) => (
  <Head>
    <meta
      key={name ?? property}
      name={name}
      property={property}
      {...props}
    />
  </Head>
)

export const Title = ({ text }) => (
  <>
    <Head>
      <title>{text}</title>
    </Head>
    <Meta property="og:title" content={text} />
    <Meta name="twitter:title" content={text} />
  </>
)

export const Description = ({ text }) => (
  <>
    <Meta property="og:description" content={text} />
    <Meta name="twitter:description" content={text} />
  </>
)

export const PreviewImage = ({ src }) => (
  <>
    <Meta property="og:image" content={src} />
    <Meta name="twitter:image" content={src} />
  </>
)
