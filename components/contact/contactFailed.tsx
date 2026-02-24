"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Image from "next/image";
import FailedImage from "@/assets/failed-send.svg";
import ModalPortal from "../ui/modalPortal";
import { useEffect } from "react";

interface Props {
    onRetry: () => void;
}

export default function ContactFailed({ onRetry } : Props) {

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <ModalPortal>
      <motion.div
          key="failed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative max-w-md mx-auto bg-white p-8 rounded-2xl text-center shadow-card"
          >
            <Image
              src={FailedImage}
              alt="failed"
              className="w-42.5 h-35.5 lg:w-58 lg:h-47.5 mb-6 mx-auto"
            />
            <h3 className="text-lg lg:text-xl font-semibold text-brand-neutral-950 mb-2">
              Failed to send.
            </h3>
            <p className="text-sm lg:text-md text-brand-neutral-500 mb-6">
              Please check your internet connection or try refreshing the page.
            </p>
            <Button
              onClick={onRetry}
              className="w-full rounded-full bg-brand-primary-300 py-6 cursor-pointer"
            >
              Try Again
            </Button>
          </motion.div>
      </motion.div>
    </ModalPortal>
  );
}
