// app/fonts/forma.ts
import localFont from "next/font/local";

export const formaExtended = localFont({
  src: [
    { path: "./forma/FormaDJRText-Bold-Testing.woff2", weight: "700", style: "normal" },
    { path: "./forma/FormaDJRText-BoldItalic-Testing.woff2",    weight: "500", style: "normal" },
    { path: "./forma/FormaDJRText-MediumItalic-Testing.woff2",    weight: "400", style: "normal" },
    { path: "./forma/FormaDJRText-Regular-Testing.woff2",    weight: "400", style: "normal" },
  ],
  variable: "--font-forma",
  display: "swap",
  preload: true,
});
