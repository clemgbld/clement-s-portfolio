import React from "react";
import classes from "./NavLink.module.css";
import { AnimatedP } from "../CustomMotion/CustomMotion";
import { Link } from "react-scroll";

const NavLink = ({ text, to, offset, delay, onClose }) => {
  const navLinkVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: delay,
      },
    },
  };

  return (
    <Link href="#" to={to} smooth={true} duration={500} offset={offset}>
      <AnimatedP
        className={classes.link}
        variants={navLinkVariants}
        initial="initial"
        animate="animate"
        onClick={onClose}
      >
        {text}
      </AnimatedP>
    </Link>
  );
};

export default NavLink;
