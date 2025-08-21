"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import HoverSweepButton from "@/app/_components/sweep-button"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../../components/ui/alert-dialog"
import { toast } from "sonner"


export interface TeamMemberCheckDialogButtonProps {
  label?: React.ReactNode;
  className?: string;
  accentClassName?: string;
  heightClassName?: string;
  buttonProps?: Omit<
    React.ComponentProps<typeof HoverSweepButton>,
    "children" | "className" | "accentClassName" | "heightClassName"
  >;
  /** Prevent closing via ESC/outside click (user must pick an action). */
  forceAnswer?: boolean;
}

export default function TeamMemberCheckDialogButton({
  label = "Open Membership Check",
  className,
  accentClassName = "bg-blue-500",
  heightClassName = "h-12",
  buttonProps,
  forceAnswer = true,
}: TeamMemberCheckDialogButtonProps) {
  const router = useRouter();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <HoverSweepButton
          className={className}
          accentClassName={accentClassName}
          heightClassName={heightClassName}
          {...buttonProps}
        >
          {label}
        </HoverSweepButton>
      </AlertDialogTrigger>

      <AlertDialogContent
        // Block closing unless a button is pressed
        onEscapeKeyDown={(e) => {
          if (forceAnswer) e.preventDefault();
        }}   
      >
        <AlertDialogHeader>
          <AlertDialogTitle>Quick check</AlertDialogTitle>
          <AlertDialogDescription>
            Are you a Current Team Member of this Org?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          {/* No → /jointeam */}
          <AlertDialogAction
            className="bg-neutral-200 text-neutral-900 hover:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700"
            onClick={() => { toast.message("Let’s get you set up."); router.replace("/request/to-join"); }}
          >
            No
          </AlertDialogAction>

          {/* Yes → /memberlogin */}
          <AlertDialogAction onClick={() => { toast.success("Welcome back!"); router.replace("/member-login"); }}>
            Yes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}