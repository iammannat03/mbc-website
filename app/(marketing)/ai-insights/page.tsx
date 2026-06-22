import { DailyRecommendationsSection } from "./_components/DailyRecommendationsSection";
import { FeatureShowcaseSection } from "./_components/FeatureShowcaseSection";
import { HeroSection } from "./_components/HeroSection";
import { PersonalizedInsightsSection } from "./_components/PersonalizedInsightsSection";
import { WeeklyTrendsSection } from "./_components/WeeklyTrendsSection";

export default function AiInsightsPage() {
  return (
    <div className="full-bleed">
      <HeroSection />
      <FeatureShowcaseSection />
      <PersonalizedInsightsSection />
      <WeeklyTrendsSection />
      <DailyRecommendationsSection />
    </div>
  );
}
