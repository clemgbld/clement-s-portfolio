import React from "react";
import { AnimatedH3 } from "../CustomMotion/CustomMotion";
import useMagic from "../hooks/use-magic";
import classes from "./SmallTitle.module.css";

const SmallTitle = (props) => {
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
        delay: 0.5,
      },
    },
    0.2
  );

  return (
    <div ref={ref}>
      <AnimatedH3 className={classes.title} animate={animation}>
        {props.children}
      </AnimatedH3>
    </div>
  );
};

export default SmallTitle;
