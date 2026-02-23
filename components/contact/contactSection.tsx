"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ContactForm from "./contactForm";
import ContactSuccess from "./contactSuccess";
import ContactFailed from "./contactFailed";

type Status = "form" | "success" | "failed";

export default function ContactSection() {
    const [status, setStatus] = useState<Status>("form");
    const [formData, setFormData] = useState<any>(null);

    return (
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative w-full bg-white overflow-hidden mt-24 scroll-mt-44"
        id="contact"
      >
        <AnimatePresence mode="wait">
          {status === "form" && (
            <ContactForm
              key="form"
              defaultValues={formData}
              onSuccess={(data) => {
                setFormData(data);
                setStatus("success");
              }}
              onFail={(data) => {
                setFormData(data);
                setStatus("failed");
              }}
            />
          )}
          {status === "success" && (
            <ContactSuccess
              key="success" 
              onClose={() => setStatus("form")} />
          )}
            {status === "failed" && (
            <ContactFailed
              key="failed"
              onRetry={() => setStatus("form")}
            />
          )}
        </AnimatePresence>
      </motion.section>
    );  
}