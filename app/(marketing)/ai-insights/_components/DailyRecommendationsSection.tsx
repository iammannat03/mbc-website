import {
  Droplets,
  Heart,
  Moon,
  UserRound,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Container, SectionShell } from "@/components/ui/SectionShell";

type Recommendation = {
  title: string;
  tip: string;
  icon: LucideIcon;
  accent: string;
  iconBg: string;
};

const RECOMMENDATIONS: Recommendation[] = [
  {
    title: "Better Sleep",
    tip: "Follow a consistent sleep routine",
    icon: Moon,
    accent: "#9333EA",
    iconBg: "#F3E8FF",
  },
  {
    title: "Mindful Eating",
    tip: "Eat balanced, whole and natural foods",
    icon: Heart,
    accent: "#22C55E",
    iconBg: "#DCFCE7",
  },
  {
    title: "Stress Balance",
    tip: "Take time to breathe and unwind",
    icon: UserRound,
    accent: "#6B21A8",
    iconBg: "#EDE9FE",
  },
  {
    title: "Daily Movement",
    tip: "Move your body every day",
    icon: Users,
    accent: "#0056D2",
    iconBg: "#DBEAFE",
  },
  {
    title: "Hydration",
    tip: "Drink enough water throughout the day",
    icon: Droplets,
    accent: "#14B8A6",
    iconBg: "#CCFBF1",
  },
];

export function DailyRecommendationsSection() {
  return (
    <SectionShell
      id="daily-recommendations"
      className="bg-linear-to-b from-[#f0f8ff] to-white py-10 md:py-16"
    >
      <Container>
        <div className="mb-8 flex flex-col items-center gap-3 text-center md:mb-12">
          <h2 className="text-2xl font-bold leading-tight text-sky-primary md:text-3xl lg:text-4xl">
            Daily Recommendations
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            AI-powered tips to help you make better choices, every day.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
          {RECOMMENDATIONS.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="flex flex-col items-center rounded-2xl bg-white px-4 pb-0 pt-6 text-center shadow-[0_4px_20px_rgba(15,23,42,0.08)]"
              >
                <div
                  className="mb-4 flex size-14 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: item.iconBg }}
                >
                  <Icon
                    className="size-6"
                    style={{ color: item.accent }}
                    strokeWidth={2}
                  />
                </div>
                <h3 className="text-base font-bold text-[#0B1C30]">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.tip}
                </p>
                <div
                  className="mt-5 h-1 w-full rounded-b-2xl"
                  style={{ backgroundColor: item.accent }}
                />
              </article>
            );
          })}
        </div>
      </Container>
    </SectionShell>
  );
}
