"use client";

import { motion } from "framer-motion";
import SuccessCarousel from "./successCarousel";

export default function SuccessStoriesSection() {
    return (
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full py-24 px-6 lg:px-16 bg-white"
        > 
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center text-display-md lg:text-display-2xl font-bold mb-16">
                Success Stories from Clients
            </h2>
            <SuccessCarousel />
          </div>
        </motion.section>
    );
}