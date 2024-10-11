import Breadcrumb from '@/components/breadcrumb'
import { formatDate, getBlogPosts } from '@/lib/post'
import { notFound } from 'next/navigation'

export default function Post({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find(post => post.slug === params.slug)

  if (!post) {
    // TODO: not found page
    notFound()
  }

  return (
    <main className="space-y-8">
      <Breadcrumb category={post?.metadata.category} title={post?.metadata.title} />
      <section className="space-y-2">
        <h1 className="text-3xl font-bold">{post?.metadata.title}</h1>
        <p className="text-sm text-gray-500">{formatDate(post?.metadata.publishedAt)}</p>
      </section>
      <article className="prose">{post?.content}</article>
    </main>
  )
}
