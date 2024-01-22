"use client";
import * as React from "react";
import { motion } from "framer-motion";
const svgVariants = {
  hidden: { scale: 2 },
  visible: {
    scale: 1,
    transition: { duration: 0.15 },
    ease: "easeInOut",
  },
};
const pathVariants = {
  hidden: { opacity: 0, pathLength: 0, height: 0 },
  visible: {
    opacity: 0.7,
    pathLength: 0.7,
    height: 0.5,
    transition: {
      duration: 3, // Adjust duration
      ease: "easeInOut", // Adjust ease
    },
  },
};
const VR = (props) => {
  const [path, setPath] = React.useState([]);

  React.useEffect(() => {
    const coordinates = [
      "M72.653",
      "30.419H17.347a7.904",
      "7.904",
      "0",
      "0",
      "0-7.904",
      "7.904v22.641a7.904",
      "7.904",
      "0",
      "0",
      " 0",
      "7.904",
      "7.904h14.459c2.839",
      "0",
      "5.503-1.272",
      "7.379-3.402",
      "1.42-1.612",
      "3.498-2.63",
      "5.815-2.63s4.396",
      "1.017",
      " 5.815",
      "2.63c1.876",
      "2.131",
      "4.54",
      "3.402",
      "7.379",
      "3.402h14.459a7.904",
      "7.904",
      "0",
      "0",
      "0",
      "7.904-7.904V38.323a7.904",
      "7.904",
      "0",
      "0a",
      "0-7.904-7.904z",
    ];
    const index = path.length;

    if (index < coordinates.length) {
      const timer = setTimeout(() => {
        // Use the functional update form of setState
        // Spread the previous path and add the next coordinate
        setPath((prevPath) => [...prevPath, coordinates[index]]);
      }, 20);

      return () => clearTimeout(timer);
    }
  }, [path]); // Add path and coordinates as dependencies
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={320}
      variants={svgVariants}
      initial="hidden"
      animate="visible"
      height={300}
      {...props}
    >
      <g
        style={{
          stroke: "none",
          strokeWidth: 0,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "none",
          fillRule: "nonzero",
          opacity: 1,
        }}
      >
        <path
          d="M9.443 57.555H3.65A2.65 2.65 0 0 1 1 54.905V44.381a2.65 2.65 0 0 1 2.65-2.65h5.793v15.824z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            // fill: "#F9A825",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(3.52 0 0 3.52 1.407 1.407)"
        />
        <path
          d="M10.443 58.555H3.65A3.653 3.653 0 0 1 0 54.906V44.381a3.654 3.654 0 0 1 3.65-3.65h6.793v17.824zM3.65 42.731c-.91 0-1.65.74-1.65 1.65v10.524c0 .909.74 1.649 1.65 1.649h4.793V42.731H3.65zM86.35 57.555h-5.793V41.731h5.793a2.65 2.65 0 0 1 2.65 2.65v10.524a2.65 2.65 0 0 1-2.65 2.65z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "#F9A825",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(3.52 0 0 3.52 1.407 1.407)"
        />
        <path
          d="M86.351 58.555h-6.794V40.731h6.794A3.653 3.653 0 0 1 90 44.381v10.524a3.653 3.653 0 0 1-3.649 3.65zm-4.794-2h4.794c.909 0 1.649-.74 1.649-1.649V44.381c0-.91-.74-1.65-1.649-1.65h-4.794v13.824zM50.914 30.419H39.086v-6.538a2.75 2.75 0 0 1 2.749-2.749h6.331a2.75 2.75 0 0 1 2.749 2.749v6.538z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            // fill: "#F9A825",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(3.52 0 0 3.52 1.407 1.407)"
        />
        <path
          d="M51.914 31.419H38.085v-7.538a3.754 3.754 0 0 1 3.749-3.749h6.332a3.753 3.753 0 0 1 3.748 3.749v7.538zm-11.829-2h9.829v-5.538a1.75 1.75 0 0 0-1.748-1.749h-6.332a1.75 1.75 0 0 0-1.749 1.749v5.538z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "#F9A825",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(3.52 0 0 3.52 1.407 1.407)"
        />
        <motion.path
          d={path.join(" ")}
          variants={pathVariants}
          initial="hidden"
          animate={{ pathLength: [0, 1] }}
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "#F9A825",
            fillRule: "nonzero",
            opacity: 1,
          }}
          // initial={{ y: 0 }}
          // animate={{ y: "100%" }}
          // id="vr"
          transform="matrix(3.52 0 0 3.52 1.407 1.407)"
        />
        <path
          d="M72.653 69.867H58.194c-3.073 0-6.036-1.363-8.13-3.741-1.281-1.456-3.128-2.291-5.064-2.291s-3.783.835-5.065 2.291c-2.094 2.378-5.057 3.741-8.129 3.741H17.347c-4.91 0-8.904-3.994-8.904-8.903V38.323c0-4.91 3.994-8.904 8.904-8.904h55.306c4.909 0 8.903 3.994 8.903 8.904v22.641c.001 4.909-3.993 8.903-8.903 8.903zM45 61.835a8.75 8.75 0 0 1 6.565 2.969c1.715 1.947 4.13 3.063 6.629 3.063h14.459a6.91 6.91 0 0 0 6.903-6.903V38.323c0-3.807-3.097-6.904-6.903-6.904H17.347a6.912 6.912 0 0 0-6.904 6.904v22.641a6.91 6.91 0 0 0 6.904 6.903h14.458c2.498 0 4.914-1.116 6.628-3.063A8.757 8.757 0 0 1 45 61.835z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "#F9A825",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(3.52 0 0 3.52 1.407 1.407)"
        />
        <path
          d="M16.822 45.307a.999.999 0 0 1-.707-1.707l7.697-7.697a.999.999 0 1 1 1.414 1.414l-7.697 7.697a.997.997 0 0 1-.707.293zM29.291 41.458a.999.999 0 0 1-.707-1.707l3.624-3.624a.999.999 0 1 1 1.414 1.414l-3.624 3.624a.997.997 0 0 1-.707.293zM17.047 53.702a.999.999 0 0 1-.707-1.707l8.875-8.875a.999.999 0 1 1 1.414 1.414l-8.875 8.875a.997.997 0 0 1-.707.293z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "#F9A825",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(3.52 0 0 3.52 1.407 1.407)"
        />
      </g>
    </motion.svg>
  );
};
export default VR;
