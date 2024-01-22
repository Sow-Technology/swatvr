import { Variants } from "framer-motion";

interface StaggerContainerVariants extends Variants {
  hidden: Record<string, any>;
  show: {
    transition: {
      staggerChildren?: any;
      delayChildren?: any;
    };
  };
}

interface FadeInVariant {
  hidden: {
    x: number;
    y: number;
    opacity: number;
  };
  show: {
    x: number;
    y: number;
    transition: {
      type: string;
      delay: number;
      duration: number;
      ease: string;
    };
  };
}

interface TextVariant {
  hidden: {
    y: number;
    opacity: number;
    scaleX: number;
  };
  show: {
    y: number;
    opacity: number;
    scaleX: number;
    transition: {
      type: string;
      duration: number;
      delay: number;
    };
  };
}

interface SlideInVariant {
  hidden: {
    x: string;
    y: string;
  };
  show: {
    x: number;
    y: number;
    transition: {
      type: string;
      delay: number;
      duration: number;
      ease: string;
    };
  };
}

const staggerContainer = (
  staggerChildren: any,
  delayChildren: any
): StaggerContainerVariants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
): FadeInVariant => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

const textVariant = (delay: number): Variants => ({
  hidden: {
    y: 50,
    opacity: 0,
    scaleX: 2,
  },
  show: {
    y: 0,
    opacity: 1,
    scaleX: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
): SlideInVariant => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "150%" : "0",
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : "0",
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export { staggerContainer, fadeIn, textVariant, slideIn };
