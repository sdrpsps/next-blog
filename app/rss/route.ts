import process from 'node:process'
import { getBlogPosts } from '@/lib/post'

export async function GET() {
  const posts = getBlogPosts()

  const xml = posts.map((post) => {
    return `
      <item>
        <title>${post.metadata.title}</title>
        <description>${post.metadata.summary}</description>
        <link>${process.env.BASE_URL}/blog/${post.metadata.category}/${post.slug}</link>
        <pubDate>${post.metadata.publishedAt}</pubDate>
      </item>
    `
  }).join('\n')

  const rss = `
    <rss version="2.0">
      <channel>
        <title>Sunny's Blog</title>
        <description>Sunny's Blog RSS Feed</description>
        <link>${process.env.BASE_URL}</link>
        ${xml}
      </channel>
    </rss>
  `

  return new Response(rss, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
