import React from "react";
import classes from "./ProjectTextContainer.module.css";
import Button from "../../UI/Button";
import ProjectSummary from "./ProjectSummary";
import ProjectTechs from "./ProjectTechs";
import ProjectTextTitle from "./ProjectTextTitle";

const ProjectTextContainer = ({ text, summary, techs,title }) => {
  return (
    <div className={classes["project-text"]}>
      <ProjectTextTitle title={title}/>
      <ProjectSummary summary={summary} />
      <ProjectTechs techs={techs} />
      <Button text={text} />
    </div>
  );
};

export default ProjectTextContainer;
