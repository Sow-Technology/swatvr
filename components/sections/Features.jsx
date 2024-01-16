"use client"
import React from 'react'
import {motion} from "framer-motion"
import { Button } from '../ui/button';
const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};
const Features = () => {
  return (
    <div className="relative w-full z-10">
    
    <section className="mx-auto max-w-7xl px-4 py-12 text-slate-100 pb-20 mb-32">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
        Unleash Your Reality with 
          <span className="text-slate-200"> Our VR Rentals</span>
        </h2>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
        >
          Rent Now
        </motion.div>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4 text-slate-900">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Immersive Experiences</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-indigo-50">
            Immerse yourself in a diverse range of captivating VR content, from heart-pounding games to educational adventures, providing an unparalleled journey into virtual realms.


            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Cutting-Edge Headsets:</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-orange-50">
            Access the pinnacle of VR technology with our cutting-edge headset rentals, delivering stunning visuals and seamless interaction for an exceptional virtual reality experience.

</span>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4 text-slate-900">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Dedicated Customer Support</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-emerald-50">
            Experience worry-free rentals with our dedicated customer support team. Have questions or need assistance? Our experts are ready to assist you throughout your virtual reality journey.

            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Flexible Packages</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-red-50">
            Choose from flexible rental packages tailored to your needs, whether it`s a short gaming session or an extended exploration. Our plans cater to every adventure, ensuring maximum enjoyment.


            </span>
          </div>
        </BounceCard>
      </div>
    </section>
    <svg className="absolute -bottom-72 z-10" 
    
     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1a232e" fill-opacity="1" d="M0,224L26.7,192C53.3,160,107,96,160,90.7C213.3,85,267,139,320,154.7C373.3,171,427,149,480,144C533.3,139,587,149,640,160C693.3,171,747,181,800,208C853.3,235,907,277,960,256C1013.3,235,1067,149,1120,133.3C1173.3,117,1227,171,1280,197.3C1333.3,224,1387,224,1413,224L1440,224L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
    </div>
  );
};



export default Features