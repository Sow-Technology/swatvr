import Image from "next/image";
import React, { useEffect } from "react";
import { Anton } from "next/font/google";
const anton = Anton({ subsets: ["latin"], weight: "400" });

const Hero = () => {
  useEffect(() => {
    const img = document.querySelector("#img");
    const cursor = document.querySelector("#cursor");
    img.addEventListener("mousemove", (e) => {
      const rotx = 48 - e.x / 11;
      const roty = Math.abs(rotx);
      img.style.transform = `rotateX(${rotx}deg) rotateY(${-roty}deg)`;
    });
    img.addEventListener("mouseleave", (e) => {
      setTimeout(() => {
        img.style.transform = `rotateX(0deg) rotateY(0deg)`;
      }, [1000]);
    });
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.x}px`;
      cursor.style.top = `${e.y - 80}px`;
    });
  });
  return (
    <main
      className={`${anton.className} font-[400] h-full w-full relative flex flex-col items-center justify-center min-h-[750px] cursor-none`}
    >
      <div className="gradient-02 z-0" />

      <h3
        id="head-text"
        className=" text-3xl uppercase z-[99] top-[21%] w-[49%] absolute text-center text-[#fff] mix-blend-difference tracking-[0.5px] "
      >
        Beyond Reality: Your Passport to Virtual Worlds with SWAT VR.
      </h3>
      <div
        className="absolute top-[29%] w-full whitespace-nowrap overflow-x-auto overflow-y-hidden noscrollbar mr-[30px] text-[100px]"
        id="text1"
      >
        <h1>VIRTUAL REALITY</h1>
        <h1>VIRTUAL REALITY</h1>
        <h1>VIRTUAL REALITY</h1>
        <h1>VIRTUAL REALITY</h1>
      </div>
      <div
        className="absolute top-[45%] w-full whitespace-nowrap overflow-x-auto overflow-y-hidden noscrollbar"
        id="text2"
      >
        <h1>VIRTUAL REALITY</h1>
        <h1>VIRTUAL REALITY</h1>
        <h1>VIRTUAL REALITY</h1>
        <h1>VIRTUAL REALITY</h1>
      </div>
      <div
        id="text3"
        className="absolute top-[60.5%] w-full whitespace-nowrap overflow-x-auto overflow-y-hidden noscrollbar"
      >
        <h1>VIRTUAL REALITY</h1>
        <h1>VIRTUAL REALITY</h1>
        <h1>VIRTUAL REALITY</h1>
        <h1>VIRTUAL REALITY</h1>
      </div>
      <Image
        src="/herovr.webp"
        alt=""
        id="img"
        width={330}
        height={430}
        className="h-[430px] contrast-125 w-[330px] object-cover transition-transform !object-center pos"
      />
      <div id="cursor"></div>
    </main>
  );
};

export default Hero;
