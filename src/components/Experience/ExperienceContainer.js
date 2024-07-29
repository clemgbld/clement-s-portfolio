import React from "react";
import { AnimatedDiv } from "../CustomMotion/CustomMotion";
import useMagic from "../hooks/use-magic";
import classes from "./ExperienceContainer.module.css";
import ExperienceCard from "./ExperienceCard";

const ExperienceContainer = () => {
  const { ref, animation } = useMagic(
    {
      opacity: 0,
      rotate: 5,
    },
    { opacity: 1, rotate: 0, transition: { duration: 0.4 } },
    0.4
  );

  return (
    <div ref={ref}>
      <AnimatedDiv animate={animation} className={classes.container}>
        <ExperienceCard
          position="Software Developer"
          firm="Omnilog"
          dates="2022-present"
          summary="A french software enginering agency that provides different IT services to its clients."
          delay={0.3}
        />

        <ExperienceCard
          position="Fullstack Software Developer"
          firm="Canal +"
          dates="2022-present"
          summary="I worked on the frontend and backend of the French CRM of the firm. I mainly worked with Typescript and Java."
          delay={0.5}
        />
        <ExperienceCard
          position="Coach Craft"
          firm="Carglass"
          dates="2022"
          summary="I introduced TDD and hexagonal architecture to a frontend team and practiced with them."
          delay={0.7}
        />
        <ExperienceCard
          position="Frontend Developer"
          firm="Memo de vie"
          dates="2022"
          summary="A french application that helps domestic violence victims. I added new features to their app."
          delay={0.9}
        />
      </AnimatedDiv>
    </div>
  );
};

export default ExperienceContainer;
