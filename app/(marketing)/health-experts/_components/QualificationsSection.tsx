import { Container, SectionShell } from "@/components/ui/SectionShell";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/lib/icons";

import { SectionHeading } from "./SectionHeading";

type Qualification = {
  title: string;
  description: string;
  icon: IconName;
};

const QUALIFICATIONS: Qualification[] = [
  {
    title: "Certified",
    description: "Board-certified practitioners with recognized credentials.",
    icon: "shield-check",
  },
  {
    title: "Extensive Experience",
    description: "Years of hands-on practice across diverse wellness domains.",
    icon: "star",
  },
  {
    title: "Ancient Wisdom",
    description: "Deep knowledge of Ayurveda and traditional healing systems.",
    icon: "flower-lotus-duotone",
  },
  {
    title: "Modern Approach",
    description: "Evidence-based methods integrated with contemporary science.",
    icon: "brain",
  },
  {
    title: "Continuous Learning",
    description: "Ongoing training to stay at the forefront of wellness.",
    icon: "sunrise",
  },
];

export function QualificationsSection() {
  return (
    <SectionShell
      id="qualifications"
      className="full-bleed bg-[#f7f6f2] py-14 md:py-20"
    >
      <Container>
        <SectionHeading className="mb-10 md:mb-14">
          Expertise Backed by Qualifications
        </SectionHeading>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {QUALIFICATIONS.map((item, index) => (
            <div key={item.title} className="relative flex flex-col items-center text-center">
              {index > 0 ? (
                <div
                  aria-hidden
                  className="absolute -left-4 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-border lg:block"
                />
              ) : null}
              <span className="mb-4 flex size-14 items-center justify-center rounded-full bg-[hsl(120,30%,25%)]/10">
                <Icon name={item.icon} size={28} />
              </span>
              <h3 className="mb-2 text-base font-bold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
