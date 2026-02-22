"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { stories } from "./data";
import SuccessCard from "./successCard";
import PaginationLeft from "@/assets/pagination-left.svg";
import PaginationMiddle from "@/assets/pagination-middle.svg";
import PaginationRight from "@/assets/pagination-right.svg";
import { useIsDesktop } from "@/hooks/useBreakpoint";

export default function SuccessCarousel() {
    const isDesktop = useIsDesktop();
    const [page, setPage] = useState(0);
    const totalPages = 3;
    const next = () => setPage((p) => (p === totalPages - 1 ? 0 : p + 1));
    const prev = () => setPage((p) => (p === 0 ? totalPages - 1 : p -1));
    let visible;

    if (isDesktop) {
        const desktopSets = [
            stories.slice(1, 4),
            stories.slice(4, 7),
            stories.slice(7, 9).concat(stories[0]),
        ];
        visible = desktopSets[page];
    } else {
      const mobileSets = [
        [stories[0]],
        [stories[4]],
        [stories[7]],
      ];
      visible = mobileSets[page];
    }

    const paginationImage =
      page === 0
        ? PaginationLeft : page === 1 ? PaginationMiddle : PaginationRight;
    
    return (
        <div className="flex flex-col items-center gap-12">
            <AnimatePresence mode="wait">
                <motion.div
                  key={page}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, info) => {
                    if (info.offset.x < -100) next();
                    if (info.offset.x > 100) prev();
                  }}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                  className={`grid gap-8 w-full ${isDesktop ? "grid-cols-3" : "grid-cols-1"}`}
                >
                  {visible.map((story) => (
                    <SuccessCard key={story.company} story={story} />
                  ))}
                </motion.div>
            </AnimatePresence>
            <button onClick={next}>
              <Image src={paginationImage} alt="pagination" className="cursor-pointer" />
            </button>
        </div>
    );
}