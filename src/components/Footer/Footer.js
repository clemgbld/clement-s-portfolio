import React from "react";
import classes from "./Footer.module.css";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <p className={classes.build}>Built with React and Framer Motion</p>
      <p className={classes.copy}>
        clementgombauld.netlify.app &copy; {`${year}`}
      </p>
    </footer>
  );
};

export default Footer;
