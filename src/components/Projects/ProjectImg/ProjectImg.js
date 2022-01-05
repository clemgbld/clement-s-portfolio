import React from "react";
import classes from "./ProjectImg.module.css";
import useMagic from "../../hooks/use-magic";
import { AnimatedImg } from "../../CustomMotion/CustomMotion";
import Laptop from "./Laptop";

const ProjectImg = ({ src, alt, three }) => {
  const { ref, animation } = useMagic(
    {
      height: 0,
      position: "absolute",
      top: "50%",
    },
    {
      top: "0%",
      height: "100%",

      transition: {
        duration: 0.3,
        delay: 0.7,
      },
    },
    0.5
  );

  return (
    <div
      className={
        three
          ? `${classes["laptop-container"]} ${classes.three}`
          : classes["laptop-container"]
      }
    >
      <Laptop />
      <div ref={ref} className={classes["img-container"]}>
        <AnimatedImg
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          src={require(`../../../img/${src}.jpg`)}
          alt={alt}
          className={classes.img}
          animate={animation}
        />
      </div>
    </div>
  );
};

export default ProjectImg;
