import Image from "next/image";

import { Container, GradientText, SectionShell } from "@/components/ui/SectionShell";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/lib/icons";

type InsightCard = {
  title: string;
  description: string;
  icon: IconName;
  accent: string;
  avatar: string;
};

const INSIGHT_CARDS: InsightCard[] = [
  {
    title: "Sleep Pattern Detected",
    description: "You sleep best when you wind down by 10:30 PM.",
    icon: "moon-sleep",
    accent: "#0056D2",
    avatar: "/images/sky/avatar-0.png",
  },
  {
    title: "Recovery Insight",
    description: "Morning walks boost your recovery score by 8%.",
    icon: "leaf",
    accent: "#22C55E",
    avatar: "/images/sky/avatar-1.png",
  },
];

const ACTION_CARDS = [
  {
    title: "Take a 10-minute walk",
    description: "Light movement helps lower afternoon stress.",
    icon: "running" as const,
    accent: "#F97316",
  },
  {
    title: "Stay hydrated",
    description: "Aim for 8 glasses of water today.",
    icon: "waterdrop" as const,
    accent: "#14B8A6",
  },
  {
    title: "Maintain bedtime routine",
    description: "Consistent sleep times improve deep sleep.",
    icon: "moon-sleep" as const,
    accent: "#9333EA",
  },
];

export function PersonalizedInsightsSection() {
  return (
    <SectionShell
      id="personalized-insights"
      className="relative bg-gradient-to-b from-white to-[#f0f8ff] py-14 md:py-20"
    >
      <Icon
        name="leaf"
        size={80}
        className="pointer-events-none absolute left-4 top-8 opacity-10 md:left-12"
      />
      <Icon
        name="leaf-fill"
        size={60}
        className="pointer-events-none absolute bottom-8 right-4 rotate-45 opacity-10 md:right-12"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr_1fr] lg:gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Icon name="star" size={18} />
              <Icon name="star" size={14} className="opacity-60" />
            </div>
            <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Personalized{" "}
              <GradientText variant="insights" className="font-bold">
                Just For You
              </GradientText>
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              SKY learns your unique patterns and delivers insights tailored to
              your body, lifestyle, and goals — not generic averages.
            </p>

            <div className="relative flex flex-col gap-4 pt-4">
              {INSIGHT_CARDS.map((card, index) => (
                <div
                  key={card.title}
                  className={`flex gap-3 rounded-2xl border border-border/50 bg-white p-4 shadow-md ${index === 1 ? "md:ml-6" : ""}`}
                >
                  <div className="relative size-10 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={card.avatar}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Icon name={card.icon} size={16} />
                      <p
                        className="text-sm font-bold"
                        style={{ color: card.accent }}
                      >
                        {card.title}
                      </p>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[280px]">
            <div className="relative aspect-[9/18] w-full">
              <Image
                src="/images/sky/phone-mockup.png"
                alt="SKY app showing wellness score"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="280px"
              />
            </div>
            <div className="absolute inset-x-0 top-[18%] mx-auto w-[55%] rounded-xl bg-[#0a1628]/90 p-3 text-center backdrop-blur-sm">
              <p className="text-[10px] uppercase tracking-wider text-white/60">
                Wellness Score
              </p>
              <p className="text-3xl font-bold text-white">85</p>
              <p className="mt-1 text-[10px] text-[#22C55E]">Key Highlights</p>
              <div className="mt-2 space-y-1 text-left text-[9px] text-white/70">
                <p>• Sleep quality up 12%</p>
                <p>• Recovery on track</p>
                <p>• Stress manageable</p>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col gap-6">
            {ACTION_CARDS.map((card, index) => (
              <div key={card.title} className="relative">
                {index < ACTION_CARDS.length - 1 ? (
                  <div className="absolute left-6 top-full hidden h-6 w-px bg-border lg:block" />
                ) : null}
                <div className="flex gap-4 rounded-2xl border border-border/50 bg-white p-5 shadow-md">
                  <span
                    className="flex size-12 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${card.accent}20` }}
                  >
                    <Icon name={card.icon} size={22} />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-foreground">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}
