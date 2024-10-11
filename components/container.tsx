import { cn } from '@/lib/utils'

export default function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <div className={cn('mx-auto my-8 w-full max-w-screen-xl px-2.5 md:px-20', className)}>{children}</div>
}
