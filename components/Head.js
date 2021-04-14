import NextHead from 'next/head'

const Head = ({ children, ...props }) => (
  <NextHead {...props}>{children}</NextHead>
)

export default Head
