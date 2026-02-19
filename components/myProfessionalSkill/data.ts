"use client"

import LogoHTML from "@/assets/html.svg";
import LogoCSS from "@/assets/css.svg";
import LogoJavascript from "@/assets/javascript.svg";
import LogoReact from "@/assets/react.svg";
import LogoMongoDB from "@/assets/mongodb.svg";
import LogoDocker from "@/assets/docker.svg";
import LogoTypescript from "@/assets/typescript.svg";
import LogoExpress from "@/assets/express.svg";
import LogoPostgreSQL from "@/assets/posgresql.svg";
import LogoSequelize from "@/assets/sequelize.svg";
import type { StaticImageData } from "next/image";

export interface Skill {
    name: string;
    logo: StaticImageData;
    percentage: number;
}

export const skills: Skill[] = [
  { name: "HTML", logo: LogoHTML, percentage: 90 },
  { name: "CSS", logo: LogoCSS, percentage: 90 },
  { name: "Javascript", logo: LogoJavascript, percentage: 90 },
  { name: "React JS", logo: LogoReact, percentage: 90 },
  { name: "Mongo DB", logo: LogoMongoDB, percentage: 90 },
  { name: "Docker", logo: LogoDocker, percentage: 90 },
  { name: "Typescript", logo: LogoTypescript, percentage: 90 },
  { name: "Express JS", logo: LogoExpress, percentage: 90 },
  { name: "Postgre SQL", logo: LogoPostgreSQL, percentage: 90 },
  { name: "Sequelize", logo: LogoSequelize, percentage: 90 },
];

