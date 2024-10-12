import LatestPosts from '@/components/home/latest-posts'
import PopularPosts from '@/components/home/popular-posts'
import TopCategories from '@/components/home/top-categories'

export default function Home() {
  return (
    <main className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-start gap-10">
      <LatestPosts />
      <section className="flex flex-col gap-10">
        <TopCategories />
        <PopularPosts />
      </section>
    </main>
  )
}
