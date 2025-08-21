import type { FacePresetMap } from "@/types/type";

import smiskiComputer from "@/public/avatars/smiski_computer_transparent.png"
import smiskiDaydream from "@/public/avatars/smiski_daydreaming_transparent.png"
import smiskiDumbbell from "@/public/avatars/smiski_dumbbell_transparent.png"
import smiskiRubberDucky from "@/public/avatars/smiski_rubber-duck_transparent.png" 
import smiskiPresenting from "@/public/avatars/smiski_presenting_transparent.png"


export const SMISKI_FACE_PRESETS: FacePresetMap = {
  computer:   { src: smiskiComputer,   alt: "Smiski with Laptop",         scale: 2.3, y: "-10%" },
  daydream:   { src: smiskiDaydream,   alt: "Daydreaming Smiski + Cat",   scale: 2.5, y: "-18%" },
  dumbbell:   { src: smiskiDumbbell,   alt: "Smiski with Dumbbell",       scale: 2.4, y: "-6%"  },
  rubberDuck: { src: smiskiRubberDucky, alt: "Smiski with Rubber Duck",    scale: 2.3, y: "-4%"  },
  presenting: { src: smiskiPresenting, alt: "Presenting Smiski",          scale: 2.4, y: "-10%" },
} as const;

export type SmiskiKey = keyof typeof SMISKI_FACE_PRESETS;