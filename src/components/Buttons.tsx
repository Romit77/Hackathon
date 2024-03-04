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
      "Takes an image as input and returns the solution to the mathematical problem in the image.",
    link: "https://www.mathway.com/Calculus",
  },
  {
    title: "Handwriting-to-Text",
    description:
      "Convert your handwritten notes into digital text and analyze them for better understanding and retention.",
    link: "http://localhost:8501/Smart_Note_Analysis",
  },
  {
    title: "Leetcode Solutions",
    description:
      "A collection of solutions to LeetCode problems in C++, Python and Java.",
    link: "https://walkccc.me/LeetCode/",
  },
];

export default CardHoverEffectDemo;
