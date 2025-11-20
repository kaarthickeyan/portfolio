import React, { useEffect } from 'react'

export default function SEO(): React.ReactNode {
  useEffect(() => {
    // Add structured data for person
    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Kaarthickeyan D',
      url: 'https://kaarthickeyan.com',
      email: 'kaarthickeyan.d@gmail.com',
      jobTitle: 'AI/ML Engineer',
      worksFor: {
        '@type': 'Organization',
        name: 'Freelance'
      },
      sameAs: [
        'https://github.com/kaarthickeyan',
        'https://www.linkedin.com/in/kaarthickeyan'
      ]
    }

    // Add structured data for website
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Kaarthickeyan D - AI/ML Engineer Portfolio',
      url: 'https://kaarthickeyan.com',
      creator: {
        '@type': 'Person',
        name: 'Kaarthickeyan D'
      }
    }

    // Create and append scripts
    const personScript = document.createElement('script')
    personScript.type = 'application/ld+json'
    personScript.textContent = JSON.stringify(personSchema)

    const websiteScript = document.createElement('script')
    websiteScript.type = 'application/ld+json'
    websiteScript.textContent = JSON.stringify(websiteSchema)

    // Update meta tags
    if (!document.querySelector('meta[name="description"]')) {
      const desc = document.createElement('meta')
      desc.name = 'description'
      desc.content = 'AI/ML Engineer specializing in solar systems optimization, emergency traffic routing, and data analytics. Portfolio showcasing projects and achievements.'
      document.head.appendChild(desc)
    }

    if (!document.querySelector('meta[name="keywords"]')) {
      const keywords = document.createElement('meta')
      keywords.name = 'keywords'
      keywords.content = 'AI, ML, Python, Computer Vision, Data Science, Solar AI, Traffic AI, Machine Learning Engineer'
      document.head.appendChild(keywords)
    }

    if (!document.querySelector('meta[name="author"]')) {
      const author = document.createElement('meta')
      author.name = 'author'
      author.content = 'Kaarthickeyan D'
      document.head.appendChild(author)
    }

    document.head.appendChild(personScript)
    document.head.appendChild(websiteScript)

    return () => {
      document.head.removeChild(personScript)
      document.head.removeChild(websiteScript)
    }
  }, [])

  return null
}
