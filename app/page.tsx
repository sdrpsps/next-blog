import LatestPosts from '@/components/home/latest-posts'
import PopularPosts from '@/components/home/popular-posts'
import TopCategories from '@/components/home/top-categories'

export default function Home() {
  return (
    <main className="flex justify-between gap-10">
      <LatestPosts />
      <div className="flex flex-col gap-10">
        <TopCategories />
        <PopularPosts />
      </div>
    </main>
  )
}
