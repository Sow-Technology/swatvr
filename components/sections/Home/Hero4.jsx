"use client";
import { Collaboration } from "@/components/sections/collaboration";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { MoreFeatures } from "@/components/sections/more-features";
import { SamePage } from "@/components/sections/same-page";
import { StreamlinedExperience } from "@/components/sections/streamlined-experience";
import Gradients from "@/components/Gradients";
import Head from "next/head";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Marquee from "./Marquee";
export default function Hero4() {
  const heroRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (ev) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = ev;
      heroRef.current.style.setProperty("--x", `${clientX}px`);
      heroRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return (
    <>
      <style jsx>{`
        .hero {
          height: 100vh;
          width: 100%;
          background-image: radial-gradient(
            circle farthest-side at var(--x, 100px) var(--y, 100px),
            #1250aa 0%,
            transparent 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .title {
          font-size: 80px;
          text-transform: uppercase;
          transform: rotate(10deg) translateX(calc(var(--x) / 10, 0px));
        }
      `}</style>

      <main ref={heroRef} className="relative">
        <Hero />
        <div className="bg-transparent -z-50 w-full">
          <Marquee />
        </div>
        <div className="relative z-10 w-full overflow-x-clip">
          <Collaboration />
          <SamePage />
          <StreamlinedExperience />
          <Features />
          {/* <MoreFeatures /> */}
          {/* <NoLockin /> */}
        </div>
        <Image
          src="/vr-camera_8170956.png"
          alt="SWAT VR"
          height={50}
          width={50}
          className="absolute top-[400px] right-40"
        />
        <Image
          src="/vr-3.png"
          alt="SWAT VR"
          height={50}
          width={50}
          className="absolute top-[600px] left-[300px]"
        />
      </main>
    </>
  );
}
