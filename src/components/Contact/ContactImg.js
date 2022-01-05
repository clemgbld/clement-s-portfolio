import React from "react";
import classes from "./ContactImg.module.css";

const ContactImg = () => {
  return (
    <div
      className={classes["contact-img"]}
      role="img"
      aria-label="Memoji who do the calling sign"
    ></div>
  );
};

export default ContactImg;
