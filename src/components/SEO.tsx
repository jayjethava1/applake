import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { buildMetaTags } from '../utils/seo'

type SEOProps = {
  title: string
  description: string
  canonical?: string
}

export function SEO({ title, description, canonical }: SEOProps) {
  const location = useLocation()

  useEffect(() => {
    const tags = buildMetaTags(title, description, canonical ?? `https://applake.in${location.pathname}`)
    document.title = tags.title
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) metaDescription.setAttribute('content', tags.description)
    const canonicalTag = document.querySelector('link[rel="canonical"]')
    if (canonicalTag) canonicalTag.setAttribute('href', tags.canonical)
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', tags.ogTitle)
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) ogDescription.setAttribute('content', tags.ogDescription)
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) twitterTitle.setAttribute('content', tags.ogTitle)
    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    if (twitterDescription) twitterDescription.setAttribute('content', tags.ogDescription)
  }, [canonical, description, location.pathname, title])

  return null
}
