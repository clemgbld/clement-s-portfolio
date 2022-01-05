import React from "react";
import classes from "./ProjectTechs.module.css";
import { AnimatedP } from "../../CustomMotion/CustomMotion";
import useMagic from "../../hooks/use-magic";

const ProjectTechs = ({ techs }) => {
  const { ref, animation } = useMagic(
    { opacity: 0, translateY: "20px" },
    {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.5,
      },
    },
    0.4
  );
  return (
    <div ref={ref}>
      <AnimatedP animate={animation} className={classes["project-tech"]}>
        {techs}
      </AnimatedP>
    </div>
  );
};
export default ProjectTechs;
