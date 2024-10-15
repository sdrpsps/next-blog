interface VideoProps {
  src: string
  title?: string
}

export default function VideoBlock({ src, title }: VideoProps) {
  return (
    <figure className="flex flex-col items-center mx-auto mb-4 max-w-lg lg:max-w-xl">
      <video
        src={src}
        title={title}
        controls
        preload="metadata"
        className="w-full h-auto m-0 mb-2"
      >
        Your browser does not support the video tag.
      </video>
      {title && <figcaption className="text-sm m-0 text-gray-500 dark:text-gray-400">{title}</figcaption>}
    </figure>
  )
}
