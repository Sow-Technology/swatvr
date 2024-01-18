"use client";
import Image from "next/image";
import { Rubik } from "next/font/google";
import React from "react";
import { Button } from "../../ui/button";
import { motion } from "framer-motion";

const font = Rubik({ subsets: ["latin"] });
import { slideIn } from "../../../lib/motion";
import Link from "next/link";
const HeroPage = () => {
  return (
    <div className="container px-6 py-28 mx-auto relative my-10">
      <div className="absolute hero-gradient top-20 left-10 w-full h-[300px]" />
      <div className="items-center lg:flex gap-10">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-3xl text-center">
            <h1
              className={`${font.className} text-3xl font-semibold text-white dark:text-white lg:text-5xl rubik`}
            >
              Beyond Reality: Your Passport to Virtual Worlds with SWAT VR.
            </h1>

            <p className="mt-3 text-gray-50 dark:text-gray-50">
              Discover a new dimension of entertainment and exploration. At SWAT
              VR, we offer more than just VR rentals; we provide a gateway to
              unparalleled experiences. Unleash the extraordinary, and let your
              imagination take flight.
            </p>
            <Link href="/contact" className="z-50 cursor-pointer relative">
              <Button className="px-12 hover:bg-slate-100 hover:scale-105 py-8 text-slate-900 cursor-pointer font-bold z-50 bg-slate-200 my-10 shadow-md text-2xl">
                Rent Now
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 ">
          <motion.div
            initial={{ x: "100%", opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full cursor-pointer object-cover relative"
          >
            <Image
              className="w-9/12 h-9/12 lg:max-w-3xl z-10 relative noselect object-cover rounded-full aspect-square mx-auto "
              src="/herovr.webp"
              alt=""
              width={500}
              height={500}
            />
            <div className="bg-yellow-500 w-9/12 h-9/12 top-10 absolute inset-0 rounded-full left-32 lg:left-28" />
          </motion.div>
        </div>
      </div>
      <Image
        src="/vr-camera_8170956.png"
        alt="Best VR Rentals in india"
        className="absolute top-12 right-12 lg:block hidden"
        width={80}
        height={80}
      />
      <Image
        src="/vricon2.png"
        alt="Best VR Rentals in india"
        className="absolute bottom-28 right-1/2 lg:block hidden"
        width={80}
        height={80}
      />
      <Image
        src="/vr-3.png"
        alt="Best VR Rentals in india"
        className="absolute top-[40%] -left-20 lg:block hidden"
        width={80}
        height={80}
      />
    </div>
  );
};

export default HeroPage;
