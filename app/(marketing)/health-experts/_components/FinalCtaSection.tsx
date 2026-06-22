import Image from "next/image";

import { Container, SectionShell } from "@/components/ui/SectionShell";

import { GreenButton } from "./GreenButton";

const AVATARS = [
  "/images/sky/avatar-0.png",
  "/images/sky/avatar-1.png",
  "/images/sky/avatar-2.png",
  "/images/sky/avatar-3.png",
];

export function FinalCtaSection() {
  return (
    <SectionShell id="cta" className="full-bleed relative py-16 md:py-24">
      <Image
        src="/images/sky/final-cta-background.png"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />

      <Container className="relative z-10">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[42px]">
            Guided by Experts. Designed for Your Well-Being.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
            Get personalized guidance from certified wellness professionals who
            understand your unique needs and help you build lasting healthy
            habits.
          </p>

          <div className="mt-8">
            <GreenButton showArrow>Connect With an Expert</GreenButton>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2">
              {AVATARS.map((avatar, index) => (
                <div
                  key={avatar}
                  className="relative size-10 overflow-hidden rounded-full border-2 border-white"
                  style={{ zIndex: AVATARS.length - index }}
                >
                  <Image
                    src={avatar}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-white/90 md:text-base">
              Trusted by Thousands for Natural Wellness
            </p>
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}
