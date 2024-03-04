"use client";

import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Smart Notes Analysis",
    description:
      "Convert your handwritten notes into digital text and analyze them for better understanding and retention.",
    link: "http://localhost:8501/Smart_Note_Analysis",
  },
  {
    title: "Interactive Quizzes",
    description:
      "Generating quizzes from your notes and analyzing your performance.",
    link: "http://localhost:8501/",
  },
  {
    title: "PYQ Analysis",
    description: "Generates a list of questions based on previous year data ",
    link: "http://localhost:8501/PYQ_Analysis",
  },
  {
    title: "Maths Solver",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://www.mathway.com/Calculus",
  },
  {
    title: "Handwriting-to-Text",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "http://localhost:8501/Smart_Note_Analysis",
  },
  {
    title: "Leetcode Solutions",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://walkccc.me/LeetCode/",
  },
];

export default CardHoverEffectDemo;
