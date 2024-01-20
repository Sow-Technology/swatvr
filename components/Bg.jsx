import * as React from "react";
const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={1920} height={1080} {...props}>
    <path fill="#001220" d="M0 0h1920v1080H0z" />
    <path
      fill="#FBAE3C"
      d="M1110 1080c2.4-110.6 4.9-221.3 61.7-310 56.7-88.7 167.8-155.5 269.6-168.7 101.8-13.3 194.2 27 272.4-19.3C1792 535.7 1856 402.9 1920 270v810ZM810 0c4.4 121.4 8.7 242.7-61.7 310-70.4 67.2-215.5 80.3-297.9 140.4-82.3 60.2-101.8 167.3-166.4 235.1C219.4 753.3 109.7 781.6 0 810V0Z"
    />
  </svg>
);
export default SvgComponent;
