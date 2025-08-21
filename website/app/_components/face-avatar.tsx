import Image from "next/image";
import type { FacePreset } from "@/types/type";

export function FaceAvatar({
  preset, size, priority = false,
}: { preset: FacePreset; size?: number; priority?: boolean }) {
  const { src, alt, scale, x = "0%", y = "-8%" } = preset;

  return (
    <div
      className="relative overflow-hidden rounded-full ring-1 ring-white/10"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${size}px`}
        priority={priority}         // only set true for the 1–2 most important
        placeholder="blur"          // works automatically with static imports
        style={{
          objectFit: "contain",
          transform: `translate(${x}, ${y}) scale(${scale})`,
          transformOrigin: "50% 25%",
        }}
      />
    </div>
  );
}