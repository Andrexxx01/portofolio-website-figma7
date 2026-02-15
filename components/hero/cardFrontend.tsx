"use client"

import Image from "next/image";
import WhiteCheck from "@/assets/checkmark.svg";
import { motion } from "framer-motion";
import { useIsDesktop } from "@/hooks/useBreakpoint";

export default function CardFrontend() {
    const isDesktop = useIsDesktop();

    const position = isDesktop
      ? { x: -350, y: 140 }
      : { x: -108, y: 50 };
    
    const baseRotation = isDesktop ? -3.24 : -10.09;

    return (
      <motion.div
        animate={{
          ...position,
          rotate: baseRotation,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 15,
        }}
        whileHover={{
          rotate: [
            baseRotation,
            baseRotation - 10,
            baseRotation + 10,
            baseRotation,
          ],
          transition: {
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileTap={{
          rotate: [
            baseRotation,
            baseRotation - 10,
            baseRotation + 10,
            baseRotation,
          ],
          transition: {
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute z-10 max-w-44 lg:max-w-70 backdrop-blur-md bg-transparent border border-brand-neutral-25/10 shadow-xl rounded-2xl px-4 py-4 flex flex-col items-start gap-3"
      >
        <p className="text-brand-neutral-25 font-bold text-sm lg:text-display-xs">
          Frontend Developer
        </p>
        <div className="flex items-center gap-1">
          <Image src={WhiteCheck} alt="WhiteCheck" width={24} height={24} />
          <p className="text-brand-neutral-25 font-medium text-sm">
            React Expert
          </p>
        </div>
      </motion.div>
    );
}