import type { MetadataRoute } from 'next'
import process from 'node:process'
import { getBlogPosts } from '@/lib/post'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogPosts()

  return posts.map(post => ({
    url: `${process.env.BASE_URL}/blog/${post.metadata.category}/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))
}
