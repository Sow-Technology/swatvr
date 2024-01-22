"use client";
import { textVariant, staggerContainer } from "@/lib/motion";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Marquee from "./Home/Marquee";

export const Hero: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!targetRef.current) return;
      const { clientX, clientY } = ev;
      targetRef.current.style.setProperty("--x", `${clientX}px`);
      targetRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      className="relative mb-[8rem] h-screen py-16 text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-secondary)_0%,_transparent_100%)] before:opacity-40"
    >
      <motion.div
        style={{ position, scale, x: "-50%" }}
        className="fixed left-1/2 z-10 flex flex-col items-center"
      >
        <p className="mb-2 text-xl font-light">
          <span className="font-medium">SWAT</span> VR
        </p>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="items-center lg:flex flex-col gap-10"
        >
          <motion.div className="w-full text-center">
            <motion.h1
              variants={textVariant(1.1)}
              className={` font-bold leading-[60px] text-5xl  text-slate-100 dark:text-white lg:text-7xl rubik w-full`}
            >
              Beyond Reality: Your Passport to Virtual Worlds with SWAT VR.
            </motion.h1>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="mt-[400px]">
        <Marquee />
      </div>
    </motion.section>
  );
};
