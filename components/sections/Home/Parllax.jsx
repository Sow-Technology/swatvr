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
      className="p-5 min-h-screen max-w-7xl mx-auto"
    >
      <div className="mb-10 grid max-w-2xl grid-cols-1 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg flex">
              <div>
                <p className="text-base font-semibold leading-7 text-indigo-600 uppercase">
                  Your Experience
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  VR Odyssey: Dive into the Extraordinary
                </h1>
              </div>
            </div>
          </div>
          <p className="mt-6 text-xl leading-8 text-gray-700 text-justify">
            Embark on a mesmerizing journey with our VR rental services. Immerse
            yourself in captivating videos that breathe life into the
            extraordinary adventures offered by our VR rentals. Beyond
            descriptions, witness the magic firsthand.
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

      <div className="  text-white text-center">
        <h2 className="text-4xl font-bold mb-4">VR Experience Showcase</h2>
        <p className="text-lg">
          Scroll down to witness the magic of virtual reality with our
          parallax-enhanced videos.
        </p>
        <p className="text-lg">
          Ready to dive into enchanting worlds? Click play and start your
          extraordinary journey.
        </p>
      </div>
    </motion.section>
  );
};

export default Parllax;
