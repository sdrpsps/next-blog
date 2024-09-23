import { getPosts } from '@/lib/post'
import Link from 'next/link'

export const metadata = {
  title: 'Posts',
}

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id} className="mb-4 last:mb-0">
          <time
            className="italic pr-2"
            dateTime={post.createdAt.toISOString()}
          >
            {post.createdAt.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }).replace(/(\d+)(st|nd|rd|th)/, '$1')}
          </time>
          <Link href={`/posts/${post.slug}`} className="link">
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
