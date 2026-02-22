import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/hero/heroSection";
import HeroMarquee from "@/components/hero/heroMarquee";
import AboutSection from "@/components/about/aboutSection";
import MyProfessionalSkillSection from "@/components/myProfessionalSkill/myProfessionalSkillSection";
import WhyChooseMeSection from "@/components/whyChooseMe/whyChooseMe";
import MyLatestWorkSection from "@/components/myLatestWork/myLatestWorkSection";
import MyWorkExperienceSection from "@/components/myWorkExperience/myWorkExperienceSection";
import SuccessStoriesSection from "@/components/successStories/successStoriesSection";
import QnaSection from "@/components/qna/qnaSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HeroMarquee />
      <AboutSection />
      <MyProfessionalSkillSection />
      <WhyChooseMeSection />
      <MyLatestWorkSection />
      <MyWorkExperienceSection />
      <SuccessStoriesSection />
      <QnaSection />
      Ini Halaman Homepage
    </>
  );
}
