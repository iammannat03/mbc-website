import Image from "next/image";
import { Check } from "lucide-react";

import { Container, SectionShell } from "@/components/ui/SectionShell";

const STRENGTHS = [
  "Technology alone is not enough.",
  "Natural guidance alone is not enough.",
] as const;

export function StrengthSection() {
  return (
    <SectionShell
      id="strength"
      className="full-bleed bg-[#f7faff] py-16 md:py-20"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-600 md:text-base">
              Our Strength
            </p>
            <h2 className="text-3xl font-bold leading-tight text-[#0c2340] md:text-4xl">
              Why ByeBimari Works
            </h2>
            <p className="text-base font-medium leading-relaxed text-sky-primary md:text-lg">
              Tracking BioVitals + AI Insight + Ancient Wisdom Consistency
            </p>

            <ul className="mt-2 flex flex-col gap-4">
              {STRENGTHS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-sky-primary">
                    <Check className="size-3.5 stroke-3 text-white" />
                  </span>
                  <span className="text-base leading-relaxed text-foreground/85 md:text-lg">
                    {item}
                  </span>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-sky-primary">
                  <Check className="size-3.5 stroke-3 text-white" />
                </span>
                <span className="text-base leading-relaxed text-foreground/85 md:text-lg">
                  Real transformation happens when awareness, expert guidance,
                  and{" "}
                  <span className="font-semibold text-emerald-600">
                    consistent action
                  </span>{" "}
                  work together.
                </span>
              </li>
            </ul>
          </div>

          <div className="relative w-full">
            <Image
              src="/images/home/why.png"
              alt="Smart Ring plus AI Insights plus Health Experts plus Accountability equals Better Health"
              width={986}
              height={513}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}
