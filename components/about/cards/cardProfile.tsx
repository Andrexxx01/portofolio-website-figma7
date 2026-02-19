"use client"

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import PersonImage from "@/assets/pict-hero.svg";
import MailIcon from "@/assets/mail-01.svg";

export default function CardProfile() {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative w-full h-93.5 md:h-98.75 bg-brand-primary-300 rounded-2xl p-6 cursor-pointer overflow-hidden flex flex-col items-center justify-center"
      >
        {/* Name in the Back */}
        <AnimatePresence>
          {!isHovered && (
            <motion.h2
              key="name-back"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute text-center text-[#f39c3f] text-5xl sm:text-7xl md:text-8xl lg:text-[45px] xl:text-6xl font-extrabold mb-6"
            >
              ANDRE KURNIAWAN
            </motion.h2>
          )}
        </AnimatePresence>

        {/* Person Image */}
        <div className="absolute z-10 mt-16 lg:mt-24 xl:mt-12">
          <Image
            src={PersonImage}
            alt="PersonImage"
            className="w-100 lg:w-92 xl:w-102 h-auto object-cover"
          />
        </div>

        {/* Name in the Front (onHover) */}
        <AnimatePresence>
          {isHovered && (
            <motion.h2
              key="name-front"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute z-20 text-center text-[#f39c3f] text-5xl sm:text-7xl md:text-8xl lg:text-[45px] xl:text-6xl font-extrabold mb-6"
            >
              ANDRE KURNIAWAN
            </motion.h2>
          )}
        </AnimatePresence>

        { /* Button Hire Me */}
        <div className="relative z-20 mt-70 lg:mt-75 ">
            <Button className="rounded-full px-16 py-6 lg:px-22 text-md font-medium bg-brand-neutral-25 text-brand-neutral-950 hover:bg-brand-primary-200 transition-all duration-300"
            ><Image src={MailIcon} alt="Mail Icon" width={20} height={20} />
                Hire Me
            </Button>
        </div>
      </motion.div>
    );
}