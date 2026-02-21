"use client"

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface SkillRowProps {
    skills: string[];
    direction?: "left" | "right";
    duration?: number;
}

function SkillRow({
    skills, direction = "left", duration = 20,
} : SkillRowProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const calculateOffset = () => {
            if (!containerRef.current || !contentRef.current) return;
            const containerWidth = containerRef.current.offsetWidth;
            const contentWidth = contentRef. current.scrollWidth;
            const maxMove = (contentWidth - containerWidth) / 2;
            setOffset(maxMove > 0 ? maxMove : 0);
        };
        calculateOffset();
        window.addEventListener("resize", calculateOffset);
        return () => window.removeEventListener("resize", calculateOffset);
    }, []);

    const half = offset /2;

    return (
        <div ref={containerRef} className="overflow-hidden">
            <motion.div 
              ref={contentRef}
              className="flex gap-4 w-max"
              initial={{ x: -half }}
              animate={{
                x: direction === "left" ? [-half, -offset, 0, -half] : [-half, 0, -offset, -half],
              }}
              transition={{
                duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            >
              {skills.map((skill, index) =>(
                <div key={index} className="px-5 py-2 rounded-full bg-white text-brand-neutral-950 text-sm whitespace-nowrap">
                    {skill}
                </div>
              ))}
            </motion.div>
        </div>        
    );
}

export default function CardWhyChoose() {
    const row1 = [
      "TypeScript Proficiency",
      "React Expert",
      "Fullstack Developer",
      "Resposive Design",
      "UI/UX Design Proficiency",
      "5 Years Experience",
    ];
    const row2 = [
      "UI/UX Design Proficiency",
      "React Expert",
      "React Expert",
      "5 Years Experience",
      "React Expert",
      "Maintainable Code",];
    const row3 = ["Maintainable Code", "React Expert", "Clean Code", "Performance Optimation", "TypeScript Proficiency", "React Expert"];

    const scrollToSection = () => {
      const element = document.getElementById("unique");
      if (!element) return;

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    return (
      <motion.div
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        onClick={scrollToSection}
        className="w-full h-93.5 md:h-98.75 bg-brand-secondary-300 cursor-pointer rounded-2xl p-6 flex flex-col gap-3"
      >
        {/* Title */}
        <div>
          <h3 className="text-white text-display-sm lg:text-display-md font-bold mb-4">
            Why Choose Me
          </h3>
          <p className="text-white/90 text-sm lg:text-lg md:-mt-4 lg:mt-0 lg:mb-6 mb-8">
            Delivering excellence with innovative solutions and seamless
            execution.
          </p>
        </div>

        {/* Skill Row */}
        <div className="flex flex-col gap-4 -mx-6">
          <SkillRow skills={row1} direction="left" duration={20} />
          <SkillRow skills={row2} direction="right" duration={20} />
          <SkillRow skills={row3} direction="left" duration={20} />
        </div>
      </motion.div>
    );
}