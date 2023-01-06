import React from "react";
import classes from "./ExperienceCard.module.css";
import useMagic from "../hooks/use-magic";
import { AnimatedDiv } from "../CustomMotion/CustomMotion";

const ExperienceCard = ({ position, firm, dates, summary, delay }) => {

  const { ref, animation } = useMagic(
    {
      opacity: 0,
      x: "-30px",
    },
    {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay
      },
    },
    0.5
  );

  return (
    <div ref={ref}>
    <AnimatedDiv animate={animation} className={classes.expCard}>
      <h3 className={classes.title}>{position}</h3>
      <div className={classes.container}>
        <p>{firm}</p>
        <p className={classes.dates}>{dates}</p>
      </div>
      <p>{summary}</p>
    </AnimatedDiv>
    </div>

  );
};

export default ExperienceCard;
