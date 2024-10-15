import type { Heading } from '@/app/blog/[category]/types'

function HeadingItem({ heading, depth = 0 }: { heading: Heading; depth?: number }) {
  return (
    <li>
      <a 
        href={`#${heading.text}`}
        className={`
          block py-2 px-3 
          text-gray-700 dark:text-gray-300
          hover:text-gray-900 dark:hover:text-white
          hover:bg-gray-200 dark:hover:bg-gray-700
          rounded transition-colors duration-150
          ${depth > 0 ? 'text-sm' : 'font-medium'}
        `}
        style={{ paddingLeft: `${depth * 0.75 + 0.75}rem` }}
      >
        {heading.text}
      </a>
      {heading.children && heading.children.length > 0 && (
        <ul>
          {heading.children.map(child => (
            <HeadingItem key={child.text} heading={child} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  )
}

export default function TableOfContent({ headings }: { headings: Heading[] }) {
  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200 border-b border-gray-300 dark:border-gray-700 pb-2">
        Table of Contents
      </h2>
      <ul>
        {headings.map(heading => (
          <HeadingItem key={heading.text} heading={heading} />
        ))}
      </ul>
    </nav>
  )
}
