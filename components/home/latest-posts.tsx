import { formatDate, getBlogPosts } from '@/lib/post'
import Link from 'next/link'
import PostCard from '../post/post-card'

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
        }).map(post => <PostCard className="max-w-md" key={post.slug} post={post} />)
      }
    </div>
  )
}
