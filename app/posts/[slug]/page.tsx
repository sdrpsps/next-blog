import { getPostBySlug } from '@/lib/post'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }) {
  const post = await getPostBySlug(slug)

  return {
    title: post?.title,
  }
}

export default async function PostPage({ params: { slug } }: { params: { slug: string } }) {
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </>
  )
}
