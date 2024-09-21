import type { Metadata } from 'next'
import MainFooter from '@/components/main-footer'
import MainHeader from '@/components/main-header'
import { HarmonySans } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sunny\'s Blog',
  description: 'Think, Write, Code',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${HarmonySans.className} antialiased`}>
        <MainHeader />
        <main>{children}</main>
        <MainFooter />
      </body>
    </html>
  )
}
