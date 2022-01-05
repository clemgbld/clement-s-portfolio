import React from "react";
import { AnimatedPath } from "../CustomMotion/CustomMotion";
import classes from "./MainSVG.module.css";

const MainSVG = () => {
  const pathVariants = {
    initial: {
      opacity: 0,
      pathLength: 0,
    },
    animate: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        delay: 1.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <svg
      className={classes.svg}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlnssvgjs="http://svgjs.com/svgjs"
      width="50rem"
      height="56rem"
      preserveAspectRatio="xMinYMin "
      viewBox="0 0 500 560"
    >
      <g mask='url("#SvgjsMask1257")' fill="none">
        <g mask='url("#SvgjsMask1258")'>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M312.5 312.5L287.5 312.5L262.5 312.5L237.5 312.5M362.5 312.5L337.5 337.5L312.5 337.5M537.5 287.5L512.5 287.5L487.5 287.5L462.5 287.5L437.5 312.5L412.5 312.5L387.5 312.5L362.5 312.5L337.5 312.5L312.5 312.5L287.5 287.5L262.5 287.5L237.5 287.5"
            stroke="#08fdd8"
            strokeWidth="4.17"
          ></AnimatedPath>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M231.25 287.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM231.25 312.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM306.25 337.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z"
            fill="#08fdd8"
          ></AnimatedPath>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M412.5 287.5L387.5 262.5L362.5 262.5L337.5 262.5M262.5 262.5L237.5 237.5L212.5 237.5M137.5 262.5L112.5 237.5L87.5 237.5L62.5 237.5M437.5 262.5L412.5 262.5M537.5 262.5L512.5 262.5L487.5 262.5L462.5 262.5L437.5 262.5L412.5 287.5L387.5 287.5L362.5 287.5L337.5 287.5L312.5 287.5L287.5 262.5L262.5 262.5L237.5 262.5L212.5 262.5L187.5 262.5L162.5 262.5L137.5 262.5L112.5 262.5L87.5 262.5"
            stroke="#08fdd8"
            strokeWidth="4.17"
          ></AnimatedPath>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M81.25 262.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM331.25 262.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM206.25 237.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM56.25 237.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM406.25 262.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z"
            fill="#08fdd8"
          ></AnimatedPath>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M312.5 387.5L287.5 362.5L262.5 362.5L237.5 362.5L212.5 362.5M337.5 387.5L312.5 362.5M362.5 362.5L337.5 362.5M537.5 312.5L512.5 312.5L487.5 312.5L462.5 312.5L437.5 337.5L412.5 337.5L387.5 337.5L362.5 362.5L337.5 387.5L312.5 387.5L287.5 387.5"
            stroke="#08fdd8"
            strokeWidth="4.17"
          ></AnimatedPath>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M281.25 387.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM206.25 362.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM306.25 362.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM331.25 362.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z"
            fill="#08fdd8"
          ></AnimatedPath>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M537.5 237.5L512.5 237.5L487.5 237.5L462.5 237.5L437.5 237.5"
            stroke="#08fdd8"
            strokeWidth="4.17"
          ></AnimatedPath>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M431.25 237.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z"
            fill="#08fdd8"
          ></AnimatedPath>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M312.5 412.5L287.5 437.5M537.5 337.5L512.5 337.5L487.5 337.5L462.5 337.5L437.5 362.5L412.5 362.5L387.5 387.5L362.5 387.5L337.5 412.5L312.5 412.5L287.5 412.5"
            stroke="#08fdd8"
            strokeWidth="4.17"
          ></AnimatedPath>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M281.25 412.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM281.25 437.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z"
            fill="#08fdd8"
          ></AnimatedPath>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M237.5 162.5L212.5 162.5M362.5 187.5L337.5 212.5L312.5 212.5M287.5 162.5L262.5 187.5L237.5 187.5M187.5 137.5L162.5 112.5M537.5 212.5L512.5 212.5L487.5 212.5L462.5 212.5L437.5 212.5L412.5 187.5L387.5 187.5L362.5 187.5L337.5 187.5L312.5 187.5L287.5 162.5L262.5 162.5L237.5 162.5L212.5 137.5L187.5 137.5L162.5 137.5L137.5 137.5"
            stroke="#08fdd8"
            strokeWidth="4.17"
          ></AnimatedPath>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M131.25 137.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM206.25 162.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM306.25 212.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM231.25 187.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM156.25 112.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z"
            fill="#08fdd8"
          ></AnimatedPath>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M537.5 362.5L512.5 362.5L487.5 362.5L462.5 362.5L437.5 387.5L412.5 387.5L387.5 412.5L362.5 412.5L337.5 437.5"
            stroke="#08fdd8"
            strokeWidth="4.17"
          ></AnimatedPath>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M331.25 437.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z"
            fill="#08fdd8"
          ></AnimatedPath>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M412.5 162.5L387.5 137.5M362.5 162.5L337.5 162.5L312.5 162.5M537.5 187.5L512.5 187.5L487.5 187.5L462.5 187.5L437.5 187.5L412.5 162.5L387.5 162.5L362.5 162.5L337.5 137.5L312.5 137.5L287.5 137.5L262.5 137.5"
            stroke="#08fdd8"
            strokeWidth="4.17"
          ></AnimatedPath>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M256.25 137.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM381.25 137.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM306.25 162.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z"
            fill="#08fdd8"
          ></AnimatedPath>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M312.5 462.5L287.5 487.5L262.5 487.5L237.5 512.5M437.5 412.5L412.5 437.5L387.5 462.5L362.5 462.5M262.5 462.5L237.5 462.5L212.5 462.5L187.5 462.5M512.5 387.5L487.5 412.5L462.5 412.5L437.5 437.5L412.5 462.5L387.5 487.5L362.5 487.5M537.5 387.5L512.5 387.5L487.5 387.5L462.5 387.5L437.5 412.5L412.5 412.5L387.5 437.5L362.5 437.5L337.5 462.5L312.5 462.5L287.5 462.5L262.5 462.5L237.5 487.5L212.5 487.5L187.5 487.5L162.5 512.5L137.5 512.5L112.5 512.5L87.5 512.5"
            stroke="#08fdd8"
            strokeWidth="4.17"
          ></AnimatedPath>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M81.25 512.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM231.25 512.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM356.25 462.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM181.25 462.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM356.25 487.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z"
            fill="#08fdd8"
          ></AnimatedPath>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M512.5 162.5L487.5 137.5L462.5 137.5M537.5 162.5L512.5 162.5L487.5 162.5L462.5 162.5"
            stroke="#08fdd8"
            strokeWidth="4.17"
          ></AnimatedPath>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M456.25 162.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM456.25 137.5 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z"
            fill="#08fdd8"
          ></AnimatedPath>
        </g>
      </g>
      <defs>
        <mask id="SvgjsMask1257">
          <rect width="500" height="560" fill="#ffffff"></rect>
        </mask>
        <mask id="SvgjsMask1258">
          <rect width="500" height="560" fill="white"></rect>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M234.37 287.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0zM234.37 312.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0zM309.37 337.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M84.37 262.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0zM334.37 262.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0zM209.37 237.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0zM59.37 237.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0zM409.37 262.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M284.37 387.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0zM209.37 362.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0zM309.37 362.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0zM334.37 362.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M434.37 237.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M284.37 412.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0zM284.37 437.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M134.37 137.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0zM209.37 162.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0zM309.37 212.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0zM234.37 187.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0zM159.37 112.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M334.37 437.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M259.37 137.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0zM384.37 137.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0zM309.37 162.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M84.37 512.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0zM234.37 512.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0zM359.37 462.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0zM184.37 462.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0zM359.37 487.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            variants={pathVariants}
            initial="initial"
            animate="animate"
            d="M459.37 162.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0zM459.37 137.5 a3.13 3.13 0 1 0 6.26 0 a3.13 3.13 0 1 0 -6.26 0z"
            fill="black"
          ></AnimatedPath>
        </mask>
      </defs>
    </svg>
  );
};

export default MainSVG;
