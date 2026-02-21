"use client";

import type { Experience } from "./data";
import Image from "next/image";

export default function ExperienceCard({
    experience,
    isDesktop,
}: {
    experience: Experience;
    isDesktop: boolean;
}) {
    if (isDesktop) {
        return (
            <div className="grid grid-cols-3 gap-6">
                { /* Left side */ }
                <div>
                    <Image src={experience.logo} alt={experience.company} className="w-38 h-12 mb-6" />
                    <p className="font-semibold text-xl text-brand-neutral-950 mb-4">
                        {experience.company}
                    </p>
                    <p className="text-md text-brand-neutral-700">
                        {experience.period}
                    </p>
                </div>

                { /* Right side */ }
                <div className="col-span-2 -ml-24">
                    <h4 className="text-xl font-semibold text-brand-neutral-950 mb-8">
                        {experience.role}
                    </h4>
                    <p className="text-md text-brand-neutral-700 leading-relaxed">
                        {experience.description}
                    </p>
                </div> 
            </div>
        );
    }

    { /* Mobile Version */ }
    return (
        <div>
            <Image src={experience.logo} alt={experience.company} className="w-25.25 h-8 mb-2" />
            <p className="font-semibold text-md text-brand-neutral-950 mb-2">
                {experience.company}
            </p>
            <p className="text-sm text-brand-neutral-700 mb-4">
                {experience.period}
            </p>
            <h4 className="font-semibold text-md text-brand-neutral-950 mb-2">
                {experience.role}
            </h4>
            <p className="text-sm text-brand-neutral-700 leading-relaxed">
                {experience.description}
            </p>
        </div>
    );
}