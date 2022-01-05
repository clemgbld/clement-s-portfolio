import React from "react";
import classes from "./Contact.module.css";
import ContactContainer from "./ContactContainer";
import Letter from "../UI/Letter";
import Email from "./Email";

import useMagic from "../hooks/use-magic";
import { AnimatedH2 } from "../CustomMotion/CustomMotion";

const Contact = () => {
  const { ref, animation } = useMagic(
    { opacity: 0, translateY: "20px" },
    {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.5,
      },
    },
    0.2
  );

  return (
    <div ref={ref} id="contact" className={classes["big-container"]}>
      <AnimatedH2 className={classes.title} animate={animation}>
        <Letter>G</Letter>et in Touch
      </AnimatedH2>
      <ContactContainer />
      <Email />
    </div>
  );
};

export default Contact;
