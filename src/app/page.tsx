import { ArcSection } from "@/components/home/ArcSection";
import { HomeHero } from "@/components/home/HomeHero";
import { OperatorsTeaser } from "@/components/home/OperatorsTeaser";
import {
  FinalCta,
  HomeFaq,
  VentureGallery,
  VisionMission,
} from "@/components/home/VisionMission";

export default function HomePage() {
  return (
    <main id="main">
      <HomeHero />
      <ArcSection />
      <OperatorsTeaser />
      <VentureGallery />
      <VisionMission />
      <HomeFaq />
      <FinalCta />
    </main>
  );
}
