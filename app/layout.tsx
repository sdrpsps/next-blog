import type { Metadata } from 'next'
import process from 'node:process'
import Container from '@/components/container'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import { HarmonySans } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL),
  title: {
    template: '%s | Sunny\'s Blog',
    default: 'Sunny\'s Blog',
  },
  description: 'Think, Write, Code',
  icons: {
    icon: '/logo.png',
  },
  keywords: ['Blog', 'Next.js', 'React', 'Vue', 'TypeScript', 'JavaScript'],
  authors: [{ name: 'Sunny', url: 'https://github.com/sdrpsps' }],
  creator: 'Sunny',
  openGraph: {
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased ${HarmonySans.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Container>{children}</Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
