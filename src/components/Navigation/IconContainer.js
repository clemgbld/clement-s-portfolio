import React from "react";
import CLogo from "./CLogo";
import WorkIcon from "./WorkIcon";
import CodeWarsIcon from "./CodeWarsIcon";
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
      <CodeWarsIcon />
      <WorkIcon
        href="https://longing-orbit-7b7.notion.site/Cl-ment-Gombauld-dd405cd98ea24b2f9c16ef5f1414cfaf"
        name="document-text"
      />
    </div>
  );
};

export default IconContainer;
