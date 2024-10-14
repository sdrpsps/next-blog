import type { Post } from './types'
import PostCard from '@/components/post/post-card'
import { getBlogPosts } from '@/lib/post'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return getBlogPosts().map(post => ({ category: post.metadata.category }))
}

export async function generateMetadata({ params }: { params: { category: string } }) {
  const categories = getBlogPosts().map(post => post.metadata.category)

  if (!categories.includes(params.category)) {
    notFound()
  }

  return {
    title: `${params.category.toUpperCase()}`,
    description: `Articles about ${params.category}`,
  }
}

export default function Category({ params }: { params: { category: string } }) {
  const posts = getBlogPosts().filter(post => post.metadata.category === params.category) as Post[]

  if (!posts.length) {
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
