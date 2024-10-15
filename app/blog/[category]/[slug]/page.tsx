import process from 'node:process'
import Breadcrumb from '@/components/breadcrumb'
import MDX from '@/components/mdx/mdx'
import TableOfContents from '@/components/post/table-of-contents'
import UpdateViews from '@/components/post/update-views'
import { formatDate, getBlogPosts, getHeadings } from '@/lib/post'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  const posts = getBlogPosts()

  return posts.map(post => ({
    category: post.metadata.category,
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find(post => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return {
    title: post.metadata.title,
    description: post.metadata.summary,
    openGraph: {
      type: 'article',
      publishedTime: post.metadata.publishedAt,
      title: post.metadata.title,
      description: post.metadata.summary,
      url: `${process.env.BASE_URL}/blog/${post.metadata.category}/${post.slug}`,
      images: [post.metadata.cover],
    },
  }
}

export default async function Post({ params }: { params: { slug: string } }) {
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
      <div className="flex justify-between gap-10">
        <article className="prose dark:prose-invert prose-code:before:hidden prose-code:after:hidden max-w-none">
          <MDX source={post?.content} />
        </article>
        <aside className="hidden md:block w-1/5 sticky top-20 max-h-screen flex-shrink-0">
          <TableOfContents headings={getHeadings(post?.content)} />
        </aside>
      </div>
      <UpdateViews slug={post?.slug} title={post?.metadata.title} cover={post?.metadata.cover} category={post?.metadata.category} />
    </main>
  )
}
