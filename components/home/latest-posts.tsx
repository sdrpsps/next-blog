import { formatDate, getBlogPosts } from '@/lib/post'
import Link from 'next/link'

export default function LatestPosts() {
  const posts = getBlogPosts()

  return (
    <div className="flex flex-col gap-10">
      {
        posts.sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1
          }
          return 1
        }).map(post => (
          <article key={post.slug} className="text-wrap max-w-md">
            <Link href={`/posts/${post.slug}`}>
              <h3 className="font-bold py-2 leading-5 hover:text-blue-500">
                {post.metadata.title}
              </h3>
            </Link>
            <p className="leading-8 my-5">{post.metadata.summary}</p>
            <p className="text-sm text-muted-foreground">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </article>
        ))
      }
    </div>
  )
}
