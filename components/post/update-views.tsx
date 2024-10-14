'use client'

import { useEffect } from 'react'

interface UpdateViewsProps {
  slug: string
  title: string
  cover: string
  category: string
}

export default function UpdateViews({ slug, title, cover, category }: UpdateViewsProps) {
  useEffect(() => {
    const updateViews = async () => {
      try {
        await fetch(`/api/post`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ slug, title, cover, category }),
        })
      }
      catch (error) {
        console.error('Error updating post view count.', error)
      }
    }

    updateViews()
  }, [slug, title, category, cover])

  return null
}
