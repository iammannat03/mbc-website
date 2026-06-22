import { Container, SectionShell } from "@/components/ui/SectionShell";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/lib/icons";

import { SectionBadge } from "./SectionBadge";

type Pillar = {
  title: string;
  description: string;
  icon: IconName;
  position: "tl" | "tr" | "bl" | "br";
};

const PILLARS: Pillar[] = [
  {
    title: "Our Health Ring — SKY",
    description:
      "Understand what your body is telling you through smart tracking of your sleep, recovery, stress, activity and other important wellness indicators.",
    icon: "scanner",
    position: "tl",
  },
  {
    title: "AI Powered Insights",
    description:
      "AI analyzes your data, finds meaningful patterns and gives actionable plans.",
    icon: "brain",
    position: "tr",
  },
  {
    title: "Health Experts",
    description:
      "Receive daily guidance from our natural health experts who help you understand your body's signals and support sustainable lifestyle changes through holistic approaches.",
    icon: "flower-lotus-duotone",
    position: "bl",
  },
  {
    title: "Accountability & Support",
    description:
      "Daily guidance, motivation and support to help you stay consistent and achieve results.",
    icon: "community",
    position: "br",
  },
];

const POSITION_CLASSES: Record<Pillar["position"], string> = {
  tl: "lg:col-start-1 lg:row-start-1",
  tr: "lg:col-start-3 lg:row-start-1",
  bl: "lg:col-start-1 lg:row-start-3",
  br: "lg:col-start-3 lg:row-start-3",
};

function PillarCard({ title, description, icon, position }: Pillar) {
  return (
    <article
      className={`rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-7 ${POSITION_CLASSES[position]}`}
    >
      <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-sky-primary/10">
        <Icon name={icon} size={28} />
      </div>
      <h3 className="mb-3 text-xl font-bold leading-snug text-[#0c2340]">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
        {description}
      </p>
    </article>
  );
}

export function EcosystemSection() {
  return (
    <SectionShell id="ecosystem" className="full-bleed bg-white py-16 md:py-24">
      <Container>
        <div className="mb-12 flex flex-col items-center gap-4 text-center md:mb-16">
          <SectionBadge>How ByeBimari Works</SectionBadge>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight text-[#0c2340] md:text-4xl lg:text-[42px]">
            One Ecosystem. Four Powerful Pillars
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:grid-rows-3 lg:gap-8">
          {PILLARS.map((pillar) => (
            <PillarCard key={pillar.title} {...pillar} />
          ))}

          <div className="relative flex items-center justify-center lg:col-start-2 lg:row-start-2">
            <div
              className="absolute inset-0 m-auto size-[min(100%,420px)] rounded-full border border-sky-primary/10 bg-gradient-to-br from-[#eef6ff] to-white"
              aria-hidden
            />
            <div className="relative z-10 flex size-40 flex-col items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-sky-primary/15 md:size-52">
              <div className="mb-2 flex size-20 items-center justify-center rounded-full bg-sky-primary/10 md:size-24">
                <Icon name="user-rounded" size={40} />
              </div>
              <p className="px-4 text-center text-xs font-semibold uppercase tracking-wide text-sky-primary md:text-sm">
                You at the center
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center md:mt-16">
          <div className="inline-flex items-center gap-3 rounded-full bg-[#eef6ff] px-6 py-3.5 shadow-sm ring-1 ring-sky-primary/10">
            <Icon name="heartbeat" size={28} />
            <span className="text-base font-bold uppercase tracking-wide text-[#0c2340] md:text-lg">
              Better Health, Every Day
            </span>
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}
