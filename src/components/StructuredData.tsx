export function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'APPLAKE PRIVATE LIMITED',
    url: 'https://applake.in',
    email: 'techflakespvtltd@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ambernath',
      addressRegion: 'Maharashtra',
      addressCountry: 'India',
    },
    sameAs: ['https://www.linkedin.com', 'https://github.com', 'https://www.instagram.com'],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
