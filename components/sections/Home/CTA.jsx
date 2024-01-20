"use client";

import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
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
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8 relative">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 h-[1000px] lg:h-[600px]">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start Your Virtual Adventure Today
              <br />
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ready to step into the extraordinary? Click below to start your
              immersive journey with SWAT VR. Dive into captivating virtual
              worlds, experience thrilling adventures, and unlock the magic of
              our VR rentals. Elevate your reality and embark on a journey like
              never before. Your virtual adventure awaits
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                href="/contact"
                className="rounded-md bg-white py-5 font-semibold text-gray-900 shadow-sm  focus-visible:outline focus-visible:outline-2 hover:scale-105 hover:bg-slate-200 px-10 focus-visible:outline-offset-2 focus-visible:outline-white text-xl relative z-20"
              >
                Get started
              </Link>
            </div>
          </div>
          <div className="my-auto lg:h-full flex items-center relative justify-center p-5 lg:mt-8">
            <Image
              className=" w-full max-w-none rounded-md  h-80 "
              src="/CTA.jpg"
              alt="VR rentals by SWAT VR"
              width={500}
              height={500}
            />
            <div className="h-[320px] w-[93%] left-8 lg:top-[10rem] top-[2rem] bg-yellow-500 rounded-md z-[-1] absolute " />
          </div>
        </div>
        <div className="bg-yellow absolute h-full w-full z-[555] top-0 left-0" />
      </div>
    </div>
  );
}
