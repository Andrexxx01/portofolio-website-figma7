"use client"

import { motion } from "framer-motion"
import Image from "next/image";
import BackgroundCard from "@/assets/bg-card5.svg";
import StarsIcon from "@/assets/stars-card5.svg";
import GermanyFlag from "@/assets/germany-flag.svg";
import USAFlag from "@/assets/usa-flag.svg";
import IndonesiaFlag from "@/assets/indonesia-flag.svg";
import WhiteSpot from "@/assets/white-spot.svg";

export default function CardBuildingDigital() {
    return (
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        className="relative w-full h-113 md:h-98.75 lg:col-span-2 rounded-2xl overflow-hidden cursor-pointer"
      >
        {/* Background */}
        <Image
          src={BackgroundCard}
          alt="BackgroundCard5"
          fill
          className="object-cover"
          priority
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
          {/* Header */}
          <div>
            <h3 className="text-display-sm lg:text-display-md font-bold">
              Building Digital <br />
              Products{" "}
              <Image
                src={StarsIcon}
                alt="StarsIcon"
                width={24}
                height={24}
                className="inline-block ml-1"
              />
            </h3>
          </div>

          {/* Stats Section */}
          <div className="relative flex flex-col gap-10 md:gap-4 lg:flex-row lg:justify-start lg:gap-20">
            <div className="relative">
              <h4 className="text-display-lg lg:text-display-2xl font-bold">
                50+
              </h4>
              <p className="text-sm lg:text-lg font-medium text-white/90">
                Global Client's Handle
              </p>
            </div>
            {/* Germany Flag */}
            <div className="absolute -top-[3%] left-[47%] lg:-top-[80%] lg:left-[45%] xl:-top-[170%] xl:left-[48%]">
              <Image
                src={GermanyFlag}
                alt="GermanyFlag"
                width={50}
                height={32}
              />
              {/* White blinking spot */}
              <motion.div
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-6 top-1/8 -translate-y-1/2"
              >
                <Image src={WhiteSpot} alt="WhiteSpot" width={16} height={16} />
              </motion.div>
            </div>

            <div className="relative">
              <h4 className="text-display-lg lg:text-display-2xl font-bold">
                99%
              </h4>
              <p className="text-sm lg:text-lg font-medium text-white/90">
                Client Satisfaction Rate
              </p>
            </div>
            {/* USA Flag */}
            <div className="absolute top-[20%] left-[88%] lg:left-[84%] lg:-top-[90%] xl:left-[84%] xl:-top-[200%]">
              <Image src={USAFlag} alt="USAFlag" width={50} height={32} />
              {/* White blinking spot */}
              <motion.div
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-6 top-1/8 -translate-y-1/2"
              >
                <Image src={WhiteSpot} alt="WhiteSpot" width={16} height={16} />
              </motion.div>
            </div>

            <div className="relative">
              <h4 className="text-display-lg lg:text-display-2xl font-bold">
                100+
              </h4>
              <p className="text-sm lg:text-lg font-medium text-white/90">
                Project Delivered
              </p>
            </div>
            {/* Indonesia Flag */}
            <div className="absolute top-[60%] left-[92%] lg:left-[96%] lg:top-[0%] xl:left-[90%] xl:-top-[20%]">
              <Image
                src={IndonesiaFlag}
                alt="IndonesiaFlag"
                width={50}
                height={32}
              />
              {/* White blinking spot */}
              <motion.div
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-6 top-1/8 -translate-y-1/2"
              >
                <Image src={WhiteSpot} alt="WhiteSpot" width={16} height={16} />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    );
}