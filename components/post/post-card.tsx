import type { Post } from '@/app/blog/[category]/types'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { formatDate } from '@/lib/post'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

interface PostCardProps {
  post: Post
  className?: string
}

export default function PostCard({ post, className }: PostCardProps) {
  return (
    <Card className={cn('hover:shadow-lg dark:hover:shadow-gray-800 transition-shadow', className)}>
      <Link href={`/blog/${post.metadata.category}/${post.slug}`}>
        <CardHeader>
          <Image
            src={post.metadata.cover}
            alt={post.metadata.title}
            width={300}
            height={300}
            className="w-full h-40 object-cover rounded-md overflow-hidden mb-4"
          />
          <CardTitle>{post.metadata.title}</CardTitle>
          <CardDescription>{post.metadata.summary}</CardDescription>
          <CardDescription>{formatDate(post.metadata.publishedAt)}</CardDescription>
        </CardHeader>
      </Link>
    </Card>
  )
}
