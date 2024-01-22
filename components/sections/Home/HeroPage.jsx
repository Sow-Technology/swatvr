import Image from "next/image";
import { Rubik } from "next/font/google";
import React, { useEffect } from "react";
import { Button } from "../../ui/button";
import { useRef } from "react";
import { Open_Sans } from "next/font/google";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useAnimation,
} from "framer-motion";
const font = Rubik({ subsets: ["latin"] });
const climate = Open_Sans({ subsets: ["latin"] });
import Link from "next/link";
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
const HeroPage = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Define the scroll animation sequence
    const sequence = async () => {
      // Scale up on initial load
      await controls.start({ opacity: 1, scale: 1 });

      // Scale down on scroll
      controls.start({
        scale: 1.8,
        transition: { duration: 0.5, ease: "easeInOut" },
      });

      // Scale back to default size on scroll back
      controls.start({
        scale: 1,
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    };

    // Run the animation sequence
    sequence();
  }, [controls]);
  const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  });
  const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  });
  const textVariant = (delay) => ({
    hidden: {
      y: 50,
      opacity: 0,
      scaleX: 2,
    },
    show: {
      y: 0,
      opacity: 1,
      scaleX: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay,
      },
    },
  });
  const slideIn = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "150%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  });

  return (
    <div className="container px-6 py-28 mx-auto relative overflow-hidden my-10 lg:max-w-7xl">
      <div className="gradient-02 z-0" />

      <div className="absolute hero-gradient top-20 left-10 w-full h-[300px]" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="items-center lg:flex flex-col gap-10"
      >
        <div className="w-full ">
          <motion.div
            className="w-full text-center"
            // initial={{ opacity: 0, scale: 0.8 }}
            // animate={controls}
            // exit={{ opacity: 0, scale: 0.8 }}
          >
            <motion.h1
              variants={textVariant(1.1)}
              className={`${climate.className} font-bold leading-[60px] text-5xl  text-slate-100 dark:text-white lg:text-7xl rubik w-full`}
            >
              Beyond Reality: Your Passport to Virtual Worlds with SWAT VR.
            </motion.h1>
          </motion.div>
        </div>
        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <motion.div
            // initial={{ x: "100%", opacity: 0, scale: 0.8 }}
            // animate={{ x: 0, opacity: 1, scale: 1 }}
            variants={slideIn("right", "tween", 0.2, 1)}
            // exit={{ x: "100%", opacity: 0, scale: 0.8 }}
            // transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full cursor-pointer object-cover relative"
          >
            <motion.div
              initial={{ x: -50, y: 50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              exit={{ x: -50, y: 50, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="bg-yellow-500 w-9/12 h-9/12 top-10 absolute inset-0 rounded-full left-32 lg:left-28"
            />
            <Image
              className="w-9/12 h-9/12  z-10 relative noselect object-cover rounded-full aspect-square mx-auto "
              src="/herovr.webp"
              alt=""
              width={500}
              height={500}
            />
          </motion.div>
        </div>
      </motion.div>
      <Image
        src="/vr-camera_8170956.png"
        alt="Best VR Rentals in india"
        className="absolute top-12 right-12 lg:block hidden"
        width={80}
        height={80}
      />
      <motion.div
        initial={{ x: 50, y: -50, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{ x: 50, y: -50, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute bottom-28 right-1/2 lg:block hidden"
      >
        <Image
          src="/vricon2.png"
          alt="Best VR Rentals in india"
          width={80}
          height={80}
        />
      </motion.div>
      <motion.div
        initial={{ x: -50, y: 50, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{ x: -50, y: 50, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute top-[40%] -left-20 lg:block hidden"
      >
        <Image
          src="/vr-3.png"
          alt="Best VR Rentals in india"
          width={80}
          height={80}
        />
      </motion.div>
    </div>
  );
};

export default HeroPage;
