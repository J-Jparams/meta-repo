
import type { StaticImageData } from "next/image";



export type FacePreset = {
    src: StaticImageData | string;
    alt: string;
    scale: number;
    x?: string;
    y?: string;
}

export type FacePresetMap = Record<string, FacePreset>;

