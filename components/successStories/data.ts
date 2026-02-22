"use client";

import Trustpilot from "@/assets/trustpilot-logo.svg";
import Upwork from "@/assets/upwork-logo.svg";
import Zapier from "@/assets/zapier-logo.svg";
import Zoom from "@/assets/zoom-logo.svg";
import Tesla from "@/assets/tesla-logo.svg";
import Coinbase from "@/assets/coinbase-logo.svg";
import Spotify from "@/assets/spotify-logo.svg";
import Postman from "@/assets/postman-logo.svg";
import Youtube from "@/assets/youtube-logo.svg";
import type { StaticImageData } from "next/image";

export interface Story {
    company: string;
    logo: StaticImageData;
    description: string;
    author: string;
    role: string;
}

export const stories: Story[] = [
  {
    company: "Trustpilot",
    logo: Trustpilot,
    description:
      "Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We’ve seen a significant increase in user engagement!",
    author: "Robert Lewandowski",
    role: "Head of Engineering, Upwork",
  },
  {
    company: "Upwork",
    logo: Upwork,
    description:
      "Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We’ve seen a significant increase in user engagement!",
    author: "Robert Lewandowski",
    role: "Head of Engineering, Upwork",
  },
  {
    company: "Zapier",
    logo: Zapier,
    description:
      "Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We’ve seen a significant increase in user engagement!",
    author: "Dani Olmo",
    role: "Product Manager, Zapier",
  },
  {
    company: "Zoom",
    logo: Zoom,
    description:
      "Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We’ve seen a significant increase in user engagement!",
    author: "Jude Belingham",
    role: "Vice President, Zoom",
  },
  {
    company: "Tesla",
    logo: Tesla,
    description:
      "Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We’ve seen a significant increase in user engagement!",
    author: "Elon Musk",
    role: "Chief Executive Officer, Tesla",
  },
  {
    company: "Coinbase",
    logo: Coinbase,
    description:
      "Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We’ve seen a significant increase in user engagement!",
    author: "Michael Saylor",
    role: "Head of Engineering, Coinbase",
  },
  {
    company: "Spotify",
    logo: Spotify,
    description:
      "Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We’ve seen a significant increase in user engagement!",
    author: "Kylian Mbappe",
    role: "Product Manager, Spotify",
  },
  {
    company: "Postman",
    logo: Postman,
    description:
      "Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We’ve seen a significant increase in user engagement!",
    author: "Satoshi Nakamoto",
    role: "Vice President, Postman",
  },
  {
    company: "Youtube",
    logo: Youtube,
    description:
      "Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We’ve seen a significant increase in user engagement!",
    author: "Changpeng Zhao",
    role: "Product Manager, Youtube",
  },
];


