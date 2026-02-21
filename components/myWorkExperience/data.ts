"use client";

import TrustpilotLogo from "@/assets/trustpilot-logo.svg";
import PostmanLogo from "@/assets/postman-logo.svg";
import SpotifyLogo from "@/assets/spotify-logo.svg";
import type { StaticImageData } from "next/image";

export interface Experience {
    company: string;
    logo: StaticImageData;
    role: string;
    period: string;
    description: string;
}

export const experiences: Experience[] = [
  {
    company: "Trustpilot",
    logo: TrustpilotLogo,
    role: "Frontend Developer",
    period: "2021-2024",
    description:
      "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
  },
  {
    company: "Postman",
    logo: PostmanLogo,
    role: "Frontend Developer",
    period: "2021-2024",
    description:
      "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
  },
  { company: "Spotify",
    logo: SpotifyLogo,
    role: "Frontend Developer",
    period: "2021-2024",
    description:
      "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
  },
];