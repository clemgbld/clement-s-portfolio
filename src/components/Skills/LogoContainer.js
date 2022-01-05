import React from "react";
import classes from "./LogoContainer.module.css";
import useMagic from "../hooks/use-magic";
import { m } from "framer-motion";

const LogoContainer = (props) => {
  const { ref, animation } = useMagic(
    {
      opacity: 0,
      rotate: 72,
    },
    { opacity: 1, rotate: 0, transition: { duration: 0.5, delay: 0.5 } },
    0.2
  );

  return (
    <m.div
      ref={ref}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
        ease: "easeInOut",
      }}
      animate={animation}
      className={classes.logo}
    >
      <div>{props.children}</div>
    </m.div>
  );
};

export default LogoContainer;
