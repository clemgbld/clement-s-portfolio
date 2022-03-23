import React from "react";
import classes from "./Hero.module.css";
import { AnimatedSpan } from "../CustomMotion/CustomMotion";
import MainSVG from "./MainSVG";
import ButtonLink from "../UI/ButtonLink";
import Down from "./Down";

import { m } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section id="home" className={classes.container}>
        <div className={classes["left-container"]}>
          <m.h1
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1.5,
                ease: "easeInOut",
              },
            }}
          >
            Hi,
            <br /> I'm{" "}
            <AnimatedSpan
              initial={{ rotate: 72 }}
              animate={{
                rotate: 0,
                transition: { duration: 1, ease: "easeInOut" },
              }}
              className={classes.threeD}
            >
              C
            </AnimatedSpan>
            lement,
            <br /> a FrontEnd Developer
          </m.h1>

          <ButtonLink text="Contact me !" to="contact" offset={-120} />
        </div>
        <MainSVG />

        <Down />
      </section>
    </>
  );
};

export default Hero;
