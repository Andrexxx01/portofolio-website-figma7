"use client"

import CardWhyChoose from "./cards/cardWhyChoose";
import CardExpertSkill from "./cards/cardExpertSkill";
import CardExperience from "./cards/cardExperience";
import CardProfile from "./cards/cardProfile";
import CardBuildingDigital from "./cards/cardBuildingDigital";

export default function AboutSection() {
    return (
      <section className="w-full bg-[#F5F6F8] py-24 px-6 lg:px-16">
        {/* Header Text */}
        <div className="max-w-7xl mx-auto mt-10 lg:mt-20 mb-16">
          <p className="text-brand-neutral-950 text-md lg:text-lg font-semibold mb-4">
            Hi, I'm Andre Kurniawan 👋
          </p>
          <h2 className="text-xl lg:text-display-md font-semibold text-brand-neutral-950">
            Building digital products with a focus on crafting visually engaging
            and seamless user interfaces using React.js.{" "}
            <span className="text-xl lg:text-display-md font-semibold text-brand-neutral-400">
              Prioritizing responsive design, performance optimization, and
              user-centric features to deliver exceptional web experiences.
            </span>
          </h2>
        </div>

        {/* Card Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
            <CardWhyChoose />
            <CardExpertSkill />
            <CardExperience />
            <CardProfile />
            <CardBuildingDigital />
        </div>
      </section>
    );
}