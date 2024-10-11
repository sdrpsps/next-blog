import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { formatDate } from '@/lib/post'
import Link from 'next/link'

export default function PostCard({ post }: { post: any }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <Link href={`/blog/${post.slug}`}>
        <CardHeader>
          <CardTitle>{post.metadata.title}</CardTitle>
          <CardDescription>{post.metadata.summary}</CardDescription>
          <CardDescription>{formatDate(post.metadata.publishedAt)}</CardDescription>
        </CardHeader>
      </Link>
    </Card>
  )
}
