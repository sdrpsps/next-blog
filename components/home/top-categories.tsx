import { categories } from '@/lib/placeholder-data'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function TopCategories() {
  return (
    <section className="space-y-2">
      <h2 className="font-semibold">TOP CATEGORIES</h2>
      <nav className="grid grid-cols-3 gap-3">
        {categories.map(category => (
          <Button
            key={category}
            variant="secondary"
            asChild
            className="hover:scale-110 transition-all"
          >
            <Link href={`/categories/${category}`}>{category}</Link>
          </Button>
        ))}
      </nav>
    </section>
  )
}
