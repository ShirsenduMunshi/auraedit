"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
// import { useMousePosition } from "@/hooks/useMousePosition";
import { useParallax } from "@/hooks/use-parallax";
// import CustomCursor from "@/components/CustomCursor";
// import FloatingShapes from "@/components/FloatingShapes";
// import GlassNavigation from "@/components/GlassNavigation";
// import HeroSection from "@/components/HeroSection";
// import Features from "@/components/Features";
// import InteractiveStats from "@/components/InteractiveStats";
// import Pricing from "@/components/Pricing";

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useParallax(parallaxRef, scrollY);

  return (
    <div className="bg-slate-900 text-white relative overflow-hidden">
      {/* <CustomCursor /> */}
      {/* <FloatingShapes /> */}
      {/* <GlassNavigation /> */}

      <main ref={parallaxRef} className="relative z-10">
        {/* <HeroSection /> */}
        {/* <Features /> */}
        {/* <InteractiveStats /> */}
        {/* <Pricing /> */}
      </main>
    </div>
  );
}
