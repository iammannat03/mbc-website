import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
};

export function SectionHeading({ children, className = "" }: SectionHeadingProps) {
  return (
    <h2
      className={`text-center text-2xl font-bold leading-tight text-[#0c2340] md:text-3xl lg:text-[36px] ${className}`}
    >
      {children}
    </h2>
  );
}
