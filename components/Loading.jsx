"use client";
import React, { useState, useEffect } from "react";
import VR from "@/components/VR";
import { Climate_Crisis } from "next/font/google";
import Bg from "@/components/Bg";
const climate = Climate_Crisis({
  subsets: ["latin"],
  display: "swap",
});
const Loading = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 1 : 100
      );
    }, 22);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative overflow-hidden   lg:overflow-visible h-screen w-screen ">
      <div className="absolute right-[600px] top-0 -z-10 overflow-hidden opacity-30 grid-pattern">
        <div className="footer-gradient" />
        <div className="gradient-03 z-10" />
        <div className="gradient-04 z-10" />

        <svg
          className="absolute opacity-30 left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
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
      <div className="w-screen h-screen absolute top-0 left-0 ">
        <Bg className="h-full w-full " />
      </div>
      <div className="h-full w-full flex items-center flex-col text-slate-50 justify-center text-5xl z-10 relative">
        <div className={climate.className}>{progress}%</div>
        <VR className="" />
      </div>
    </div>
  );
};

export default Loading;
