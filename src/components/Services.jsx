import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollParallax } from "react-just-parallax";

const ServiceCard = ({ title, description, icon, index }) => {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-3xl border border-slate-50/20 rounded-xl p-6 shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-2 text-slate-50">{title}</h3>
      <p className="text-gray-200">{description}</p>
    </motion.div>
  );
};

const PackageCard = ({ title, price, features, highlighted }) => {
  return (
    <motion.div
      className={`rounded-xl p-6 shadow-xl ${
        highlighted
          ? "bg-purple-600/90 text-slate-50 border border-[#fff]/60 backdrop-blur-3xl"
          : "bg-white/10 backdrop-blur-md border border-[#63e]/20"
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-4xl font-bold mb-6">{price}</p>
      <ul className="mb-6">
        {features.map((feature, index) => (
          <li key={index} className="mb-2 flex items-center">
            <span className="mr-2 text-green-400">✓</span> {feature}
          </li>
        ))}
      </ul>
      <motion.button
        className="w-full py-2 px-4 bg-purple-500 text-white rounded-md font-bold"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Choose Plan
      </motion.button>
    </motion.div>
  );
};

export default function Services() {
  const { scrollYProgress } = useScroll();
  // const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const services = [
    {
      title: "Premium VR Gear",
      description:
        "Access the latest and most advanced VR headsets and accessories.",
      icon: "🥽",
    },
    {
      title: "Curated Experiences",
      description:
        "Enjoy a handpicked selection of the best VR games and applications.",
      icon: "🎮",
    },
    {
      title: "Technical Support",
      description: "24/7 expert assistance to ensure a smooth VR experience.",
      icon: "🛠️",
    },
    {
      title: "VR Training",
      description: "Personalized training sessions to get you started with VR.",
      icon: "👨‍🏫",
    },
    {
      title: "Multi-player Setup",
      description: "Equipment and support for group VR experiences.",
      icon: "👥",
    },
    {
      title: "Custom Content",
      description: "Access to exclusive VR content tailored for our customers.",
      icon: "🎬",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/bg1.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // y: backgroundY,
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-5xl relative w-max mx-auto font-bold text-center my-20 text-white"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="relative z-10">Our Services & Packages</span>
          <span className="text-neutral-950 absolute -left-1 top-0.5 z-0 ">
            Our Services & Packages
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20 mb-40">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>

        <motion.h3
          className="text-5xl relative w-max mx-auto font-bold text-center my-20 text-white "
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="relative z-10">Choose Your Adventure</span>
          <span className="text-neutral-950 absolute -left-1 top-0.5 z-0">
            Choose Your Adventure
          </span>
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-20">
          <PackageCard
            title="Weekend Warrior"
            price="$79/weekend"
            features={[
              "3-day rental",
              "1 Premium VR Headset",
              "5 Popular VR Games",
              "Basic Support",
            ]}
          />
          <PackageCard
            title="VR Enthusiast"
            price="$199/month"
            features={[
              "30-day rental",
              "1 Premium VR Headset",
              "Unlimited Game Access",
              "Priority Support",
              "Monthly New Releases",
            ]}
            highlighted={true}
          />
          <PackageCard
            title="Pro Explorer"
            price="$499/quarter"
            features={[
              "90-day rental",
              "2 Premium VR Headsets",
              "Unlimited Game Access",
              "24/7 Premium Support",
              "Early Access to New Tech",
            ]}
          />
        </div>

        <ScrollParallax isAbsolutelyPositioned>
          <motion.div
            className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500 rounded-full opacity-50 blur-3xl"
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

        <ScrollParallax isAbsolutelyPositioned>
          <motion.div
            className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500 rounded-full opacity-50 blur-2xl"
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
      </div>
    </section>
  );
}
