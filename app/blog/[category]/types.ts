export interface Post {
  metadata: {
    title: string
    summary: string
    publishedAt: string
    cover: string
    category: string
  }
  slug: string
  content: string
}