import prisma from './db'

export async function getAvailableArchiveYears() {
  const years = await prisma.post.findMany({
    select: {
      createdAt: true,
    },
    where: {
      published: true,
    },
    distinct: ['createdAt'],
    orderBy: {
      createdAt: 'desc',
    },
  })

  return Array.from(new Set(years.map(year => year.createdAt.getFullYear().toString())))
}

export async function getAvailableArchiveMonthsByYear(year: string) {
  const months = await prisma.post.findMany({
    select: {
      createdAt: true,
    },
    where: {
      published: true,
      createdAt: {
        gte: new Date(`${year}-01-01`),
        lte: new Date(`${year}-12-31`),
      },
    },
    distinct: ['createdAt'],
    orderBy: {
      createdAt: 'desc',
    },
  })

  return Array.from(new Set(months.map(month => month.createdAt.getMonth() + 1).map(month => month.toString().padStart(2, '0'))))
}

export async function getPostsByYearAndMonth(year: string, month?: string) {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
      createdAt: {
        gte: new Date(`${year}-${month || '01'}-01`),
        lte: new Date(`${year}-${month || '12'}-31`),
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return posts
}
