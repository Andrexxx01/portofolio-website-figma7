"use client";

import { motion } from "framer-motion";
import ArrowRight from "@/assets/arrow-right.svg";
import type { Project } from "./data";
import Image from "next/image";

export default function ProjectCard({ project}: {project: Project}) {
    return (
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-6"
        >
          { /* Top Row - category and year */ }
          <div className="flex justify-between items-center">
            <span className="px-4 py-1 text-xs lg:text-sm border-[1.5px] border-dashed border-brand-neutral-400 rounded-full text-brand-neutral-950">
              {project.category}
            </span >
            <span className="px-4 py-1 text-xs lg:text-sm border-[1.5px] border-dashed border-brand-neutral-400 rounded-full text-brand-neutral-950">
              {project.year}
            </span>
          </div>

          { /* Image */ }
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="rounded-lg lg:rounded-xl overflow-hidden cursor-pointer"
          >
            <Image src={project.image} alt={project.title} className="w-full h-auto object-cover" />
          </motion.div>

          { /* Title */ }
          <h3 className="text-brand-neutral-950 font-semibold text-md lg:text-xl">
            {project.title}
          </h3>

          { /* Visit Website */ }
          <a
            className="group flex items-center gap-2 text-brand-primary-300 text-sm lg:text-md font-medium w-fit cursor-pointer"
          >
            <span className="group-hover:underline">Visit Website</span>
            <Image src={ArrowRight} alt="ArrowRight" className="w-6 h-6 transition group-hover:invert"/>
          </a>
        </motion.div>
    );
}