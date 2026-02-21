"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { experiences } from "./data";
import ExperienceCard from "./experienceCard";
import { useIsDesktop } from "@/hooks/useBreakpoint";

export default function MyWorkExperienceSection() {
  const ref = useRef(null);
  const isDesktop = useIsDesktop();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.1"],
  });

  {
    /* Vertical Dashed Line */
  }
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["10%", "74%"]);

  {
    /* Purple Dot */
  }
  const dot1 = 1;
  const dot2 = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const dot3 = useTransform(scrollYProgress, [0.45, 0.65], [0, 1]);

  return (
    <section ref={ref} className="w-full py-20 px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-display-md lg:text-display-2xl font-bold text-brand-neutral-950 mb-10 lg:mb-20">
          My Work Experience
        </h2>
        <div className="relative">
          {/* Vertical Dashed Line Motion */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute top-6 lg:top-10 lg:left-1/5 xl:left-5/26 w-0.5 bg-transparent border-l-2 border-dashed border-brand-neutral-400"
          />
          <div className="flex flex-col gap-10 lg:gap-18">
            {experiences.map((exp, index) => {
              const opacity = index === 0 ? dot1 : index === 1 ? dot2 : dot3;
              return (
                <div key={index} className="relative">
                  {/* Purple Dot */}
                  <motion.div
                    style={{ opacity }}
                    className="absolute -left-2.75 lg:left-5/28 flex items-center justify-center w-6 h-6 lg:w-10 lg:h-10 rounded-full border-2 border-dashed border-brand-neutral-400"
                  >
                    <div className="w-3.5 h-3.5 lg:w-6 lg:h-6 rounded-full bg-brand-primary-200" />
                  </motion.div>
                  <div className="ml-12 lg:ml-0">
                    <ExperienceCard experience={exp} isDesktop={isDesktop} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
