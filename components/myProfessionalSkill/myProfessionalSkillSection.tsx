"use client";

import { motion } from "framer-motion";
import SkillCarousel from "./skillCarousel";

export default function MyProfessionalSkillSection() {
    return (
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full lg:py-24 px-6 lg:px-16 bg-white"
        id="skill"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-display-md lg:text-display-2xl font-bold mb-10 lg:mb-16">
            My Profesional Skill
          </h2>
          <SkillCarousel />
        </div>
      </motion.section>
    );
}