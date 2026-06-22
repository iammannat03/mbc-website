import type { ReactNode } from "react";

import { Icon } from "@/components/ui/Icon";

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
};

export function SectionHeading({ children, className = "" }: SectionHeadingProps) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <Icon
        name="arrow"
        size={28}
        className="hidden rotate-180 opacity-80 sm:block"
        style={{ filter: "brightness(0) saturate(100%) invert(27%) sepia(12%) saturate(1500%) hue-rotate(75deg) brightness(95%) contrast(90%)" }}
      />
      <h2 className="text-center text-2xl font-bold leading-tight text-foreground md:text-3xl lg:text-[36px]">
        {children}
      </h2>
      <Icon
        name="arrow"
        size={28}
        className="hidden opacity-80 sm:block"
        style={{ filter: "brightness(0) saturate(100%) invert(27%) sepia(12%) saturate(1500%) hue-rotate(75deg) brightness(95%) contrast(90%)" }}
      />
    </div>
  );
}
