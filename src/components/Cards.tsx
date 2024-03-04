"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote: "Points : 88",
    name: "Aditya Kumar",
    title: "22BCE10600",
  },
  {
    quote: "Points : 64",
    name: "Rakshit Gupta",
    title: "22BCE11548",
  },
  {
    quote: "Points : 99",
    name: "Ananya Agarwal",
    title: "20BCE10689",
  },
  {
    quote: "Points : 94",
    name: "Romit Dey",
    title: "22BCE11359",
  },
  {
    quote: "Points : 72",
    name: "Kanishk Shukla",
    title: "22BCE11658",
  },
  {
    quote: "Points : 67",
    name: "Anmol Srivastava",
    title: "21BCE11130",
  },
  {
    quote: "Points : 64",
    name: "Rakshit Gupta",
    title: "CEO",
  },
];

function Cards() {
  return (
    <div className="h-[20rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative  items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <h2 className="text-3xl font-bold text-center mb-8 z-10 p-5">
        Leaderboard
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
