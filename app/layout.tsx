import type { Metadata } from 'next'
import Container from '@/components/container'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sunny\'s Blog',
  description: 'Think, Write, Code',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Container className="flex-1">{children}</Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
