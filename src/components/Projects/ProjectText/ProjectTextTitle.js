import React from "react";
import classes from "./ProjectTextTitle.module.css";
import { AnimatedH3 } from "../../CustomMotion/CustomMotion";
import useMagic from "../../hooks/use-magic";

const ProjectTextTitle = ({ title }) => {
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
      <AnimatedH3 animate={animation} className={classes["project-name"]}>
        {title}
      </AnimatedH3>
    </div>
  );
};

export default ProjectTextTitle;
