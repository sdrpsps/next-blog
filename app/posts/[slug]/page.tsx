import { getPostBySlug } from '@/lib/post'
import { notFound } from 'next/navigation'
import Markdown from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { synthwave84 } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }) {
  const post = await getPostBySlug(slug)

  return {
    title: post?.title,
  }
}

export default async function PostPage({ params: { slug } }: { params: { slug: string } }) {
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <Markdown
      className="max-w-none prose dark:prose-invert prose-inline-code:rounded prose-inline-code:border prose-code:before:hidden prose-code:after:hidden"
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      components={{
        pre({ children }) {
          return <>{children}</>
        },
        code({ children, className, node, ...rest }) {
          const match = /language-(\w+)/.exec(className || '')
          return match
            ? (
                <SyntaxHighlighter style={synthwave84} language={match[1]}>
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              )
            : (
                <code className={className} {...rest}>
                  {children}
                </code>
              )
        },
      }}
    >
      {post.content}
    </Markdown>
  )
}
