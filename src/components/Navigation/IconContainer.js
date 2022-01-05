import React from "react";
import CLogo from "./CLogo";
import WorkIcon from "./WorkIcon";
import classes from "./IconContainer.module.css";

const IconContainer = () => {
  return (
    <div className={classes["icons-container"]}>
      <CLogo />
      <WorkIcon href="https://github.com/clemgbld" name="logo-github" />
      <WorkIcon
        href="https://www.linkedin.com/in/cl%C3%A9ment-gombauld"
        name="logo-linkedin"
      />
    </div>
  );
};

export default IconContainer;
