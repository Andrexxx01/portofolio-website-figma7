"use client"

import Image from "next/image";
import Avatar1 from "@/assets/Male Avatar 01.svg";
import Avatar2 from "@/assets/Female Avatar 06.svg";
import Avatar3 from "@/assets/Male Avatar 10.svg";
import Avatar4 from "@/assets/Female Avatar 07.svg";
import { motion } from "framer-motion";
import { useIsDesktop } from "@/hooks/useBreakpoint";

export default function CardClients() {
    const isDesktop = useIsDesktop();

    const position = isDesktop
      ? { x: 350, y: 90 }
      : { x: 160, y: 30};

    const baseRotation = 5.31;

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
        className="absolute z-10 max-w-40 lg:max-w-60 backdrop-blur-md bg-transparent border border-brand-neutral-25/10 shadow-xl rounded-2xl px-4 py-4 flex flex-col gap-3"
      >
        <h1 className="text-brand-neutral-25 font-bold text-display-xs lg:text-display-xl">
            50+
        </h1>
        <p className="text-brand-neutral-25 font-medium text-xs lg:text-sm mt-1">
            Global Clients
        </p>
        <div className="flex items-center -space-x-3">
          {[Avatar1, Avatar2, Avatar3, Avatar4].map((avatar, i) =>(
            <Image key={i} src={avatar} alt="client" className="w-10 h-10 lg:w-13 lg:h-13 rounded-full" />
          ))}
        </div>
      </motion.div>
    );
}