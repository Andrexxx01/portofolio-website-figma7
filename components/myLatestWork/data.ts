"use client";

import Project1 from "@/assets/portofolio-project1.svg";
import Project2 from "@/assets/portofolio-project2.svg";
import Project3 from "@/assets/portofolio-project3.svg";
import Project4 from "@/assets/portofolio-project4.svg";
import Project5 from "@/assets/portofolio-project5.svg";
import Project6 from "@/assets/portofolio-project6.svg";
import type { StaticImageData } from "next/image";

export interface Project {
    title: string;
    image: StaticImageData;
    year: string;
    category: string;
}

export const projects: Project[] = [
  {
    title: "Dashboard Saas Task Mangement",
    image: Project1,
    year: "2024",
    category: "Dashboard",
  },
  {
    title: "Dashboard Saas Task Mangement",
    image: Project2,
    year: "2024",
    category: "Dashboard",
  },
  {
    title: "Dashboard Saas Task Mangement",
    image: Project3,
    year: "2024",
    category: "Dashboard",
  },
  {
    title: "Dashboard Saas Task Mangement",
    image: Project4,
    year: "2024",
    category: "Dashboard",
  },
  {
    title: "Dashboard Saas Task Mangement",
    image: Project5,
    year: "2024",
    category: "Dashboard",
  },
  {
    title: "Dashboard Saas Task Mangement",
    image: Project6,
    year: "2024",
    category: "Dashboard",
  },
];