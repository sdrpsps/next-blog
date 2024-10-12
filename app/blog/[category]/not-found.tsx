import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'

export default async function NotFound() {
  return (
    <main className="lg:col-span-2 lg:col-start-1 lg:row-start-2 flex flex-col flex-grow">
      <div className="max-w-lg w-full mx-auto flex flex-col justify-center flex-grow">
        <p className="text-base font-semibold leading-8 text-indigo-600 dark:text-indigo-400">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
          Sorry, the article or category you&apos;re looking for does not exist.
        </p>
        <Link href="/" className="mt-10 flex items-center text-sm font-semibold leading-7 text-indigo-600 dark:text-indigo-400 gap-2 group">
          <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to home</span>
        </Link>
      </div>
    </main>
  )
}
