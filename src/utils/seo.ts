export const seoDefaults = {
  title: 'APPLAKE PRIVATE LIMITED | Building Scalable Digital Platforms',
  description: 'APPLAKE PRIVATE LIMITED builds scalable software, mobile apps, web platforms, and digital transformation solutions for modern businesses.',
  canonical: 'https://applake.in/',
  image: 'https://applake.in/og-image.png',
}

export function buildMetaTags(pageTitle: string, description: string, canonical: string) {
  return {
    title: `${pageTitle} | APPLAKE PRIVATE LIMITED`,
    description,
    canonical,
    ogTitle: `${pageTitle} | APPLAKE PRIVATE LIMITED`,
    ogDescription: description,
    ogType: 'website',
    twitterCard: 'summary_large_image',
  }
}
