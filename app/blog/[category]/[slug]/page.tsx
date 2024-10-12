import Breadcrumb from '@/components/breadcrumb'
import MDX from '@/components/mdx'
import { formatDate, getBlogPosts } from '@/lib/post'
import { notFound } from 'next/navigation'

export default function Post({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find(post => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="space-y-8">
      <Breadcrumb category={post?.metadata.category} title={post?.metadata.title} />
      <section className="space-y-2">
        <h1 className="text-3xl font-bold">{post?.metadata.title}</h1>
        <p className="text-sm text-gray-500">{formatDate(post?.metadata.publishedAt)}</p>
      </section>
      <article className="prose dark:prose-invert prose-code:before:hidden prose-code:after:hidden max-w-none">
        <MDX source={post?.content} />
      </article>
    </main>
  )
}
