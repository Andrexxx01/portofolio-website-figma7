"use client";

import { motion } from "framer-motion";
import { projects } from "./data";
import ProjectCard from "./projectCard";

export default function MyLatestWorkSection() {
    return (
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1]}}
          className="w-full py-10 px-6 lg:px-16 lg:py-20 bg-white scroll-mt-24 lg:scroll-mt-20"
          id="projects"
        >
          <div className="max-w-7xl mx-auto">
            { /* Title */ }
            <h2 className="text-center text-display-md lg:text-display-2xl font-bold text-brand-neutral-950 mb-6 lg:mb-20">
                My Latest Work
            </h2>
            { /* grid card */ }
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
              {projects.map((project,index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </motion.section>
    );
}