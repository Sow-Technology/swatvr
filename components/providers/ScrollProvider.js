"use client";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
const ScrollProvider = ({ children }) => {
  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        lerp: 0.3,
        // ... all available Locomotive Scroll instance options
        multiplier: 2.1,
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        {children}
      </main>
    </LocomotiveScrollProvider>
  );
};
export default ScrollProvider;
