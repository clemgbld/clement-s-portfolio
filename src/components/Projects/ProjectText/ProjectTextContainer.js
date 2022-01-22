import React from "react";
import classes from "./ProjectTextContainer.module.css";
import Button from "../../UI/Button";
import ProjectSummary from "./ProjectSummary";
import ProjectTechs from "./ProjectTechs";
import ProjectTextTitle from "./ProjectTextTitle";

const ProjectTextContainer = ({
  linkLive,
  linkCode,
  live,
  code,
  summary,
  techs,
  title,
}) => {
  return (
    <div className={classes["project-text"]}>
      <ProjectTextTitle title={title} />
      <ProjectSummary summary={summary} />
      <ProjectTechs techs={techs} />
      <div className={classes["btn-box"]}>
        <Button text={live} link={linkLive} />
        <Button text={code} link={linkCode} />
      </div>
    </div>
  );
};

export default ProjectTextContainer;
