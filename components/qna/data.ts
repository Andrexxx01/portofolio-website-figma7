"use client";

export interface QnaItem {
    question: string;
    answer: string;
}

export const qnaData: QnaItem[] = Array.from({ length: 5 }).map(() => ({
  question: "What’s your approach to front-end development?",
  answer:
    "I focus on clean, maintainable code and prioritize user experience. My approach involves close collaboration with designers to ensure exact implementation and seamless interactions across all devices.",
}));