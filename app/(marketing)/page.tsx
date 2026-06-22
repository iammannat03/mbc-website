import type { Metadata } from "next";

import { CompanionCtaSection } from "./_components/landing/CompanionCtaSection";
import { EcosystemSection } from "./_components/landing/EcosystemSection";
import { HeroSection } from "./_components/landing/HeroSection";
import { JourneyCardsSection } from "./_components/landing/JourneyCardsSection";
import { StrengthSection } from "./_components/landing/StrengthSection";

export const metadata: Metadata = {
  title: "ByeBimari — Smart Health Tracking Guided by Natural Health Experts",
  description:
    "One ecosystem for smart tracking, AI insights, natural health experts, and daily guidance on your wellness transformation journey.",
};

export default function HomePage() {
  return (
    <div className="full-bleed">
      <HeroSection />
      <EcosystemSection />
      <JourneyCardsSection />
      <StrengthSection />
      <CompanionCtaSection />
    </div>
  );
}
