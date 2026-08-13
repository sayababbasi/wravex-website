import { MetadataRoute } from 'next'
import { services } from '@/data/services'
import { projects } from '@/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://axiorasoftware.it.com'

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/solutions',
    '/careers',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic Service routes
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.7,
  }))

  // Dynamic Project routes
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes]
}
