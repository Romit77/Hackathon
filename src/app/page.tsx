import LampDemo from "@/components/Header";
import HeroSection from "@/components/Hero";
import React from "react";

function page() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <LampDemo />
      <HeroSection />
    </main>
  );
}

export default page;
