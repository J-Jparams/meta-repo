"use client";

import * as React from "react";
import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface HoverSweepButtonProps
  extends Omit<HTMLMotionProps<"button">, "children" | "className"> {
  children: React.ReactNode;
  className?: string;
  accentClassName?: string;
  heightClassName?: string;
}

const sweepVariants = {
  initial: { x: "-100%", scale: 1 },
  hover: { x: "0%", scale: 1.5 },
};

const HoverSweepButton = React.forwardRef<HTMLButtonElement, HoverSweepButtonProps>(
  (
    {
      children,
      className,
      accentClassName = "bg-blue-500",
      heightClassName = "h-12",
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        type={type}
        className={cn(
          "relative inline-flex select-none items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-8 py-2 text-neutral-50",
          heightClassName,
          className
        )}
        initial="initial"
        whileHover="hover"
        {...props}
      >
        <span className="relative z-10">{children}</span>

        {/* Make overlay NON-interactive so trigger gets the click */}
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-md">
          <motion.span
            aria-hidden
            className={cn(
              "pointer-events-none absolute left-0 aspect-square w-full origin-center rounded-full",
              accentClassName
            )}
            variants={sweepVariants}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </span>
      </motion.button>
    );
  }
);

HoverSweepButton.displayName = "HoverSweepButton";
export default HoverSweepButton;