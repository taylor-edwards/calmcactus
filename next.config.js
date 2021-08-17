module.exports = {
  poweredByHeader: false,
  images: {
    domains: ['calmcact.us', 'i.etsystatic.com'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'Content-Security-Policy',
            value: `default-src ${
              process.env === 'production' ? 'https' : 'http'
            }: 'unsafe-eval' 'unsafe-inline'; object-src 'none'`,
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'same-origin',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },
}
