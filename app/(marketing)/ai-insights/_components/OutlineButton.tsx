import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

import { Icon } from "@/components/ui/Icon";

type OutlineButtonProps = {
  children: ReactNode;
  className?: string;
};

export function OutlineButton({ children, className }: OutlineButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center gap-2 rounded-full border-2 border-sky-primary bg-white px-8 py-3.5 text-base font-semibold text-sky-primary transition hover:bg-sky-primary/5",
        className
      )}
    >
      <Icon name="play" size={18} />
      {children}
    </button>
  );
}
