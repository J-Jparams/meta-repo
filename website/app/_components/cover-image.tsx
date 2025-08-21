import Link from "next/link"
import { clsx } from "clsx"
import Image from "next/image"

export default function CoverImage({
  title,
  url,
  width,
  height,
  priority,
  className,
}: {
  title: string
  url: string
  width: number
  height: number
  priority?: boolean
  className?: string
}) {
  const image = (
    <Image
      alt={`Cover Image for ${title}`}
      width={width}
      height={height}
      priority={priority}
      className={clsx("shadow-sm rounded-lg object-cover", className, {
        "hover:shadow-md transition-shadow duration-200": title,
      })}
      src={url}
    />
  )

  return (
    <div className="sm:mx-0">
        <Link href={`/posts/${title}`} aria-label={title}>
          {image}
        </Link>
    </div>
  )
}
