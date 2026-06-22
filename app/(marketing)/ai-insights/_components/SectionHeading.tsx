import type { ReactNode } from "react";

import { Icon } from "@/components/ui/Icon";

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
  eyebrow?: string;
  variant?: "default" | "light";
};

export function SectionHeading({
  children,
  className = "",
  eyebrow,
  variant = "default",
}: SectionHeadingProps) {
  const textClass =
    variant === "light" ? "text-white" : "text-foreground";
  const starClass =
    variant === "light" ? "opacity-80 brightness-0 invert" : "opacity-70";

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      {eyebrow ? (
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-primary">
          {eyebrow}
        </p>
      ) : null}
      <div className="flex items-center justify-center gap-3">
        <Icon name="star" size={20} className={starClass} />
        <h2
          className={`text-center text-2xl font-bold leading-tight md:text-3xl lg:text-[36px] ${textClass}`}
        >
          {children}
        </h2>
        <Icon name="star" size={20} className={starClass} />
      </div>
    </div>
  );
}
