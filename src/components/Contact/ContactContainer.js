import React from "react";
import { AnimatedDiv } from "../CustomMotion/CustomMotion";
import Form from "./Form";
import ContactImg from "./ContactImg";
import useMagic from "../hooks/use-magic";
import classes from "./ContactContainer.module.css";

const ContactContainer = () => {
  const { ref, animation } = useMagic(
    {
      opacity: 0,
      rotate: 5,
    },
    { opacity: 1, rotate: 0, transition: { duration: 0.4 } },
    0.4
  );

  return (
    <div ref={ref}>
      <AnimatedDiv animate={animation} className={classes.container}>
        <Form />
        <ContactImg />
      </AnimatedDiv>
    </div>
  );
};

export default ContactContainer;
