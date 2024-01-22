import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  return (
    <div className="marquee w-full p-10">
      <motion.div
        className="track flex min-w-max w-[110%] rotate-6 gap-4"
        variants={marqueeVariants}
        animate="animate"
      >
        <div className="flex gap-4">
          <h1>
            SWAT VR - EXPERIENCE THE VIRTUAL REALITY WITH OUR RENTAL SERVICES
          </h1>
          <Image
            src="/marquee.svg"
            width={50}
            height={50}
            alt=" SWAT VR - EXPERIENCE THE VIRTUAL REALITY WITH OUR RENTAL SERVICES"
          />
        </div>
        <div className="flex gap-4">
          <h1>
            SWAT VR - EXPERIENCE THE VIRTUAL REALITY WITH OUR RENTAL SERVICES
          </h1>
          <Image
            src="/marquee.svg"
            width={50}
            height={50}
            alt=" SWAT VR - EXPERIENCE THE VIRTUAL REALITY WITH OUR RENTAL SERVICES"
          />
        </div>
        <div className="flex gap-4">
          <h1>
            SWAT VR - EXPERIENCE THE VIRTUAL REALITY WITH OUR RENTAL SERVICES
          </h1>
          <Image
            src="/marquee.svg"
            width={50}
            height={50}
            alt=" SWAT VR - EXPERIENCE THE VIRTUAL REALITY WITH OUR RENTAL SERVICES"
          />
        </div>
        <div className="flex gap-4">
          <h1>
            SWAT VR - EXPERIENCE THE VIRTUAL REALITY WITH OUR RENTAL SERVICES
          </h1>
          <Image
            src="/marquee.svg"
            width={50}
            height={50}
            alt=" SWAT VR - EXPERIENCE THE VIRTUAL REALITY WITH OUR RENTAL SERVICES"
          />
        </div>
        <div className="flex gap-4">
          <h1>
            SWAT VR - EXPERIENCE THE VIRTUAL REALITY WITH OUR RENTAL SERVICES
          </h1>
          <Image
            src="/marquee.svg"
            width={50}
            height={50}
            alt=" SWAT VR - EXPERIENCE THE VIRTUAL REALITY WITH OUR RENTAL SERVICES"
          />
        </div>
        <div className="flex gap-4">
          <h1>
            SWAT VR - EXPERIENCE THE VIRTUAL REALITY WITH OUR RENTAL SERVICES
          </h1>
          <Image
            src="/marquee.svg"
            width={50}
            height={50}
            alt=" SWAT VR - EXPERIENCE THE VIRTUAL REALITY WITH OUR RENTAL SERVICES"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
