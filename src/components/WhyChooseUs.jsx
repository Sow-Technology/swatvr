import React from "react";
import { motion } from "framer-motion";
import { ScrollParallax } from "react-just-parallax";

const FeatureCard = ({ title, description, icon, index }) => (
  <motion.div
    className="bg-slate-900/25 backdrop-blur-3xl border border-slate-50/20 rounded-xl p-6 shadow-xl"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold mb-2 text-purple-50">{title}</h3>
    <p className="text-gray-50">{description}</p>
  </motion.div>
);

const WhyChooseUs = () => {
  const features = [
    {
      icon: "🚀",
      title: "Cutting-Edge Technology",
      description: "Access to the latest VR headsets and accessories.",
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      description: "Flexible rental plans to fit every budget.",
    },
    {
      icon: "🎮",
      title: "Extensive Game Library",
      description: "A vast selection of VR games and experiences.",
    },
    {
      icon: "🛠️",
      title: "Expert Support",
      description: "24/7 technical assistance from VR specialists.",
    },
    {
      icon: "🔒",
      title: "Sanitized Equipment",
      description: "Rigorous cleaning protocols for your safety.",
    },
    {
      icon: "🔄",
      title: "Easy Returns",
      description: "Hassle-free return process and flexible extensions.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden ">
      <ScrollParallax isAbsolutelyPositioned className="z-20">
        <motion.div
          className="absolute top-20 z-10 right-10 w-1/3 h-2/3 bg-[#63e] rounded-full mix-blend-multiply filter blur-xl "
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </ScrollParallax>
      <div className="h-10 w-screen -top-5 bg-slate-50 blur-3xl" />
      <motion.div
        className="absolute inset-0 z-0 opacity-85"
        style={{
          backgroundImage: "url(/bg1.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // y: backgroundY,
        }}
      />{" "}
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-5xl relative w-max mx-auto font-bold text-center my-20 text-white"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="relative z-10">Why Choose Us</span>
          <span className="text-neutral-950 absolute blur-sm -left-1 top-0.5 z-0">
            Why Choose Us
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
