import Image from "next/image";

import { Container, SectionShell } from "@/components/ui/SectionShell";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/lib/icons";

const FEATURES: { label: string; icon: IconName }[] = [
  { label: "Natural & Holistic Approach", icon: "leaf" },
  { label: "Trusted Professionals", icon: "shield-check" },
  { label: "Personalized Support", icon: "hearts" },
];

export function HeroSection() {
  return (
    <SectionShell
      id="hero"
      className="full-bleed bg-[#f7f6f2] py-12 md:py-16 lg:py-20"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Icon name="leaf-fill" size={22} />
              <span className="text-sm font-semibold uppercase tracking-wider text-[hsl(120,30%,25%)]">
                About Our
              </span>
            </div>

            <div>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-[52px]">
                Health{" "}
                <span className="text-[hsl(120,30%,25%)]">Experts</span>
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
                Ancient wisdom. Modern guidance. Personalized for{" "}
                <span className="font-semibold text-foreground">you.</span>
              </p>
            </div>

            <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
              We bring together the best of ancient Indian wellness traditions
              and modern scientific understanding — so every recommendation is
              rooted in time-tested wisdom and backed by evidence.
            </p>

            <ul className="flex flex-col gap-4">
              {FEATURES.map((feature) => (
                <li
                  key={feature.label}
                  className="flex items-center gap-3 text-base font-medium text-foreground/90"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[hsl(120,30%,25%)]/10">
                    <Icon name={feature.icon} size={20} />
                  </span>
                  {feature.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[480px] lg:max-w-none">
            <div className="relative size-full overflow-hidden rounded-full shadow-2xl">
              <Image
                src="/images/sky/expert-featured.png"
                alt="Group of health experts"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 90vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}
