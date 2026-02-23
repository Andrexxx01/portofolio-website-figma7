"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Image from "next/image";
import SuccessImage from "@/assets/success-send.svg";
import ModalPortal from "../ui/modalPortal";
import { useEffect } from "react";

interface Props {
    onClose: () => void;
}

export default function ContactSuccess({ onClose }: Props) {

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
          key="success"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative max-w-md w-full mx-6 bg-white p-8 rounded-2xl text-center shadow-card"
          >
            <Image
              src={SuccessImage}
              alt="success"
              className="w-42.5 h-35 lg:w-58 lg:h-47.5 mb-6 mx-auto"
            />
            <h3 className="text-lg lg:text-xl font-semibold text-brand-neutral-950 mb-2">
              Message Sent Successfully!
            </h3>
            <p className="text-sm lg:text-md text-brand-neutral-500 mb-6">
              Thank you for reaching out. I’ll get back to you as soon as
              possible
            </p>
            <Button
              onClick={onClose}
              className="w-full rounded-full bg-brand-primary-300 py-6 cursor-pointer"
            >
              Back to Home
            </Button>
          </motion.div>
        </motion.div>
      </ModalPortal>
    );
}