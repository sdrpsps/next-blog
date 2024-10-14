import type { Metadata } from 'next'
import MDX from '@/components/post/mdx'
import { getMDXData } from '@/lib/post'

export const metadata: Metadata = {
  title: 'About',
  description: 'About me',
}

export default function About() {
  const data = getMDXData('app/about')

  return (
    <article className="prose dark:prose-invert prose-code:before:hidden prose-code:after:hidden max-w-none">
      <MDX source={data[0].content} />
    </article>
  )
}
