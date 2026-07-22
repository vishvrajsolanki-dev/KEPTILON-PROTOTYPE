import { ArcSection } from "@/components/home/ArcSection";
import { HomeHero } from "@/components/home/HomeHero";
import { OperatorsTeaser } from "@/components/home/OperatorsTeaser";
import { FinalCta, VisionMission } from "@/components/home/VisionMission";

/** Design Lock §5 Home — exact section order */
export default function HomePage() {
  return (
    <main id="main">
      <HomeHero />
      <ArcSection />
      <OperatorsTeaser />
      <VisionMission />
      <FinalCta />
    </main>
  );
}
