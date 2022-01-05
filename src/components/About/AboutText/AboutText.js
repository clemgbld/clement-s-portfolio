import React from "react";
import AboutIcon from "./AboutIcon";
import classes from "./AboutText.module.css";
import { AnimatedP } from "../../CustomMotion/CustomMotion";
import useMagic from "../../hooks/use-magic";

const AboutText = ({ text, name }) => {
  const { ref, animation } = useMagic(
    { opacity: 0, translateX: "20px" },
    {
      opacity: 1,
      translateX: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    0.2
  );

  return (
    <div ref={ref} className={classes["about-text"]}>
      <AboutIcon name={name} />
      <AnimatedP animate={animation}>{text}</AnimatedP>
    </div>
  );
};

export default AboutText;
