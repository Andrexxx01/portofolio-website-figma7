"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { type Skill, skills } from "./data";
import SkillCard from "./skillCard";
import PaginationLeft from "@/assets/pagination-left.svg";
import PaginationMiddle from "@/assets/pagination-middle.svg";
import PaginationRight from "@/assets/pagination-right.svg";
import { useIsDesktop } from "@/hooks/useBreakpoint";

export default function SkillCarousel() {
    const isDesktop = useIsDesktop();
    const [page, setPage] = useState(0);
    const nextPage = () => {
        setPage((prev) => (prev === 2 ? 0 : prev + 1));
    };

    { /* mobile - 3 cards per page - 3-3-4 because total 10 cards with 3 dot pagination image */ }
    let mobileItems: Skill[] = [];
    if (page === 0) mobileItems = skills.slice(0,3);
    if (page === 1) mobileItems = skills.slice(3,6);
    if (page === 2) mobileItems = skills.slice(6,10);

    { /* desktop - 6 card per page */ }
    let desktopItems: Skill[] = [];
    if (page === 0) desktopItems = skills.slice(0,6);
    if (page === 1) desktopItems = skills.slice(3,9);
    if (page ===2) desktopItems = skills.slice(6,10);

    const visibleItems = isDesktop ? desktopItems : mobileItems;

    return (
        <div className="flex flex-col items-center gap-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`grid gap-6 w-full ${isDesktop ? "grid-cols-2" : "grid-cols-1"}`}
              >
                {visibleItems.map((skill) =>(
                    <SkillCard key={skill.name} skill={skill} />
                ))}
              </motion.div>
            </AnimatePresence>

            { /* Pagination */}
            <button onClick={nextPage}>
                <Image src={page === 0 ? PaginationLeft : page === 1 ? PaginationMiddle : PaginationRight} alt="Pagination" className="cursor-pointer" />
            </button>
        </div>
    );
}