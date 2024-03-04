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
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "http://localhost:8501/Smart_Note_Analysis",
  },
  {
    title: "Interactive Quizzes",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "http://localhost:8501/",
  },
  {
    title: "PYQ Analysis",
    description:
      "A technology company that builds economic infrastructure for the internet.",
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
