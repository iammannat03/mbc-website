import { DailyRecommendationsSection } from "./_components/DailyRecommendationsSection";
import { HeroSection } from "./_components/HeroSection";
import Second from "./_components/Second";
import { WeeklyTrendsSection } from "./_components/WeeklyTrendsSection";

export default function AiInsightsPage() {
  return (
    <div className="full-bleed">
      <HeroSection />
      <Second />
      <WeeklyTrendsSection />
      <DailyRecommendationsSection />
    </div>
  );
}
