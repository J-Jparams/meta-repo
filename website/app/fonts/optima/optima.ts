// app/fonts/optima.ts
import localFont from "next/font/local";

export const optimaExtended = localFont({
  src: [
    { path: "./optima/Optima_regular.woff2", weight: "400", style: "normal" },
    { path: "./optima/Optima_bold.woff2",    weight: "700", style: "normal" },
    { path: "./optima/Optima_Italic.woff2",    weight: "500", style: "normal" },
  ],
  variable: "--font-optima",
  display: "swap",
  preload: true,
});
