"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import YellowDiamond from "@/assets/yellow-diamond.svg";

const items = [
    "Frontend Developer",
    "Expert React",
    "Programmers",
    "Mobile Developers",
];

export default function HeroMarquee() {
    return (
        <div className="absolute -left-1 top-170 lg:top-214 w-full overflow-hidden rotate-[-1.89deg] z-41">
          {/* Background strip */}
          <div className="bg-brand-neutral-950 py-6">
            <motion.div
              className="flex gap-8 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Duplicate items */}
              {[...items, ...items].map((text,index) =>(
                <div key={index} className="flex items-center gap-8">
                    <Image src={YellowDiamond} alt="YellowDiamond" className="w-8 h-8.5 lg:w-12 lg:h-13 ml-7 lg:ml-14" />
                    <span className="text-brand-neutral-25 font-bold text-display-xs lg:text-display-2xl">
                        {text}
                    </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
    )
}