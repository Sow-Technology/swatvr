import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
const TrippyScrollEffect = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "90deg"]);
  return (
    <div className="!relative z-0 h-[800vh]" ref={targetRef}>
      <div className="!h-screen !sticky !top-0">
        <Trippy rotate={rotate} />
      </div>
    </div>
  );
};
const NUM_SECTIONS = 50;
const PADDING = `${100 / NUM_SECTIONS / 2}vmin`;
const generateSections = (count, color, rotate) => {
  if (count === NUM_SECTIONS) {
    return <></>;
  }
  const nextColor = color === "#1A232E" ? "white" : "#1A232E";
  return (
    <Section rotate={rotate} background={color}>
      {generateSections(count + 1, nextColor, rotate)}
    </Section>
  );
};
const Trippy = ({ rotate }) => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {generateSections(0, "#1A232E", rotate)}
    </div>
  );
};
const Section = ({ background, children, rotate }) => {
  return (
    <motion.div
      className="relative h-full w-full origin-center"
      style={{ background, rotate, padding: PADDING }}
    >
      {children}
    </motion.div>
  );
};
export default TrippyScrollEffect;
