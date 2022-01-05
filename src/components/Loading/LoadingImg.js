import React from "react";
import classes from "./LoadingImg.module.css";
import { m } from "framer-motion";

const imgVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,

    transition: {
      duration: 0.5,
      delay: 1.8,
    },
  },
};

const LoadingImg = () => {
  return (
    <m.img
      variants={imgVariants}
      initial="initial"
      animate="animate"
      className={classes.img}
      src={require("../../img/startingIcon.png")}
      alt="loading icon"
    />
  );
};

export default LoadingImg;
