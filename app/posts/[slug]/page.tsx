import { getPostBySlug } from '@/lib/post'

export default async function PostPage({ params: { slug } }: { params: { slug: string } }) {
  const post = await getPostBySlug(slug)

  if (!post) {
    return <p>Post not found</p>
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </>
  )
}
