import Image from 'next/image'

interface ImageProps {
  src: string
  alt?: string
}

export default function ImageBlock({ src, alt }: ImageProps) {
  return (
    <figure className="flex flex-col items-center mx-auto mb-4 max-w-lg lg:max-w-xl">
      <Image
        src={src}
        width={0}
        height={0}
        alt={alt || ''}
        sizes="100vw"
        className="w-full h-auto m-0 mb-2"
      />
      {alt && <figcaption className="text-sm m-0 text-gray-500 dark:text-gray-400">{alt}</figcaption>}
    </figure>
  )
}
