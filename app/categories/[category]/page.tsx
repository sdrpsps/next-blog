import PostCard from '@/components/post-card'
import { getBlogPosts } from '@/lib/post'
import { notFound } from 'next/navigation'

export default function Categories({ params }: { params: { category: string } }) {
  const posts = getBlogPosts().filter(post => post.metadata.category === params.category)

  if (!posts.length) {
    // TODO: not found page
    notFound()
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">{params.category.toUpperCase()}</h1>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
