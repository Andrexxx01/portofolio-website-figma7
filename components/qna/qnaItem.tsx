"use client";

import { AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

interface Props {
    item: {
        question: string;
        answer: string;
    }
    index: number;
    isLast: boolean;
}

export default function QnaItem({ item, index, isLast } : Props) {
    const [open, setOpen] = useState(index === 0)

    return (
      <AccordionItem
        value={`item-${index}`}
        className={!isLast ? "border-b border-brand-neutral-300" : ""}
      >
        <AccordionTrigger
          onClick={() => setOpen(!open)}
          className="py-6 text-left hover:no-underline"
        >
          <div className="flex items-center justify-between w-full">
            <span
              className={`text-md lg:text-lg font-semibold ${open ? "text-brand-primary-300" : "text-brand-neutral-950"}`}
            >
              {item.question}
            </span>
            <div className={`ml-4 aspect-square flex items-center justify-center w-6 h-6 lg:w-10 lg:h-10 rounded-full ${open ? "bg-brand-primary-300" : "bg-brand-neutral-200"}`}>
              {open ? (
                <Minus className="w-3.6 h-3.6 lg:w-6 lg:h-6 text-white cursor-pointer" />
              ) : (
                <Plus className="w-3.6 h-3.6 lg:w-6 lg:h-6 text-brand-neutral-950 cursor-pointer" />
              )}
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pb-6 text-sm lg:text-md text-brand-neutral-700 leading-relaxed mr-10">
            {item.answer}
        </AccordionContent>
      </AccordionItem>
    );
}