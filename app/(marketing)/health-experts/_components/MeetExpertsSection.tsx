import Image from "next/image";

import { Container, SectionShell } from "@/components/ui/SectionShell";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/lib/icons";

import { SectionHeading } from "./SectionHeading";

type Expert = {
  name: string;
  title: string;
  experience: string;
  bio: string;
  image: string;
  specialtyIcon: IconName;
  accent: string;
};

const EXPERTS: Expert[] = [
  {
    name: "Dr. Anjali Sharma",
    title: "Naturopathy Specialist",
    experience: "12+ years experience",
    bio: "Specializes in plant-based healing and holistic wellness plans tailored to individual constitutions.",
    image: "/images/sky/expert-featured.png",
    specialtyIcon: "leaf-fill",
    accent: "#2D7A3A",
  },
  {
    name: "Dr. Rohan Verma",
    title: "Yoga & Wellness Coach",
    experience: "10+ years experience",
    bio: "Guides clients through transformative yoga practices for physical strength and mental clarity.",
    image: "/images/sky/expert-secondary-0.png",
    specialtyIcon: "yoga",
    accent: "#0056D2",
  },
  {
    name: "Dr. Meera Iyer",
    title: "Nutrition Expert",
    experience: "8+ years experience",
    bio: "Creates personalized nutrition plans rooted in Ayurvedic principles and modern dietary science.",
    image: "/images/sky/expert-secondary-1.png",
    specialtyIcon: "food-apple",
    accent: "#E8833A",
  },
  {
    name: "Dr. Arjun Kapoor",
    title: "Meditation Guide",
    experience: "15+ years experience",
    bio: "Helps clients develop deep meditation practices for mindfulness and emotional balance.",
    image: "/images/sky/expert-secondary-2.png",
    specialtyIcon: "flower-lotus",
    accent: "#7B5EA7",
  },
  {
    name: "Dr. Kavya Rao",
    title: "Sleep & Stress Specialist",
    experience: "9+ years experience",
    bio: "Focuses on sleep optimization and stress management through holistic lifestyle interventions.",
    image: "/images/sky/expert-secondary-0.png",
    specialtyIcon: "moon-sleep",
    accent: "#1A3A6B",
  },
];

export function MeetExpertsSection() {
  return (
    <SectionShell id="meet-experts" className="bg-white py-14 md:py-20">
      <Container>
        <SectionHeading className="mb-10 md:mb-14">
          Meet Our Health Experts
        </SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {EXPERTS.map((expert) => (
            <article
              key={expert.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm"
            >
              <div className="relative mx-4 mt-4 aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 20vw"
                />
              </div>

              <div className="flex flex-1 flex-col gap-2 p-4">
                <h3 className="text-base font-bold text-foreground">
                  {expert.name}
                </h3>
                <p
                  className="text-sm font-semibold"
                  style={{ color: expert.accent }}
                >
                  {expert.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {expert.experience}
                </p>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {expert.bio}
                </p>
              </div>

              <div
                className="flex items-center justify-center py-3"
                style={{ backgroundColor: `${expert.accent}15` }}
              >
                <Icon name={expert.specialtyIcon} size={22} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-start gap-4 rounded-2xl bg-[hsl(120,30%,25%)]/8 px-6 py-5 md:items-center md:px-8">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[hsl(120,30%,25%)]/15">
            <Icon name="shield-check" size={26} />
          </span>
          <p className="text-base leading-relaxed text-foreground/90 md:text-lg">
            Our experts are here to understand you, guide you and walk with you
            every step of your wellness journey.
          </p>
        </div>
      </Container>
    </SectionShell>
  );
}
