import { getPopularPosts } from '@/lib/post'
import { ArrowRight } from 'lucide-react'
import { unstable_noStore } from 'next/cache'
import Link from 'next/link'
import { Suspense } from 'react'

export default async function PopularPosts() {
  unstable_noStore()

  const popularPosts = await getPopularPosts()

  return (
    <section className="sticky top-0 space-y-2">
      <h2 className="font-semibold">POPULAR POSTS</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <ul className="space-y-2">
          {popularPosts?.map(post => (
            <li key={post.title} className="max-w-sm overflow-hidden">
              <Link href={`/blog/${post.category}/${post.slug}`} className="flex items-center gap-2 group">
                <ArrowRight className="flex-shrink-0 w-4 h-4 group-hover:translate-x-1 transition-all" />
                <span className="truncate">{post.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Suspense>
    </section>
  )
}
