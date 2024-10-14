import type { Metadata } from 'next'
import MDX from '@/components/post/mdx'
import { readMDXFile } from '@/lib/post'

export const metadata: Metadata = {
  title: 'About',
  description: 'About me',
}

export default function About() {
  const data = readMDXFile('app/about/about.mdx')

  return (
    <article className="prose dark:prose-invert prose-code:before:hidden prose-code:after:hidden max-w-none">
      <MDX source={data.content} />
    </article>
  )
}
