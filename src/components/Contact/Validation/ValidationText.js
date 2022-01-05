import React from "react";
import classes from "./ValidationText.module.css";
import { AnimatedP } from "../../CustomMotion/CustomMotion";

const ValidationText = () => {
  const pVariants = {
    initial: {
      opacity: 0,
      y: "20px",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.7,
      },
    },
  };

  return (
    <AnimatedP
      variants={pVariants}
      initial="initial"
      animate="animate"
      className={classes.text}
    >
      I'll answer you back soon!
    </AnimatedP>
  );
};

export default ValidationText;
