import React, { lazy, Suspense } from "react";
import classes from "./Card.module.css";
import useMagic from "../hooks/use-magic";
import { AnimatedDiv } from "../CustomMotion/CustomMotion";

const Tilt = lazy(() => import("react-parallax-tilt"));

const Card = (props) => {
  const { ref, animation } = useMagic(
    {
      opacity: 0,
      x: "-30px",
    },
    {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    0.2
  );

  return (
    <Suspense fallback={<div></div>}>
      <Tilt
        glareMaxOpacity={0.5}
        glareColor={"#adb5bd"}
        glareEnable={true}
        className={classes.tilt}
      >
        <div className={classes.ref} ref={ref}>
          <AnimatedDiv animate={animation} className={classes.container}>
            {props.children}
          </AnimatedDiv>
        </div>
      </Tilt>
    </Suspense>
  );
};

export default Card;
