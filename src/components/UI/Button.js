import React from "react";
import { AnimatedA } from "../CustomMotion/CustomMotion";
import useMagic from "../hooks/use-magic";

const Button = ({ text, link }) => {
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
    <div ref={ref}>
      <AnimatedA
        href={link}
        target="_blank"
        initial={{ opacity: 0, translateY: "20px" }}
        animate={animation}
        className="button"
      >
        {text}
      </AnimatedA>
    </div>
  );
};

export default Button;
