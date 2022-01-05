import React from "react";
import classes from "./Letter.module.css";
import useMagic from "../hooks/use-magic";
import { AnimatedSpan } from "../CustomMotion/CustomMotion";

const Letter = (props) => {
  const { ref, animation } = useMagic(
    {
      opacity: 0,
      rotate: 72,
    },
    { opacity: 1, rotate: 0, transition: { duration: 0.6 } },
    0.7
  );

  return (
    <span ref={ref}>
      <AnimatedSpan animate={animation} className={classes.letter}>
        {props.children}
      </AnimatedSpan>
    </span>
  );
};

export default Letter;
