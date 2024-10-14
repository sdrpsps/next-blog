import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { TreePalm } from 'lucide-react'
import LoadingBar from './loading-bar'
import { SubscribeForm } from './subscribe-form'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto divide-y divide-gray-200 dark:divide-gray-700 space-y-4 p-4">
        <nav className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <section className="flex flex-col gap-2">
            <h2 className="flex items-center gap-2 text-neutral-600 dark:text-neutral-200">
              <TreePalm className="w-8 h-8" />
              <span className="text-md font-semibold">Sunny's Blog</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Stay Up to Date with the latest news and insights from my blog.
            </p>
            <ul className="flex items-center gap-2">
              <li>
                <a
                  href="https://github.com/sdrpsps"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Github"
                >
                  <GitHubLogoIcon className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
                </a>
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="font-semibold text-neutral-600 dark:text-neutral-200">
              To Be Done
            </h2>
            <LoadingBar />
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="font-semibold text-neutral-600 dark:text-neutral-200">
              Links
            </h2>
            <ul className="flex flex-col gap-2 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
              <li>
                <a href="mailto:sunny@bytespark.me">Contact Me</a>
              </li>
              <li>
                <a href="/sitemap.xml">Sitemap</a>
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="font-semibold text-neutral-600 dark:text-neutral-200">
              Newsletter
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Subscribe to my newsletter to stay up-to-date with the latest news and updates.
            </p>
            <SubscribeForm />
          </section>
        </nav>

        <div className="flex items-center justify-center pt-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy;
            {' '}
            {new Date().getFullYear()}
            {' '}
            Sunny. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
