import { HeroSection, WhyUsSection } from "@/components/Sections";
import { HiringProcessSection } from "@/components/Sections/HiringProcessSection";
import { TechSection } from "@/components/Sections/TechSection";
import { TestimonialSection } from "@/components/Sections/TestimonialSection";
import { TrustFactorSection } from "@/components/Sections/TrustFactorSection";
import { UserGuideSection } from "@/components/Sections/UserGuideSection";
import { WhyHireIndiaSection } from "@/components/Sections/WhyHireIndiaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyUsSection />
      <TechSection />
      <WhyHireIndiaSection />
      <TrustFactorSection />
      <HiringProcessSection />
      <UserGuideSection />
      <TestimonialSection />
    </>
  );
}
