"use client";

import { useState, useEffect } from "react";
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
    const [isDarkSection, setIsDarkSection] = useState(true);

    useEffect(() =>{
        const hero = document.getElementById("hero");
        const marquee = document.getElementById("marquee");
        if (!hero && !marquee) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const isVisible = entries.some(entry => entry.isIntersecting);
                setIsDarkSection(isVisible);
            },
            { threshold: 0,}
        );
        if (hero) observer.observe(hero);
        if(marquee) observer.observe(marquee);
        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id:string) => {
        const element = document.getElementById(id);
        if (!element) return;

        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
        setIsOpen(false);
    };
    const textColor = isDarkSection ? "text-white" : "text-brand-neutral-950";
    const logoSrc = isDarkSection ? Logo : LogoBlack;
    const logoText = isDarkSection ? "text-brand-primary-100" : "text-brand-neutral-950";
    const iconFilter = isDarkSection ? "" : "invert";
    const buttonColor = isDarkSection ? "bg-brand-neutral-25" : "bg-brand-neutral-400";

    return (
      <nav className="w-full fixed z-40">
        <div className="w-full bg-transparent backdrop-blur-md mx-auto lg:px-32">
          <div className="w-full flex items-center justify-between p-6">
            {/* Logo */}
            <div className="flex items-center gap-2.25">
              <Image src={logoSrc} alt="Logo" className="w-7 h-7" />
              <span className={`${logoText} text-body-lg`}>
                Your Logo
              </span>
            </div>

            {/* Desktop Menu */}
            <div className={`hidden lg:flex items-center gap-8 ${textColor}`}>
              {[
                { label: "Home", id: "hero" },
                { label: "About", id: "about" },
                { label: "Skill", id: "skill" },
                { label: "Projects", id: "projects" },
                { label: "FAQ", id: "faq" },
                { label: "Contact", id: "contact" },].map(
                (item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-md hover:opacity-70 transition cursor-pointer"
                  >
                    {item.label}
                  </button>
                ),
              )}
            </div>

            {/* Desktop Button (Using Shadcn) */}
            <div className="hidden lg:block">
              <Button className={`rounded-full ${buttonColor} flex items-center gap-2 hover:bg-gray-200 transition cursor-pointer text-brand-neutral-950 text-sm font-medium px-12 py-6`}>
                <Image src={MailIcon} alt="MailIcon" width={20} height={20} />
                Hire Me
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(true)}
              className="lg:hidden cursor-pointer"
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
              <Image src={MenuIcon} alt="MenuIcon" width={24} height={24} className={`${iconFilter}`} />
            </motion.button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              className="fixed inset-0 bg-white z-50 flex flex-col p-6 lg:hidden"
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
                {[
                  { label: "Home", id: "hero" },
                  { label: "About", id: "about" },
                  { label: "Skill", id: "skill" },
                  { label: "Projects", id: "projects" },
                  { label: "FAQ", id: "faq" },
                  { label: "Contact", id: "contact" },].map(
                  (item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="ml-2 text-left hover:opacity-60 transition cursor-pointer"
                    >
                      {item.label}
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

