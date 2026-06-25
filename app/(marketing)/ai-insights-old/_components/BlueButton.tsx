import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

import { Icon } from "@/components/ui/Icon";

type BlueButtonProps = {
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
};

export function BlueButton({
  children,
  className,
  showArrow = false,
}: BlueButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-sky-primary px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-[#0044a8]",
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
