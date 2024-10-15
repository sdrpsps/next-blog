/* eslint-disable react-dom/no-dangerously-set-innerhtml */
import type { ReactNode } from 'react'
import { codeToHtml } from 'shiki'

interface CodeProps {
  children?: ReactNode
  className?: string
}

export default async function CodeBlock({ children, className, ...props }: CodeProps) {
  const match = /language-(\w+)/.exec(className || '')
  const out = await codeToHtml(children?.toString() || '', {
    lang: match?.[1] || 'js',
    theme: 'one-dark-pro',
  })

  return match
    ? <code className="text-base" {...props} dangerouslySetInnerHTML={{ __html: out }} />
    : <code className="border rounded-md px-1 py-0.5 bg-gray-100 dark:bg-gray-800" {...props}>{children}</code>
}
