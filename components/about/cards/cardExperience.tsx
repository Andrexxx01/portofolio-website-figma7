"use client"

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import BackgroundCard from "@/assets/bg-card-3.svg";
import Portofolio1 from "@/assets/portofolio1.svg";
import Portofolio2 from "@/assets/portofolio2.svg";
import Portofolio3 from "@/assets/portofolio3.svg";
import Portofolio4 from "@/assets/portofolio4.svg";
import Portofolio5 from "@/assets/portofolio5.svg";
import Portofolio6 from "@/assets/portofolio6.svg";

export default function CardExperience() {
    const portofolios = [
        Portofolio1,
        Portofolio2,
        Portofolio3,
        Portofolio4,
        Portofolio5,
        Portofolio6
    ];
    const [groupIndex, setGroupIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setGroupIndex((prev) => (prev === 0 ? 1 : 0));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const visibleItems = groupIndex === 0 ? portofolios.slice(0,3) : portofolios.slice(3,6);

    return (
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
        }} 
        className="relative w-full h-93.5 md:h-98.75 rounded-2xl p-6 cursor-pointer overflow-hidden"
      >
        {/* Background */}
        <Image src={BackgroundCard} alt="BackgroundCard3" fill className="object-cover z-10" priority/>

        { /* Content */}
        <div className="relative z-10 flex flex-col h-full items-center mt-18 lg:mt-20">
          { /* Header */}
          <div>
            <h3 className="text-white text-display-md lg:text-display-xl font-bold mb-18 sm:mb-10 md:mb-2 lg:mb-4 text-center">
                5+ Years Experience
            </h3>
          </div>

          {/* Portofolio */}
          <div className="mt-6">
            <div className="grid grid-cols-3 gap-4">
              {[0, 1, 2].map((slot) =>{
                const index = groupIndex === 0 ? slot : slot + 3;
                const item = portofolios[index];

                return (
                  <AnimatePresence mode="wait" key={slot}>
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: slot * 0.4,
                      }}
                      className="rounded-xl overflow-hidden"
                    >
                      <Image 
                        src={item}
                        alt="Portofolio"
                        className="w-full h-auto object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    );
}