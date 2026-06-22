import Image from "next/image";

import { Container, SectionShell } from "@/components/ui/SectionShell";

import { SectionHeading } from "./SectionHeading";

type ShowcaseItem = {
  title: string;
  metric: string;
  insight: string;
  accent: string;
  image: string;
};

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    title: "Sleep Quality",
    metric: "82",
    insight: "Your sleep depth improved 12% this week.",
    accent: "#0056D2",
    image: "/images/sky/timeline-0.png",
  },
  {
    title: "Recovery",
    metric: "86%",
    insight: "Strong recovery — ready for moderate activity.",
    accent: "#22C55E",
    image: "/images/sky/timeline-1.png",
  },
  {
    title: "Stress",
    metric: "72/100",
    insight: "Stress levels are moderate. Try a short walk.",
    accent: "#9333EA",
    image: "/images/sky/timeline-2.png",
  },
  {
    title: "Readiness",
    metric: "78/100",
    insight: "Good readiness for today's planned workout.",
    accent: "#14B8A6",
    image: "/images/sky/timeline-3.png",
  },
  {
    title: "Activity",
    metric: "8,642 steps",
    insight: "You're 86% toward your daily step goal.",
    accent: "#F97316",
    image: "/images/sky/timeline-4.png",
  },
  {
    title: "Heart Health",
    metric: "72 bpm",
    insight: "Resting heart rate is within healthy range.",
    accent: "#EF4444",
    image: "/images/sky/timeline-5.png",
  },
];

export function FeatureShowcaseSection() {
  return (
    <SectionShell
      id="feature-showcase"
      className="full-bleed bg-[#0a1628] py-14 md:py-20"
    >
      <Container>
        <SectionHeading variant="light" className="mb-10 md:mb-14">
          AI Insights From SKY App
        </SectionHeading>

        <div className="flex gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-6">
          {SHOWCASE_ITEMS.map((item) => (
            <article
              key={item.title}
              className="flex w-[220px] shrink-0 flex-col gap-3 md:w-[240px]"
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 shadow-xl">
                <Image
                  src={item.image}
                  alt={`${item.title} insight screen`}
                  fill
                  className="object-cover"
                  sizes="240px"
                />
                <div
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ backgroundColor: item.accent }}
                />
              </div>
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: item.accent }}
                >
                  {item.title}
                </p>
                <p className="mt-1 text-lg font-bold text-white">
                  {item.metric}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-white/60">
                  {item.insight}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
