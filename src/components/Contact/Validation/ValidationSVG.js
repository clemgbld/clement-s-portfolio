import React from "react";
import classes from "./ValidationSVG.module.css";
import { AnimatedPath } from "../../CustomMotion/CustomMotion";

const ValidationSVG = () => {
  const pathVariants = {
    initial: {
      opacity: 0,
      pathLength: 0,
    },
    animate: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 0.7,
      },
    },
  };
  return (
    <div className={classes.container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox="0 0 512 512"
      >
        <title>Checkmark</title>
        <AnimatedPath
          variants={pathVariants}
          initial="initial"
          animate="animate"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="25"
          d="M416 128L192 384l-96-96"
        />
      </svg>
    </div>
  );
};

export default ValidationSVG;
