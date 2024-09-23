/* eslint-disable no-console */
import type { Prisma } from '@prisma/client'
import process from 'node:process'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Alice',
    password: 'alice',
    email: 'alice@prisma.io',
    posts: {
      create: [
        {
          title: 'Join the Prisma Discord',
          slug: 'join-the-prisma-discord',
          content: 'https://pris.ly/discord',
          published: true,
          createdAt: new Date('2022-01-01'),
        },
      ],
    },
  },
  {
    name: 'Nilu',
    password: 'nilu',
    email: 'nilu@prisma.io',
    posts: {
      create: [
        {
          title: 'Follow Prisma on Twitter',
          slug: 'follow-prisma-on-twitter',
          content: 'https://www.twitter.com/prisma',
          published: true,
          createdAt: new Date('2023-04-01'),
        },
      ],
    },
  },
  {
    name: 'Mahmoud',
    password: 'mahmoud',
    email: 'mahmoud@prisma.io',
    posts: {
      create: [
        {
          title: 'Ask a question about Prisma on GitHub',
          slug: 'ask-a-question-about-prisma-on-github',
          content: 'https://www.github.com/prisma/prisma/discussions',
          published: true,
          createdAt: new Date('2024-01-01'),
        },
        {
          title: 'Prisma on YouTube',
          slug: 'prisma-on-youtube',
          content: 'https://pris.ly/youtube',
          published: true,
          createdAt: new Date('2024-11-01'),
        },
      ],
    },
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
