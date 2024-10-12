import { getTopCategories } from '@/lib/post'
import { unstable_noStore } from 'next/cache'
import Link from 'next/link'
import { Button } from '../ui/button'

export default async function TopCategories() {
  unstable_noStore()

  const topCategories = await getTopCategories()

  return (
    <section className="space-y-2">
      <h2 className="font-semibold">TOP CATEGORIES</h2>
      <nav className="grid grid-cols-3 gap-3">
        {topCategories?.map(({ category }) => (
          <Button
            key={category}
            variant="secondary"
            asChild
            className="hover:scale-110 transition-all"
          >
            <Link href={`/blog/${category}`}>{category}</Link>
          </Button>
        ))}
      </nav>
    </section>
  )
}
