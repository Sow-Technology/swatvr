"use client"
import Image from 'next/image'

import React from 'react'
import { Button } from '../ui/button'
import { Rubik } from 'next/font/google'
import {motion} from "framer-motion"

const font = Rubik({ subsets: ["latin"] });
import {slideIn} from './../../lib/motion'



const HeroPage = () => {
  return (
   
   <div className="container px-6 py-16 mx-auto relative">
    <div className="absolute hero-gradient top-20 left-10 w-full h-[300px]"/>
  <div className="items-center lg:flex">
    <div className="w-full lg:w-1/2">
      <div className="lg:max-w-3xl text-center">
        <h1 className={`${font.className} text-3xl font-semibold text-white dark:text-white lg:text-4xl rubik`}><b >Beyond Reality:</b> Your Passport to Virtual Worlds with SWAT VR.</h1>
        
        <p className="mt-3 text-gray-50 dark:text-gray-50">Discover a new dimension of entertainment and exploration. At SWAT VR, we offer more than just VR rentals; we provide a gateway to unparalleled experiences. Unleash the extraordinary, and let your imagination take flight.</p>
        <Button className="px-10 bg-slate-900 my-10 shadow-md">Rent Now</Button>
      </div>
    </div>
    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 ">
      <motion.div variants={slideIn('right','tween',0.2,1)} className="relative w-full">
      <Image className="w-full h-full lg:max-w-3xl" src="/Headset_3-meta-gear-PhotoRoom.png-PhotoRoom.webp" alt="" width={500} height={500} />
      </motion.div>
    </div>
  </div>
</div>

  )
}

export default HeroPage