// app/fonts/manifold.ts
import localFont from "next/font/local";

export const manifoldExtended = localFont({
  src: [
    { path: "./manifold/ManifoldExtendedCF-Regular.woff2", weight: "400", style: "normal" },
    { path: "./manifold/ManifoldExtendedCF-Bold.woff2",    weight: "700", style: "normal" },
  ],
  variable: "--font-manifold",
  display: "swap",
  preload: true,
});
