import type { Post } from '@prisma/client'
import LoadingBar from '@/components/loading-bar'
import { getAvailableArchiveMonthsByYear, getAvailableArchiveYears, getPostsByYearAndMonth } from '@/lib/archive'
import Link from 'next/link'
import { Suspense } from 'react'

export async function generateMetadata({ params: { filters } }: { params: { filters: string[] } }) {
  const [year, month] = filters ?? []

  return {
    title: year && month ? `${year}-${month} Archive` : year ? `${year} Archive` : 'Archive',
  }
}

async function FilterHeader({ year, month }: { year?: string, month?: string }) {
  const availableYears = await getAvailableArchiveYears()
  let links: string[] = availableYears

  if (
    (year && !availableYears.includes(year))
    || (year && month && !(await getAvailableArchiveMonthsByYear(year)).includes(month))
  ) {
    throw new Error('No posts found for the selected period.')
  }

  if (year && !month) {
    links = await getAvailableArchiveMonthsByYear(year)
  }

  if (year && month) {
    links = []
  }

  return (
    <nav>
      <ul className="flex gap-2 pb-4">
        {links.map((link) => {
          const href = year ? `/archive/${year}/${link}` : `/archive/${link}`

          return (
            <li className="link" key={link}>
              <Link href={href}>{link}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

async function FilterContent({ year, month }: { year?: string, month?: string }) {
  let posts: Post[] = []

  if (year && !month) {
    posts = await getPostsByYearAndMonth(year)
  }
  else if (year && month) {
    posts = await getPostsByYearAndMonth(year, month)
  }

  return posts?.length > 0
    ? (
        <ul>
          {posts.map(post => (
            <li className="link" key={post.id}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )
    : <p>No post found for the selected period.</p>
}

export default async function ArchivePage({ params }: { params: { filters: string[] } }) {
  const [year, month] = params.filters ?? []

  return (
    <Suspense fallback={<LoadingBar />}>
      <FilterHeader year={year} month={month} />
      <FilterContent year={year} month={month} />
    </Suspense>
  )
}
