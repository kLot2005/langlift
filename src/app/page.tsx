import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import PricingSection from "@/components/sections/PricingSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PricingSection/>
      <ContactSection/>
    </>
  );
}
