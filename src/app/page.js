"use client";
import AboutUs from "@/components/AboutUs";
import Connectivity from "@/components/Connectivity";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import ScrollAnimation from "@/components/ScrollAnimation";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    // Initialize Lenis on client-side
    const lenis = new Lenis({
      duration: 0.1, // Adjust the duration to control smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Optional easing function
      smooth: true, // Enable smooth scrolling
      direction: "vertical", // Scroll direction, can be 'horizontal' too
      smoothTouch: false, // Disables smooth scrolling on touch devices
    });

    // Update function that is called every frame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Cleanup when component unmounts
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <Nav />
      <ScrollAnimation />
      <Services />
      <WhyChooseUs />
      <AboutUs />
      <Connectivity />
      <Footer />
    </>
  );
}
