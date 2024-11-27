import React from "react";
import { motion } from "framer-motion";
import { ScrollParallax } from "react-just-parallax";

const AboutUs = () => {
  return (
    <section className="py-20 relative overflow-hidden  ">
      <div className="absolute inset-0 lines"></div>
      <ScrollParallax isAbsolutelyPositioned>
        <motion.div
          className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </ScrollParallax>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-5xl relative w-max mx-auto font-bold text-center my-20 text-slate-950"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="relative z-10">About Us</span>
        </motion.h2>

        <motion.div
          className="bg-white/10 backdrop-blur-3xl border border-slate-50/20 rounded-xl p-8 shadow-xl font-medium"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-gray-900 mb-6 ">
            At Swat VR , we&#39;re passionate about making virtual reality
            accessible to everyone. Founded in 2022, our mission is to bridge
            the gap between cutting-edge VR technology and curious minds eager
            to explore new digital frontiers.
          </p>
          <p className="text-lg text-gray-900 mb-6">
            Our team of VR enthusiasts and tech experts work tirelessly to
            curate the best VR experiences and provide top-notch support. We
            believe that VR has the power to transform education, entertainment,
            and human interaction, and we&#39;re excited to be at the forefront
            of this revolution.
          </p>
          <p className="text-lg text-gray-900">
            Whether you&#39;re a gamer looking for the next level of immersion,
            an educator seeking innovative teaching tools, or a curious
            individual wanting to dip your toes into virtual worlds, we&#39;re
            here to guide you every step of the way.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.button
            className="bg-purple-500 text-white font-bold py-3 px-8 rounded-full text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your VR Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
