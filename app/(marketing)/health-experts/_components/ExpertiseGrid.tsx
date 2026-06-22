import Image from "next/image";

import { Container, SectionShell } from "@/components/ui/SectionShell";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/lib/icons";

import { SectionHeading } from "./SectionHeading";

type ExpertiseCard = {
  title: string;
  description: string;
  icon: IconName;
  iconCircle: string;
  accent: string;
};

const EXPERTISE_AREAS: ExpertiseCard[] = [
  {
    title: "Naturopathy",
    description:
      "Harness the healing power of nature with plant-based remedies and holistic therapies.",
    icon: "leaf-fill",
    iconCircle: "/images/sky/icon-circle-green.svg",
    accent: "#2D7A3A",
  },
  {
    title: "Yoga",
    description:
      "Build strength, flexibility, and inner balance through guided yoga practices.",
    icon: "yoga",
    iconCircle: "/images/sky/icon-circle-blue.svg",
    accent: "#0056D2",
  },
  {
    title: "Meditation",
    description:
      "Cultivate mindfulness and mental clarity with personalized meditation guidance.",
    icon: "flower-lotus",
    iconCircle: "/images/sky/icon-circle-blue.svg",
    accent: "#40ABFF",
  },
  {
    title: "Nutrition",
    description:
      "Nourish your body with tailored dietary plans rooted in Ayurvedic principles.",
    icon: "food-apple",
    accent: "#E8833A",
    iconCircle: "/images/sky/icon-circle-orange.svg",
  },
  {
    title: "Sleep & Recovery",
    description:
      "Restore your energy with science-backed sleep and recovery strategies.",
    icon: "moon-sleep",
    iconCircle: "/images/sky/icon-circle-blue.svg",
    accent: "#1A3A6B",
  },
  {
    title: "Stress Balance",
    description:
      "Manage daily stress with breathing techniques and lifestyle adjustments.",
    icon: "stress",
    iconCircle: "/images/sky/icon-circle-orange.svg",
    accent: "#E879A9",
  },
];

export function ExpertiseGrid() {
  return (
    <SectionShell id="expertise" className="bg-white py-14 md:py-20">
      <Container>
        <SectionHeading className="mb-10 md:mb-14">
          Our Areas of Expertise
        </SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERTISE_AREAS.map((area) => (
            <article
              key={area.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm"
            >
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="relative size-14">
                  <Image
                    src={area.iconCircle}
                    alt=""
                    fill
                    className="object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name={area.icon} size={24} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {area.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
              </div>
              <div
                className="h-1 w-full"
                style={{ backgroundColor: area.accent }}
              />
            </article>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
