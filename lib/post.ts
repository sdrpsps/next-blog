import type { Heading } from '@/app/blog/[category]/types'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import matter from 'gray-matter'
import prisma from './db'

// get all the mdx files from the dir
function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter(file => path.extname(file) === '.mdx')
}

// Read data from those files
export function readMDXFile(filePath: fs.PathOrFileDescriptor) {
  const rawContent = fs.readFileSync(filePath, 'utf-8')
  return matter(rawContent)
}

// present the mdx data and metadata
export function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir)

  return mdxFiles.map((file) => {
    const { data: metadata, content } = readMDXFile(path.join(dir, file))
    const slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }

  const targetDate = new Date(date)

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  const daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  }
  else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  }
  else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  }
  else {
    formattedDate = 'Today'
  }

  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'app/blog/_contents')).sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  })
}

export function getHeadings(markdown: string): Heading[] {
  const headingRegex = /^(##\s+(.+)|###\s+(.+))/gm
  const toc: Heading[] = []
  let currentH2: Heading | null = null

  markdown.replace(headingRegex, (_, __, h2, h3) => {
    if (h2) {
      currentH2 = {
        text: h2,
        level: 2,
        children: [],
      }
      toc.push(currentH2)
    }
    else if (h3 && currentH2) {
      currentH2.children.push({
        text: h3,
        level: 3,
        children: [],
      })
    }
    return ''
  })

  return toc
}

export async function getTopCategories() {
  try {
    return await prisma.blog.findMany({
      select: {
        category: true,
      },
      distinct: ['category'],
      orderBy: {
        view_count: 'desc',
      },
    })
  }
  catch (error) {
    console.error('Error getting top categories.', error)
  }
}

export async function getPopularPosts() {
  try {
    return await prisma.blog.findMany({
      orderBy: { view_count: 'desc' },
    })
  }
  catch (error) {
    console.error('Error getting popular posts.', error)
  }
}
