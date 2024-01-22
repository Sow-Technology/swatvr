"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const vrThemes = [
  {
    title: "Virtual Travel",
    bgColor: "#FF5733",
    textColor: "#FFFFFF",
  },
  { title: "Gaming Extravaganza", bgColor: "#33FF57", textColor: "#000000" },
  { title: "Educational Adventures", bgColor: "#5733FF", textColor: "#FFFFFF" },
  { title: "Space Exploration", bgColor: "#33B5FF", textColor: "#000000" },
  { title: "Escape Room Challenge", bgColor: "#FF33B5", textColor: "#FFFFFF" },
  {
    title: "Underwater Exploration",
    bgColor: "#B5FF33",
    textColor: "#000000",
  },
  {
    title: "Virtual Concerts & Performances",
    bgColor: "#3366FF",
    textColor: "#FFFFFF",
  },
  {
    title: "Corporate Training and Team Building",
    bgColor: "#FF3366",
    textColor: "#000000",
  },

  // Add more themes as needed
];

const ShuffleHero = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  useEffect(() => {});
  return (
    <section className="w-full px-8 my-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl py-20 mx-auto relative z-10">
      <ShuffleGrid />
      <div className="flex items-start flex-col h-full">
        <div className="lg:max-w-lg">
          <p className="text-base font-semibold leading-7 text-yellow-500">
            VR Spectaculars
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            Explore Unforgettable VR Experiences with Our Rental Services
          </h1>
        </div>
        <ul className="mt-6 flex flex-wrap gap-2">
          {vrThemes.map((theme, index) => (
            <li
              key={index}
              style={{ backgroundColor: theme.bgColor, color: theme.textColor }}
              className="px-5 py-2 rounded-2xl font-semibold shadow-sm "
            >
              {theme.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/sh1.webp",
  },
  {
    id: 2,
    src: "/sh2.webp",
  },
  {
    id: 3,
    src: "/sh3.webp",
  },
  {
    id: 4,
    src: "/sh4.webp",
  },
  {
    id: 5,
    src: "/sh5.webp",
  },
  {
    id: 6,
    src: "/sh6.webp",
  },
  {
    id: 7,
    src: "/sh7.webp",
  },
  {
    id: 8,
    src: "/sh8.webp",
  },
  {
    id: 9,
    src: "/sh9.webp",
  },
  {
    id: 10,
    src: "/sh10.webp",
  },
  {
    id: 11,
    src: "/sh11.webp",
  },
  {
    id: 12,
    src: "/sh12.webp",
  },
  {
    id: 13,
    src: "/sh13.webp",
  },
  {
    id: 14,
    src: "/sh14.webp",
  },
  {
    id: 15,
    src: "/sh15.webp",
  },
  {
    id: 16,
    src: "/sh16.webp",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      loading="lazy"
      placeholder="blur"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    const shuffleSquares = () => {
      setSquares((prevSquares) => generateSquares(prevSquares));
      timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
