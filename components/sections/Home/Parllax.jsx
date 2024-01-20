"use client";
import { motion, useAnimation } from "framer-motion";
import React from "react";

const Parllax = () => {
  const controls = useAnimation();

  return (
    <motion.section
      initial={{ y: 0 }}
      animate={controls}
      whileInView={{ x: 10, y: 10 }}
      className="p-5 min-h-screen max-w-7xl mx-auto pb-10"
    >
      <div className="mb-10 grid max-w-2xl grid-cols-1 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg flex">
              <div>
                <p className="text-base font-semibold leading-7 text-yellow-500 uppercase">
                  Your Experience
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                  What You Can Expect From Us
                </h1>
              </div>
            </div>
          </div>
          <p className="mt-6 text-xl leading-8 text-gray-50/80 text-justify">
            At SWATVR , we bring joy and excitement to every event we touch.
            With us by your side, you can rest assured that your guests will be
            delighted, your event planning will be a breeze, and that your event
            will be unforgettable.
          </p>
        </div>
      </div>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded-2xl"
      >
        <source src="/vr2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.section>
  );
};

export default Parllax;
