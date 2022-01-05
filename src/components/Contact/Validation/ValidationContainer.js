import React from "react";
import classes from "./ValidationContainer.module.css";
import ValidationSVG from "./ValidationSVG";
import ValidationText from "./ValidationText";

const ValidationContainer = () => {
  return (
    <div className={classes.container}>
      <ValidationSVG />
      <ValidationText />
    </div>
  );
};

export default ValidationContainer;
