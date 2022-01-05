import React from "react";
import classes from "./Box.module.css";
// import { m } from "framer-motion";
import { AnimatedDiv } from "../CustomMotion/CustomMotion";

import useMagic from "../hooks/use-magic";

const Box = (props) => {
  const { ref, animation } = useMagic(
    {
      opacity: 0,
    },
    {
      opacity: 1,

      transition: {
        duration: 0.5,
      },
    },
    0.2
  );

  return (
    <div ref={ref}>
      <AnimatedDiv animate={animation} className={classes.container}>
        {props.children}
      </AnimatedDiv>
    </div>
  );
};

export default Box;
