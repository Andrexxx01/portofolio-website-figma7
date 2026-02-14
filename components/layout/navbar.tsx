"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Logo from "@/assets/logo-symbol.svg";
import MenuIcon from "@/assets/menu-04.svg";
import MailIcon from "@/assets/mail-01.svg";
import LogoBlack from "@/assets/logo-symbol-black.svg";
import CloseIcon from "@/assets/Close.svg";
import { Button } from "../ui/button";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <nav className="w-full bg-[#1A0033]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-6">
          {/* Logo */}
          <div className="flex items-center gap-2.25">
            <Image src={Logo} alt="Logo" className="w-7 h-7" />
            <span className="text-brand-primary-100 text-lg font-semibold">
              Your Logo
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-white">
            {["Home", "About", "Skill", "Projects", "FAQ", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  className="text-md hover:opacity-70 transition cursor-pointer"
                >
                  {item}
                </button>
              ),
            )}
          </div>

          {/* Desktop Button (Using Shadcn) */}
          <div className="hidden md:block">
            <Button className="rounded-full bg-brand-neutral-25 flex items-center gap-2 hover:bg-gray-200 transition cursor-pointer text-brand-neutral-950 text-sm font-medium px-12 py-6">
              <Image src={MailIcon} alt="MailIcon" width={20} height={20} />
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(true)}
            className="md:hidden cursor-pointer"
            whileHover={{
              scale: 1.25,
              rotate: [0, -45, 45, 0],
            }}
            whileTap={{ scale: 0.9 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
          >
            <Image src={MenuIcon} alt="MenuIcon" width={24} height={24} />
          </motion.button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              className="fixed inset-0 bg-white z-10 flex flex-col p-8 md:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <Image src={LogoBlack} alt="LogoBlack" className="w-7 h-7" />
                  <span className="font-semibold text-lg text-brand-neutral-950">
                    Your Logo
                  </span>
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer"
                  whileHover={{
                    scale: 1.25,
                    rotate: [0, -45, 45, 0],
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src={CloseIcon}
                    alt="CloseIcon"
                    width={24}
                    height={24}
                  />
                </motion.button>
              </div>

              {/* Mobile Menu List */}
              <div className="flex flex-col gap-8 text-md text-brand-neutral-950">
                {["Home", "About", "Skill", "Projects", "FAQ", "Contact"].map(
                  (item) => (
                    <button
                      key={item}
                      className="ml-2 text-left hover:opacity-60 transition cursor-pointer"
                    >
                      {item}
                    </button>
                  ),
                )}
              </div>

              {/* Bottotm Button */}
              <div className="mt-10">
                <Button className="w-full rounded-full py-6 flex items-center justify-center gap-2 bg-brand-primary-300 text-white cursor-pointer hover:bg-purple-800 transition text-sm font-medium">
                  <Image
                    src={MailIcon}
                    alt="MailIcon"
                    width={20}
                    height={20}
                    className="invert"
                  />
                  Hire Me
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    );
}

