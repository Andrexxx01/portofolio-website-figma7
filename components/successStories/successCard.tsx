"use client";

import Image from "next/image";
import YellowStar from "@/assets/yellow-star.svg";
import type { Story } from "./data";

export default function SuccessCard({ story }: { story:Story }) {
    return (
        <div className="bg-white shadow-card rounded-2xl p-8 text-center flex flex-col items-center">
            <img src={story.logo.src} alt={story.company} className="w-25.5 h-8 lg:w-28.5 lg:h-12 mb-6"/>
            <p className="text-sm lg:text-md font-medium text-brand-neutral-950 leading-relaxed mb-6 max-w-sm">
                {story.description}
            </p>
            <div className="flex mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Image key={i} src={YellowStar} alt="Star" className="w-7 h-7 lg:w-8 lg:h-8"/>
                ))}
            </div>
            <p className="text-sm lg:text-md text-brand-neutral-950 font-semibold mb-2">
                {story.author}
            </p>
            <p className="text-sm lg:text-md text-brand-neutral-600">
                {story.role}
            </p>
        </div>
    );
}