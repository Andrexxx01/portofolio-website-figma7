"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const row = [
   "React Expert",
   "Perfect Pixel",
   "TypeScript Proficiency",
   "Clean, Maintainable Code",
   "Performance Optimization",
   "Responsive Website",
   "UI Design Proficiency (Figma)", 
];

export default function WhyChooseMeSection() {
    return (
        <motion.section
          initial= {{ opacity: 0, y: 80 }}
          whileInView= {{ opacity: 1, y: 0 }}
          transition= {{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full py-24 px-6 lg:px-16 bg-brand-neutral-100 scroll-mt-20 lg:scroll-mt-24"
          id="unique"
        >
          <div className="max-w-7xl mx-auto">
            { /* Titile */ }
            <h2 className="text-center text-display-md lg:text-display-2xl font-bold text-brand-neutral-950 mb-16">
                Why Choose Me
            </h2>
            { /* Table Container */ }
            <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-card">
              { /* Header */ }
              <div className="bg-brand-primary-200 rounded-full py-4 px-6 mb-8">
                <div className="grid grid-cols-3 text-white font-semibold text-sm lg:text-lg text-center">
                  <div>Skill</div>
                  <div>Me</div>
                  <div>Other</div>
                </div>
              </div>

              { /* Row */ }
              <div className="flex flex-col divide-y divide-brand-neutral-300">
                {row.map((item, index) => (
                  <div key={index} className="grid grid-cols-3 items-center py-6 font-medium text-brand-neutral-950 text-sm lg:text-lg">
                    <div className="text-center ml-8">
                      {item}
                    </div>
                    { /* Me */ }
                    <div className="flex justify-center">
                      <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-brand-secondary-300 flex items-center justify-center">
                        <Check className="w-4.5 h-4.5 text-white" strokeWidth={4} />
                      </div>
                    </div>
                    { /* Other */ }
                    <div className="flex justify-center mr-8">
                      <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-brand-neutral-400 flex items-center justify-center"> 
                        <X  className="w-4.5 h-4.5 text-white" strokeWidth={4} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
    );
}