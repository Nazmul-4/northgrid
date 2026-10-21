import HeroSection from "@/components/sections/HeroSection";
import PartnerMarquee from "@/components/sections/PartnerMarquee";
import ColocationGrid from "@/components/sections/ColocationGrid";
import StarlinkSelector from "@/components/sections/StarlinkSelector";
import ComplianceSection from "@/components/sections/ComplianceSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PartnerMarquee />
      <ColocationGrid />
      <StarlinkSelector />
      <ComplianceSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}