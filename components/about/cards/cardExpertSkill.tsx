"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import YellowStar from "@/assets/yellow-star.svg";
import LogoCSS from "@/assets/css.svg";
import LogoJavascript from "@/assets/javascript.svg";
import LogoHTML from "@/assets/html.svg";
import LogoExpress from "@/assets/express.svg";
import LogoSequelize from "@/assets/sequelize.svg";
import LogoTypescript from "@/assets/typescript.svg";
import LogoReact from "@/assets/react.svg";
import LogoDocker from "@/assets/docker.svg";
import LogoPostgreSQL from "@/assets/posgresql.svg";
import LogoMongoDB from "@/assets/mongodb.svg";
import type { StaticImageData } from "next/image";

function LogoRow({logos,direction = "left", duration = 20} : {logos:StaticImageData[]; direction?: "left" | "right"; duration?: number}) {
    const duplicated = [...logos,...logos,...logos];

    return (
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-8 w-max"
          animate={{
            x: direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicated.map((logo, index) => (
            <div  key={index} className="flex items-center justify-center w-13 h-13 rounded-full bg-brand-neutral-800">
              <img
                src={logo.src}
                alt="logo"
                className="w-7.5 h-7.5 object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    );
}

export default function CardExpertSkill() {
    const row1 = [ LogoCSS, LogoJavascript, LogoHTML, LogoExpress, LogoSequelize,];
    const row2 = [ LogoTypescript, LogoReact, LogoDocker, LogoPostgreSQL, LogoMongoDB,];

    const scrollToSection = () => {
      const element = document.getElementById("skill");
      if (!element) return;

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    return (
      <motion.div
        onClick={scrollToSection}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        className="w-full h-93.5 md:h-98.75 bg-brand-neutral-900 rounded-2xl p-6 cursor-pointer flex flex-col"
      >
        {/* Header */}
        <div className="mt-2">
          <h3 className="text-white text-display-sm lg:text-display-md font-bold mb-2">
            Expert Skill
          </h3>
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <img
                key={i}
                src={YellowStar.src}
                alt="YellowStar"
                className="w-6 h-6 lg:w-8 lg:h-8"
              />
            ))}
          </div>
          <p className="text-white/90 text-sm lg:text-lg">
            Mastering modern technologies to deliver impactful and
            efficientsolutions
          </p>
        </div>

        {/* Logo Rows */}
        <div className="flex flex-col gap-4 mt-6 lg:mt-4">
          <LogoRow logos={row1} direction="left" duration={20} />
          <LogoRow logos={row2} direction="right" duration={20} />
        </div>
      </motion.div>
    );
}