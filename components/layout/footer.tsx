"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import LogoSymbol from "@/assets/logo-symbol.svg";
import Social1 from "@/assets/Social Media Icon-1-white.svg";
import Social2 from "@/assets/Social Media Icon-2-white.svg";
import Social3 from "@/assets/Social Media Icon-3-white.svg";

export default function FooterSection() {
    const socials = [Social1, Social2, Social3];

    return (
      <footer className="w-full bg-brand-primary-400 px-6 lg:px-16 py-12 lg:py-6">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout */}
          <div className="flex flex-col gap-6 lg:hidden">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image src={LogoSymbol} alt="Logo" className="w-7 h-7" />
              <span className="text-white text-[21.33px] leading-8 font-semibold">
                Your Logo
              </span>
            </div>
            {/* Copyright */}
            <p className="text-brand-neutral-25 text-sm">
              © 2026 Andre Kurniawan. All rights reserved.
            </p>
            {/* Social Icon */}
            <div className="flex gap-4 mt-2">
              {socials.map((icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-[#410292] cursor-pointer"
                >
                  <Image
                    src={icon}
                    alt={`social-${index}`}
                    className="w-6 h-6"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* desktop Layout */}
          <div className="hidden lg:flex items-center justify-between">
            {/* Left Side */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <Image src={LogoSymbol} alt="logo" className="w-7 h-7" />
                <span className="text-brand-neutral-25 text-[21.33px] leading-8 font-semibold">
                  Your Logo
                </span>
              </div>
              {/* Copyright */}
              <p className="text-brand-neutral-25 text-md">
                © 2026 Andre Kurniawan. All rights reserved.
              </p>
            </div>
            {/* Social Icon */}
            <div className="flex gap-4 -mr-6">
              {socials.map((icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-[#410292] cursor-pointer"
                >
                  <Image
                    src={icon}
                    alt={`social-${index}`}
                    className="w-6 h-6"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
}