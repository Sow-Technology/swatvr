"use client";
import HeroPage from "@/components/sections/Home/HeroPage";
import Features from "@/components/sections/Home/Features";
import Product from "@/components/sections/Home/Product";
import Services from "@/components/sections/Home/Services";
import Parllax from "@/components/sections/Home/Parllax";
import CTA from "@/components/sections/Home/CTA";
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
      <div className="relative overflow-hidden   lg:overflow-visible ">
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-30">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <Navbar />
        <HeroPage />
        {/* <div className="relative">
          <Features />
          <div className="gradient-03 z-0" />
        </div> */}
        <div className="w-full ">
          <Product />
          <div className="relative">
            <Shuffle />
            <div className="gradient-04 z-0" />
          </div>
          <Services />
          <Parllax />
          <CTA />
          <Footer />
        </div>
      </div>
    </>
  );
}
