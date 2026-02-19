"use client";

import { motion } from "framer-motion";
import SkillCarousel from "./skillCarousel";

export default function MyProfessionalSkillSection() {
    return(
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8}}
          viewport={{ once: true }}
          className="py-24 px-6 lg:px-16 bg-gray-50"
        >
          <h2 className="text-center text-3xl lg:text-5xl font-bold mb-16">
            My Professional Skill
          </h2>
          <SkillCarousel />
        </motion.section>
    );
}