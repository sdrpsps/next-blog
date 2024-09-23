'use client'

export default function ArchiveError({ error }: { error: Error }) {
  return (
    <div>
      <h2>An error occurred.</h2>
      <p>{error.message}</p>
    </div>
  )
}
