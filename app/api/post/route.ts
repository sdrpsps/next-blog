import process from 'node:process'
import prisma from '@/lib/db'

export async function POST(request: Request) {
  const { slug, title, category } = await request.json()

  try {
    const isExist = await prisma.blog.findUnique({ where: { slug } })

    if (!isExist) {
      await prisma.blog.create({ data: { slug, title, category } })
    }
    else {
      if (process.env.NODE_ENV === 'development') {
        return Response.json({ message: 'Not allowed in development mode.' }, { status: 200 })
      }

      await prisma.blog.update({
        where: { slug },
        data: { view_count: { increment: 1 } },
      })
    }
  }
  catch (error) {
    console.error('Error updating post view count.', error)
    return Response.json({ message: 'Error updating post view count.' }, { status: 500 })
  }

  return Response.json({ message: 'Successfully updated post view count.' }, { status: 200 })
}
