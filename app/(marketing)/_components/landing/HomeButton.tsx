import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

type HomeButtonProps = {
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
  variant?: "primary" | "sky";
};

export function HomeButton({
  children,
  className,
  showArrow = true,
  variant = "primary",
}: HomeButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-base font-semibold text-white shadow-md transition",
        variant === "primary"
          ? "bg-[#002171] hover:bg-[#001a5c]"
          : "bg-sky-primary hover:bg-[#0044a8]",
        className
      )}
    >
      {children}
      {showArrow ? (
        <Icon name="arrow-right" size={18} className="brightness-0 invert" />
      ) : null}
    </button>
  );
}
