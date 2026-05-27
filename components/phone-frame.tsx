import Image from "next/image"
import type { ReactNode } from "react"

type PhoneFrameProps = {
  children: ReactNode
  large?: boolean
}

type PhoneFrameImageProps = {
  src: string
  alt: string
  large?: boolean
}

const phoneFrameImageSize = {
  width: 390,
  height: 844,
}

export function PhoneFrame({ children, large = false }: PhoneFrameProps) {
  return (
    <div className={`mx-auto w-full ${large ? "max-w-[26rem]" : "max-w-[340px]"}`}>
      <div className="rounded-[2.85rem] bg-[#151515] p-[0.3rem] shadow-[0_30px_80px_rgba(0,0,0,0.24)]">
        <div className="relative overflow-hidden rounded-[2.45rem] border border-white/10 bg-[#111111]">
          <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-black/85" />
          <div className="pointer-events-none absolute inset-[0.22rem] rounded-[2.25rem] border border-white/10" />
          <div className="aspect-[390/844] overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export function PhoneFrameImage({ src, alt, large = false }: PhoneFrameImageProps) {
  return (
    <PhoneFrame large={large}>
      <Image
        src={src}
        alt={alt}
        width={phoneFrameImageSize.width}
        height={phoneFrameImageSize.height}
        quality={95}
        sizes={large ? "26rem" : "(min-width: 1024px) 340px, min(100vw, 340px)"}
        className="h-full w-full object-cover"
      />
    </PhoneFrame>
  )
}
