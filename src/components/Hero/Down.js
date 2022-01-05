import React from "react";
import { AnimatedDiv } from "../CustomMotion/CustomMotion";
import classes from "./Down.module.css";

const Down = () => {
  const downVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: ["-8px", "8px"],
      opacity: [1, 0],

      transition: {
        repeatType: "reverse",
        repeat: Infinity,
        duration: 1.3,
      },
    },
  };

  return (
    <AnimatedDiv
      variants={downVariants}
      initial="initial"
      animate="animate"
      className={classes.icon}
    >
      <ion-icon name="chevron-down-outline"></ion-icon>
    </AnimatedDiv>
  );
};

export default Down;
