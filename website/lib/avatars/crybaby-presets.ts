import type { FacePresetMap } from "@/types/type";
import robber from "@/public/avatars/crybaby_the-robber_transparent.png"
import msRose from "@/public/avatars/crybaby_ms-rose_transparent.png"
import frog from "@/public/avatars/crybaby_what-a-frog_transparent.png"
import loveIsLove from "@/public/avatars/crybaby_love-is-love_transparent.png"

export const CRYBABY_FACE_PRESETS: FacePresetMap = {
  robber:    { src: robber,     alt: "Security (Robber)",        scale: 2.1, y: "-4%" },
  msRose:    { src: msRose,     alt: "Ms. Rose",                 scale: 2.2, y: "-8%" },
  frog:      { src: frog,       alt: "What a Frog",              scale: 2.4, y: "-8%" },
  loveIsLove:{ src: loveIsLove, alt: "Love Is Love",             scale: 2.4, y: "-10%" },
} as const;

export type CrybabyKey = keyof typeof CRYBABY_FACE_PRESETS;