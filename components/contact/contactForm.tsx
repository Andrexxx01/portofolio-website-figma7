"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormValues } from "./schema";
import { Button } from "../ui/button";
import PhoneIcon from "@/assets/phone-purple.svg";
import MailIcon from "@/assets/mail-purple.svg";
import LocationIcon from "@/assets/marker-pin-purple.svg";
import SendIcon from "@/assets/send-white.svg";
import PatternBot from "@/assets/Pattern Bot.svg";
import { motion } from "framer-motion";

interface Props {
    onSuccess: (data: ContactFormValues) => void;
    onFail: (data: ContactFormValues) => void;
    defaultValues?: ContactFormValues;
}

export default function ContactForm({onSuccess, onFail, defaultValues,} : Props) {
    const {register, handleSubmit, formState: { errors },} = useForm<ContactFormValues>({resolver: zodResolver(contactSchema), defaultValues,});
    const onSubmit = (data: ContactFormValues) => {
        const random = Math.random();
        if (random > 0.3) {
            onSuccess(data);
        } else {
            onFail(data);
        }
    };

    return (
      <motion.section
        key="form"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative w-full px-6 lg:px-16 py-0 lg:py-10 bg-white z-0"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 lg:items-start">
          {/* Left Side */}
          <div className="ml-7 lg:mt-28">
            <h2 className="text-display-md lg:text-display-2xl font-bold text-brand-neutral-950 mb-6">
              I've been waiting for you
            </h2>
            <p className="text-md lg:text-lg font-medium text-brand-neutral-950 mb-8">
              Fill in the form or Send us an email
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-brand-primary-100 rounded-full">
                  <Image
                    src={PhoneIcon}
                    alt="phone"
                    className="w-5 h-5 lg:h-6 lg:w-6"
                  />
                </div>
                <span className="text-md lg:text-lg text-brand-neutral-950">
                  +62 81931886601
                </span>
              </div>
              <div className="flex items-center gap-4 ">
                <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-brand-primary-100 rounded-full">
                  <Image
                    src={MailIcon}
                    alt="email"
                    className="w-5 h-5 lg:h-6 lg:w-6"
                  />
                </div>
                <span className="text-md lg:text-lg text-brand-neutral-950">
                  kurniawan.andre50@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-brand-primary-100 rounded-full">
                  <Image
                    src={LocationIcon}
                    alt="location"
                    className="w-5 h-5 lg:h-6 lg:w-6"
                  />
                </div>
                <span className="text-md lg:text-lg text-brand-neutral-950">
                  Malang, Indonesia
                </span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-white p-8 rounded-2xl shadow-card mb-20">
            <h3 className="text-lg lg:text-display-xs font-semibold text-brand-neutral-950 mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex flex-col gap-1.5 items-start justify-between">
                <label className="text-sm lg:text-md text-brand-neutral-950 font-semibold">
                  Name
                </label>
                <input
                  {...register("name")}
                  placeholder=""
                  className="w-full border border-brand-neutral-200 rounded-xl bg-white h-12 lg:h-14 px-4"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1.5 items-start justify-between">
                <label className="text-sm lg:text-md text-brand-neutral-950 font-semibold">
                  Email
                </label>
                <input
                  {...register("email")}
                  placeholder=""
                  className="w-full border border-brand-neutral-200 rounded-xl bg-white h-12 lg:h-14 px-4"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1.5 items-start justify-between">
                <label className="text-sm lg:text-md text-brand-neutral-950 font-semibold">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  placeholder=""
                  className="w-full border border-brand-neutral-200 rounded-xl bg-white h-30 lg:h-45 px-4 py-3"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full rounded-full lg:text-md text-sm font-medium lg:py-8 py-6 bg-brand-primary-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Image src={SendIcon} alt="send" className="w-5 h-5" />
                Submit
              </Button>
            </form>
          </div>
        </div>
        <Image
          src={PatternBot}
          alt="pattern"
          className="absolute bottom-0 left-0 w-full -z-10"
        />
      </motion.section>
    );
}
