import React from "react";
import classes from "./CLogo.module.css";
import { AnimatedDiv } from "../CustomMotion/CustomMotion";
import { animateScroll } from "react-scroll";

const CLogo = ({ onClose }) => {
  const logoVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    initial: { rotate: 72, opacity: 0 },

    animate: { rotate: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const scrollHandler = () => {
    return animateScroll.scrollToTop();
  };

  return (
    <div className={classes["c-logo--container"]}>
      <AnimatedDiv
        variants={logoVariants}
        whileHover="hover"
        initial="initial"
        animate="animate"
        className={classes["c-logo"]}
        onClick={scrollHandler}
      >
        <p onClick={onClose}>C</p>
      </AnimatedDiv>
      <p className={classes.text}>web developer</p>
    </div>
  );
};

export default CLogo;
