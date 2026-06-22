import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

import { Icon } from "@/components/ui/Icon";

type GreenButtonProps = {
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
};

export function GreenButton({
  children,
  className,
  showArrow = false,
}: GreenButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-[hsl(120,30%,25%)] px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-[hsl(120,30%,20%)]",
        className
      )}
    >
      {children}
      {showArrow ? <Icon name="arrow-right" size={18} className="brightness-0 invert" /> : null}
    </button>
  );
}
