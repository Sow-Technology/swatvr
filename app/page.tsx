"use client";
import HeroPage from "@/components/sections/Home/HeroPage";
import Hero3 from "@/components/sections/Home/Hero3";
import Hero from "@/components/sections/Home/Hero";
import Hero4 from "@/components/sections/Home/Hero4";
import Features from "@/components/sections/Home/Features";
import Product from "@/components/sections/Home/Product";
import Services from "@/components/sections/Home/Services";
import Marquee from "@/components/sections/Home/Marquee";
import Parllax from "@/components/sections/Home/Parllax";
import TrippyScrollingEffect from "@/components/sections/Home/TrippyScrollEffect";
import CTA from "@/components/sections/Home/CTA";
import Carousel from "@/components/sections/Home/Carousel";
import Shuffle from "@/components/sections/Home/Shuffle";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3500);
  });
  if (isLoading) return <Loading />;
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Hero4 />
      <Product />
      <Carousel />
      <TrippyScrollingEffect />
      {/* <Hero3 /> */}
      {/* <HeroPage /> */}
      <Shuffle />
      <Parllax />
      <CTA />
      <Footer />
    </>
  );
}
