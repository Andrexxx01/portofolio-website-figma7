"use client"

import Image from "next/image";
import Star from "@/assets/yellow-star.svg";
import { motion } from "framer-motion";
import { useIsDesktop } from "@/hooks/useBreakpoint";

export default function CardRating() {
    const isDesktop = useIsDesktop();
    const position = isDesktop
      ? { x: -300, y:-90 }
      : { x: -40, y:-250};
    const baseRotation = isDesktop ? 3.15 : 6.73;
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
        className="absolute z-10 max-w-36.5 lg:max-w-50 backdrop-blur-md bg-transparent border border-brand-neutral-25/10 shadow-xl rounded-2xl px-4 py-4 flex flex-col items-start gap-3"
      >
        <h1 className="text-brand-neutral-25 font-bold text-display-xs lg:text-display-xl">
          5.0
        </h1>
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <Image
              key={index}
              src={Star}
              alt="Star"
              className="w-6 h-6 lg:w-8 lg:h-8"
            />
          ))}
        </div>
        <div>
          <p className="text-brand-neutral-25 font-medium text-xs lg:text-sm">
            Many Clients Trust with me
          </p>
        </div>
      </motion.div>
    );
}