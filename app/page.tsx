import Header from "@/components/Header";
import ScrollAtmosphere from "@/components/ScrollAtmosphere";
import ScrollShowcase from "@/components/ScrollShowcase";
import TechnicalPinScroll from "@/components/TechnicalPinScroll";
import ProjectLinks from "@/components/ProjectLinks";
import HeroSection from "@/components/sections/HeroSection";
import PresenceSection from "@/components/sections/PresenceSection";
import ProcessStepsSection from "@/components/sections/ProcessStepsSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#f7f7f3] text-[#171717]">
      <ScrollAtmosphere />
      <Header />
      <HeroSection />
      <PresenceSection />
      <TechnicalPinScroll />
      <ScrollShowcase />
      <ProjectLinks />
      <ProcessStepsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
