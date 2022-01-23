import React from "react";
import classes from "./WorkIcon.module.css";
import { AnimatedA } from "../CustomMotion/CustomMotion";

const WorkIcon = ({ href, name }) => {
  const navLinkVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <AnimatedA
      variants={navLinkVariants}
      initial="initial"
      animate="animate"
      className={classes.icon}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ion-icon name={name}></ion-icon>
    </AnimatedA>
  );
};

export default WorkIcon;
