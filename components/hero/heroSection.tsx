"use client";

import Image from "next/image";
import HeroImage from "@/assets/pict-hero.svg";
import CardRating from "./cardRating";
import CardFrontend from "./cardFrontend";
import CardClients from "./cardClients";
import HeroMarquee from "./heroMarquee";

export default function HeroSection() {
    return (
      <section className="relative w-full h-175 lg:h-221.5 overflow-hidden bg-brand-primary-400">
        {/* Circle Background */}
        <div className="flex items-center justify-center mt-145 lg:mt-187 pointer-events-none z-0">
          <div className="absolute w-152 h-152 lg:w-254 lg:h-254 bg-brand-primary-300 rounded-full opacity-20"></div>
          <div className="absolute w-119 h-119 lg:w-200 lg:h-200 bg-brand-primary-300 rounded-full opacity-40"></div>
          <div className="absolute w-86 h-86 lg:w-145 lg:h-145 bg-brand-primary-300 rounded-full opacity-60"></div>
          <div className="absolute w-54 h-54 lg:w-90 lg:h-90 bg-brand-primary-300 rounded-full opacity-80"></div>
        </div>

        {/* Person Name */}
        <h1 className="absolute top-25 lg:top-36 w-full z-30 text-center text-[38px] leading-14 sm:text-[64px] sm:leading-20 md:text-[76px] md:leading-30 text-brand-neutral-25 font-extrabold lg:text-[100px] lg:leading-48.75 xl:text-[128px]">
          ANDRE KURNIAWAN
        </h1>

        {/* Person Image */}
        <div className="relative flex items-center justify-center -mt-73 lg:-mt-134">
          <Image
            src={HeroImage}
            alt="HeroImage"
            loading="eager"
            className="w-100 h-110 lg:w-180 lg:h-190 object-cover z-30"
          />
          {/* Floating Card */}
          <CardRating />
          <CardFrontend />
          <CardClients />
        </div>
        
      </section>
    );
}