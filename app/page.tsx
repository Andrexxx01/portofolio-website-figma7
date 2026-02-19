import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/hero/heroSection";
import HeroMarquee from "@/components/hero/heroMarquee";
import AboutSection from "@/components/about/aboutSection";
import MyProfessionalSkillSection from "@/components/myProfessionalSkill/myProfessionalSkillSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HeroMarquee />
      <AboutSection />
      <MyProfessionalSkillSection />
      Ini Halaman Homepage
    </>
  );
}
