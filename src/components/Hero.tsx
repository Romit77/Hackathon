"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

const instructors = [
  {
    title: "",
    link: "www.google.com",
    thumbnail:
      "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "",
    link: "https://leetcode.com/studyplan/top-interview-150/",
    thumbnail:
      "https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "",
    link: "https://vtop.vitbhopal.ac.in/vtop/open/page",
    thumbnail:
      "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "",
    link: "https://www.hackerrank.com/",
    thumbnail:
      "https://images.unsplash.com/photo-1626968361222-291e74711449?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "",
    link: "www.google.com",
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "",
    link: "www.google.com",
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "",
    link: "https://www.hackerrank.com/",
    thumbnail:
      "https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "",
    link: "https://www.hackerrank.com/",
    thumbnail:
      "https://images.unsplash.com/photo-1687603921109-46401b201195?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "",
    link: "https://www.geeksforgeeks.org/ ",
    thumbnail:
      "https://images.unsplash.com/photo-1579820010410-c10411aaaa88?q=80&w=1797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
  },
  {
    title: "",
    link: "www.google.com",
    thumbnail:
      "https://images.unsplash.com/photo-1610986602726-19f650133f7a?q=80&w=1806&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "",
    link: "www.google.com",
    thumbnail:
      "https://images.unsplash.com/photo-1687603921109-46401b201195?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function HeroSection() {
  return (
    <div>
      <HeroParallax products={instructors} />
    </div>
  );
}

export default HeroSection;
