import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { formatDate } from '@/lib/post'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function PostCard({ post, className }: { post: any, className?: string }) {
  return (
    <Card className={cn('hover:shadow-lg dark:hover:shadow-gray-800 transition-shadow', className)}>
      <Link href={`/blog/${post.metadata.category}/${post.slug}`}>
        <CardHeader>
          <CardTitle>{post.metadata.title}</CardTitle>
          <CardDescription>{post.metadata.summary}</CardDescription>
          <CardDescription>{formatDate(post.metadata.publishedAt)}</CardDescription>
        </CardHeader>
      </Link>
    </Card>
  )
}
