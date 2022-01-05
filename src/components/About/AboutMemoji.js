import React from "react";
import classes from "./AboutMemoji.module.css";
import useMagic from "../hooks/use-magic";
import { AnimatedImg } from "../CustomMotion/CustomMotion";

const AboutMemoji = () => {
  const { ref, animation } = useMagic(
    { opacity: 0, translateY: "200px" },
    {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        ease: "easeInOut",
        stiffness: 120,
      },
    },
    0.5
  );

  return (
    <div className={classes.container} ref={ref}>
      <AnimatedImg
        animate={animation}
        className={classes.img}
        src={require("../../img/greetings.webp")}
        alt="an avatar of the portfolio's developer"
      />
    </div>
  );
};

export default AboutMemoji;
