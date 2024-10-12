/* eslint-disable react-dom/no-dangerously-set-innerhtml */
import type { MDXRemoteProps } from 'next-mdx-remote/rsc'
import type { ReactNode } from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { codeToHtml } from 'shiki'
import LoadingBar from './loading-bar'

async function CodeBlock({ children, className, ...props }: { children?: ReactNode, className?: string }) {
  const match = /language-(\w+)/.exec(className || '')
  const out = await codeToHtml(children?.toString() || '', {
    lang: match?.[1] || 'js',
    theme: 'one-dark-pro',
  })

  return match
    ? (
        <code className="text-base" {...props} dangerouslySetInnerHTML={{ __html: out }} />
      )
    : (
        <code className="border rounded-md px-1 py-0.5 bg-gray-100 dark:bg-gray-800" {...props}>{children}</code>
      )
}

const components: MDXRemoteProps['components'] = {
  code({ ...props }) {
    return <CodeBlock {...props} />
  },
  pre({ children }) {
    return <>{children}</>
  },
  LoadingBar({ ...props }) {
    return <LoadingBar {...props} />
  },
}

export default async function MDX({ source, ...props }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: { remarkPlugins: [remarkGfm] },
      }}
      {...props}
    />
  )
}
