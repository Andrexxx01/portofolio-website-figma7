"use client";

import { motion } from "framer-motion";
import { Accordion } from "../ui/accordion";
import { Button } from "../ui/button";
import Image from "next/image";
import { qnaData } from "./data";
import QnaItem from "./qnaItem";
import MessageIcon from "@/assets/message-chat-square.svg";
import PersonImage from "@/assets/pict-hero.svg";

export default function QnaSection() {
    return (
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="w-full px-6 lg:px-16 py-0 lg:py-10 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-neutral-50 border border-brand-neutral-300 rounded-4xl p-6 lg:p-16">
            <div className="grid lg:grid-cols-3 lg:gap-12 lg:items-center">
              {/* Left Side */}
              <div className="flex flex-col justify-between">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary-100 lg:-mt-6 mb-6">
                  <Image src={MessageIcon} alt="QnA Icon" className="w-6 h-6" />
                </div>
                <h2 className="text-display-md lg:text-display-2xl font-bold text-brand-neutral-950 lg:mb-28">
                  Have Questions?
                </h2>
                {/* Contact Card Desktop */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  className="hidden lg:block mt-12 bg-white p-6 rounded-2xl border border-brand-neutral-300"
                >
                  <div className="w-20 h-20 rounded-full flex items-center justify-center bg-brand-secondary-200 mb-4">
                    <Image
                      src={PersonImage}
                      alt="Person"
                      className="w-20 h-20 rounded-full"
                    />
                  </div>
                  <p className="text-lg text-brand-neutral-950 mb-6">
                    Have more questions? <br /> Send me a message.
                  </p>
                  <Button className="w-full bg-brand-primary-300 rounded-full py-6 cursor-pointer">
                    Get in touch
                  </Button>
                </motion.div>
              </div>

              {/* Right Side */}
              <div className="col-span-2 lg:ml-32">
                <Accordion type="multiple" defaultValue={["item-0"]}>
                  {qnaData.map((item, index) => (
                    <QnaItem
                      key={index}
                      item={item}
                      index={index}
                      isLast={index === qnaData.length - 1}
                    />
                  ))}
                </Accordion>

                {/* Contact Card Mobile */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  className="lg:hidden mt-2 bg-white p-6 rounded-xl border border-brand-neutral-300"
                >
                  <div className="w-15 h-15 rounded-full flex items-center justify-center bg-brand-secondary-200 mb-6">
                    <Image
                      src={PersonImage}
                      alt="Person"
                      className="w-15 h-15 rounded-full"
                    />
                  </div>
                  <p className="text-sm text-brand-neutral-950 mb-6">
                    Have more questions? Send me a message.
                  </p>
                  <Button className="w-full bg-brand-primary-300 rounded-full py-5 cursor-pointer">
                    Get in touch
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    );
}