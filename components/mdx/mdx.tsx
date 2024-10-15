import type { MDXRemoteProps } from 'next-mdx-remote/rsc'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import LoadingBar from '../loading-bar'
import CodeBlock from './code'
import Heading from './heading'
import ImageBlock from './img'
import VideoBlock from './video'

const components: MDXRemoteProps['components'] = {
  h1({ children }) {
    return <Heading level={1}>{children}</Heading>
  },
  h2({ children }) {
    return <Heading level={2}>{children}</Heading>
  },
  h3({ children }) {
    return <Heading level={3}>{children}</Heading>
  },
  h4({ children }) {
    return <Heading level={4}>{children}</Heading>
  },
  h5({ children }) {
    return <Heading level={5}>{children}</Heading>
  },
  h6({ children }) {
    return <Heading level={6}>{children}</Heading>
  },
  p({ children }) {
    if (typeof children === 'object') {
      return <>{children}</>
    }

    return <p>{children}</p>
  },
  code({ ...props }) {
    return <CodeBlock {...props} />
  },
  pre({ children }) {
    return <>{children}</>
  },
  img({ src, alt }) {
    if (!src)
      return null

    return <ImageBlock src={src} alt={alt} />
  },
  Video({ src, title }) {
    if (!src)
      return null

    return <VideoBlock src={src} title={title} />
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
