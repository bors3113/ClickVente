import Head from 'next/head'
import { useRouter } from 'next/router'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  article?: boolean
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
  noindex?: boolean
  canonical?: string
}

export default function SEO({
  title = 'ClickVente - Web & AI Automation Agency | Transform Your Business',
  description = 'Transform your business with cutting-edge web development and AI automation solutions. We help businesses scale faster with custom websites, AI chatbots, workflow automation, and lead generation tools. Get 3x more leads with our proven strategies.',
  keywords = [
    'web development',
    'AI automation',
    'chatbots',
    'workflow automation',
    'lead generation',
    'API integration',
    'business automation',
    'custom websites',
    'AI solutions',
    'digital transformation'
  ],
  image = '/og-image.jpg',
  article = false,
  publishedTime,
  modifiedTime,
  author = 'ClickVente Team',
  section,
  tags,
  noindex = false,
  canonical
}: SEOProps) {
  const router = useRouter()
  const baseUrl = 'https://clickvente.com'
  const currentUrl = canonical || `${baseUrl}${router.asPath}`
  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': article ? 'Article' : 'WebPage',
    headline: title,
    description: description,
    url: currentUrl,
    image: imageUrl,
    ...(article && {
      author: {
        '@type': 'Person',
        name: author
      },
      publisher: {
        '@type': 'Organization',
        name: 'ClickVente',
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/logo.png`
        }
      },
      ...(publishedTime && { datePublished: publishedTime }),
      ...(modifiedTime && { dateModified: modifiedTime }),
      ...(section && { articleSection: section }),
      ...(tags && { keywords: tags.join(', ') })
    })
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      
      {/* Robots */}
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="googlebot" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="ClickVente" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific Open Graph tags */}
      {article && (
        <>
          <meta property="article:author" content={author} />
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags && tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@clickvente" />
      <meta name="twitter:creator" content="@clickvente" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#CF7652" />
      <meta name="msapplication-TileColor" content="#CF7652" />
      <meta name="application-name" content="ClickVente" />
      <meta name="apple-mobile-web-app-title" content="ClickVente" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </Head>
  )
} 