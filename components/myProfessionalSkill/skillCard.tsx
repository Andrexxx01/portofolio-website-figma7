"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Skill } from "./data";

export default function SkillCard({ skill }: {skill:Skill}) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl p-6 card-shadow flex flex-col gap-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-neutral-100 flex items-center justify-center">
            <Image src={skill.logo} alt={skill.name} className="w-6 h-auto" />
          </div>
          <h4 className="font-semibold text-md lg:text-lg text-brand-neutral-950">
            {skill.name}
          </h4>
        </div>
        <p className="text-brand-neutral-700 text-sm lg:text-md">
          Building the structure of web pages with semantic markup foraccessibility .
        </p>
        { /* Progress Bar */ }
        <div className="flex items-center gap-3">
          <div className="flex-1 h-3 bg-brand-neutral-300 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.percentage}%`}}
              transition={{ duration: 1 }}
              className="h-full bg-brand-primary-300 rounded-full"
            >
            </motion.div>
          </div>
          <span className="font-semibold text-sm lg:text-lg text-brand-neutral-950">
            {skill.percentage}%
          </span>
        </div>
      </motion.div>
    );
}