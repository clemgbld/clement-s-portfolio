import React from "react";
import useMagic from "../hooks/use-magic";
import { AnimatedH2 } from "../CustomMotion/CustomMotion";
import Letter from "../UI/Letter";
import classes from "./Experience.module.css";
import ExperienceContainer from "./ExperienceContainer";

const Experience = () => {
  const { ref, animation } = useMagic(
    { opacity: 0, translateY: "20px" },
    {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.5,
      },
    },
    0.2
  );

  return (
    <section ref={ref} className={classes.container}>
      <AnimatedH2 id="experience" animate={animation} className={classes.title}>
        <Letter>E</Letter>xperience
      </AnimatedH2>
      <ExperienceContainer />
    </section>
  );
};

export default Experience;
