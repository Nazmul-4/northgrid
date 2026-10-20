import HeroSection from "@/components/sections/HeroSection";
import PartnerMarquee from "@/components/sections/PartnerMarquee";
import ColocationGrid from "@/components/sections/ColocationGrid";
import StarlinkSelector from "@/components/sections/StarlinkSelector";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PartnerMarquee />
      <ColocationGrid />
      <StarlinkSelector />
    </main>
  );
}