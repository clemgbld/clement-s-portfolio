import React from "react";
import classes from "./Email.module.css";
import { AnimatedDiv } from "../CustomMotion/CustomMotion";
import useMagic from "../hooks/use-magic";

const Email = () => {
  const { ref, animation } = useMagic(
    {
      opacity: 0,
      rotate: 60,
    },
    { opacity: 1, rotate: 90, transition: { duration: 0.4 } },
    0.7
  );

  return (
    <div ref={ref}>
      <AnimatedDiv animate={animation} className={classes.container}>
        <p className={classes.email}>clementgombaulddev@gmail.fr</p>
      </AnimatedDiv>
    </div>
  );
};
export default Email;
