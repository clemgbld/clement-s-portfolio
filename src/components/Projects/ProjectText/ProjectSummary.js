import React from "react";
import classes from "./ProjectSummary.module.css";
import { AnimatedP } from "../../CustomMotion/CustomMotion";
import useMagic from "../../hooks/use-magic";

const ProjectSummary = ({ summary }) => {
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
      <AnimatedP animate={animation} className={classes["project-summ"]}>
        {summary}
      </AnimatedP>
    </div>
  );
};

export default ProjectSummary;
