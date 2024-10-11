'use client'

import { cn } from '@/lib/utils'
import { Rss } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import DarkToggle from './dark-toggle'
import { Button } from './ui/button'

export default function Header({ className }: { className?: string }) {
  return (
    <header className={cn('bg-gray-100 dark:bg-gray-800 z-50', className)}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <h1 className="text-2xl font-bold">Sunny's Blog</h1>
        </Link>
        <section className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href="/about">About</Link>
          </Button>
          <DarkToggle />
          <Button variant="outline" size="icon" asChild>
            <Link href="/rss">
              <Rss className="w-4 h-4" />
              <span className="sr-only">RSS</span>
            </Link>
          </Button>
        </section>
      </div>
    </header>
  )
}
