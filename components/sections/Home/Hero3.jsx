"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Hero3 = () => {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Create the GSAP timeline
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".imageBoard",
        pin: true,
        start: "top top",
        end: "+=300%",
        scrub: 1,
      },
      defaults: {
        ease: "none",
      },
    });

    // Animation sequence
    timeline
      .to(
        document.body,
        {
          delay: 0.3,
          // backgroundColor: "#f0f0f0",
        },
        "start"
      )
      .to(
        ".upper-container h1",
        {
          scale: 5,
        },
        "start"
      )
      .to(
        ".upper-container h1",
        {
          opacity: 0,
        },
        "start"
      )
      .to(
        "#scaleableImg1",
        {
          scale: 10,
          x: -1500,
        },
        "start"
      )
      .to(
        "#scaleableImg2",
        {
          scale: 10,
          x: -2500,
        },
        "start"
      )
      .to(
        "#scaleableImg3",
        {
          scale: 10,
          x: -2000,
        },
        "start"
      )
      .to(
        "#scaleableImg4",
        {
          scale: 10,
          x: 3000,
        },
        "start"
      )
      .to(
        "#scaleableImg5",
        {
          scale: 10,
          x: 2000,
        },
        "start"
      )
      .to(
        ".cardImage",
        {
          delay: 0.1,
          scale: 5,
        },
        "start"
      )
      .to(
        ".cardImage",
        {
          delay: 0.4,
          opacity: 1,
        },
        "start"
      )
      .to(".scaleableImg", {
        opacity: 0,
      });
  }, []);
  return (
    <div>
      <div className="upper-container">
        <span>(OUR AWARDS)</span>
        <h1 className="text-slate-100 font-bold text-center">
          Beyond Reality: Your Passport to Virtual Worlds with SWAT VR.
        </h1>
      </div>
      <div className="imageBoard">
        <Image
          alt=""
          width={80}
          height={80}
          src="/vr-camera_8170956.png"
          id="scaleableImg1"
          className="scaleableImg mix-blend-difference h-50 w-50"
        />
        <Image
          alt=""
          width={80}
          height={80}
          src="/vr-3.png"
          id="scaleableImg2"
          className="scaleableImg"
        />
        <Image
          alt=""
          width={80}
          height={80}
          src="/Headset_3-meta-gear-PhotoRoom.png-PhotoRoom.webp"
          id="scaleableImg3"
          className="scaleableImg"
        />
        <Image
          alt=""
          width={80}
          height={80}
          src="/vricon2.png"
          id="scaleableImg4"
          className="scaleableImg"
        />
        <Image
          alt=""
          width={500}
          height={500}
          src="/sh5.webp"
          id="scaleableImg5"
          className="scaleableImg"
        />
        <div className="cardImage">WE PLAY TO WIN</div>
      </div>
    </div>
  );
};

export default Hero3;
