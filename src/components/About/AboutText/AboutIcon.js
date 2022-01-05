import React from "react";
import classes from "./AboutIcon.module.css";
import useMagic from "../../hooks/use-magic";
import { AnimatedDiv } from "../../CustomMotion/CustomMotion";

const AboutIcon = ({ name }) => {
  const { ref, animation } = useMagic(
    { opacity: 0, translateX: "-20px" },
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
    <div ref={ref}>
      <AnimatedDiv animate={animation} className={classes.icon}>
        <ion-icon name={name}></ion-icon>
      </AnimatedDiv>
    </div>
  );
};

export default AboutIcon;
