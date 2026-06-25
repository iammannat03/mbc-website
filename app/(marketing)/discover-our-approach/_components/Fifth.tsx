import {
  BarChart3,
  ChevronsDown,
  ShieldCheck,
  TreeDeciduous,
  Waypoints,
  type LucideIcon,
} from "lucide-react";

import { Container, SectionShell } from "@/components/ui/SectionShell";

import { FlowArrow } from "./ApproachFlowShared";

type Step = {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    icon: BarChart3,
    iconColor: "#2473D9",
    title: "SKY Tracking",
    description: "Continuous vital signs collection",
  },
  {
    icon: Waypoints,
    iconColor: "#026D31",
    title: "AI Insights",
    description: "Contextual pattern analysis",
  },
  {
    icon: TreeDeciduous,
    iconColor: "#026D31",
    title: "Expert Wisdom",
    description: "Naturopathy & ancient practices",
  },
  {
    icon: ShieldCheck,
    iconColor: "#2473D9",
    title: "Support",
    description: "Personalized daily guidance",
  },
];

function StepIcon({ step }: { step: Step }) {
  const Icon = step.icon;

  return (
    <div className="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] ring-1 ring-black/5 md:size-[72px]">
      <Icon
        className="h-6 w-6 md:h-7 md:w-7"
        style={{ color: step.iconColor }}
      />
    </div>
  );
}

function StepCopy({ step }: { step: Step }) {
  return (
    <>
      <h3 className="text-base font-bold text-[#0B1C30] md:text-base">
        {step.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground md:text-sm">
        {step.description}
      </p>
    </>
  );
}

const Fifth = () => {
  return (
    <SectionShell className="py-10 md:py-14">
      <Container>
        <div className="mb-10 flex flex-col items-center gap-2 text-center md:mb-12">
          <h2 className="text-2xl font-bold text-[#026D31] md:text-4xl">
            Our Simple Flow
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
            From data points to natural vitality, our closed-loop system ensures
            you&apos;re always moving toward your goal.
          </p>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="relative md:hidden">
          <div
            className="absolute bottom-8 left-8 top-8 w-px bg-[#C5CED8]"
            aria-hidden
          />

          <div className="flex flex-col">
            {STEPS.map((step, index) => (
              <div key={step.title}>
                <div className="flex items-center gap-4">
                  <StepIcon step={step} />
                  <div className="flex min-w-0 flex-col gap-1 py-1">
                    <StepCopy step={step} />
                  </div>
                </div>

                {index < STEPS.length - 1 ? (
                  <div className="flex size-16 items-center justify-center">
                    <ChevronsDown
                      className="h-5 w-5 text-[#2473D9]/70"
                      aria-hidden
                    />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: horizontal flow */}
        <div className="hidden md:block">
          <div className="relative mx-auto flex items-start">
            <div
              className="pointer-events-none absolute inset-x-8 top-9 h-px bg-[#C5CED8]"
              aria-hidden
            />

            {STEPS.map((step, index) => (
              <div key={step.title} className="contents">
                <div className="flex min-w-0 flex-1 flex-col items-center gap-3 px-2 text-center">
                  <StepIcon step={step} />
                  <div className="flex flex-col items-center justify-center gap-1 text-center">
                    <StepCopy step={step} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </SectionShell>
  );
};

export default Fifth;
