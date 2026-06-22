import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionBadgeProps = {
  children: ReactNode;
  className?: string;
};

export function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-sky-primary/20 bg-white px-4 py-2.5 text-sm font-bold uppercase tracking-[0.08em] text-sky-primary shadow-sm md:px-5 md:text-base",
        className
      )}
    >
      {children}
    </span>
  );
}
