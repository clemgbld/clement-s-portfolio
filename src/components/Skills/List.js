import React from "react";
import classes from "./List.module.css";
import { AnimatedUl } from "../CustomMotion/CustomMotion";
import useMagic from "../hooks/use-magic";

const List = ({ skills }) => {
  const { ref, animation } = useMagic(
    {
      opacity: 0,
      x: "-20px",
    },
    {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: 1.2,
      },
    },
    0.1
  );

  return (
    <div ref={ref}>
      <AnimatedUl animate={animation} className={classes.list}>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </AnimatedUl>
    </div>
  );
};

export default List;
