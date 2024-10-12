import { popularPosts } from '@/lib/placeholder-data'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function PopularPosts() {
  return (
    <section className="sticky top-0 space-y-2">
      <h2 className="font-semibold">POPULAR POSTS</h2>
      <ul className="space-y-2">
        {popularPosts.map(post => (
          <li key={post.title} className="max-w-sm overflow-hidden">
            <Link href={`/blog/${post.metadata.category}/${post.slug}`} className="flex items-center gap-2 group">
              <ArrowRight className="flex-shrink-0 w-4 h-4 group-hover:translate-x-1 transition-all" />
              <span className="truncate">{post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
