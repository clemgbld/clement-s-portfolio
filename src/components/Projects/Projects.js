import React from "react";
import classes from "./Projects.module.css";
import Letter from "../UI/Letter";
import { AnimatedH2 } from "../CustomMotion/CustomMotion";
import useMagic from "../hooks/use-magic";
import ProjectImg from "./ProjectImg/ProjectImg";
import ProjectTextContainer from "./ProjectText/ProjectTextContainer";

const title1 = "01 Fullstack To Do List";
const summ1 =
  " Developed a modern To Do App using React, Css Grid, Flexbox and a JSON-server. This App enable us to create a task , update it and delete it. that was my first real project with react , it also enable me to see a little bit of backend with the REST API of the JSON-server, And see how to connect the front end with a backend. I used Redux to manage the entire state of the application and Redux-Form to handle the input.";
const techs = "React - Redux - CSS-module - JSON-server - Framer Motion";

const Projects = () => {
  const { ref, animation } = useMagic(
    { opacity: 0, translateY: "20px" },
    {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.5,
      },
    },
    0.2
  );

  return (
    <div className={classes.container} ref={ref} id="projects">
      <AnimatedH2 animate={animation} className={classes["projects-title"]}>
        My <Letter>P</Letter>ortfolio
      </AnimatedH2>
      <div className={classes["project-box"]}>
        <ProjectTextContainer
          text="See more"
          summary={summ1}
          title={title1}
          techs={techs}
        />

        <ProjectImg
          src="crud-to-doList"
          alt="a picture of a to do list project"
        />

        <ProjectImg three={true} src="forkify" alt="a picture of a food app" />
        <ProjectTextContainer
          text="See more"
          summary={summ1}
          title={title1}
          techs={techs}
        />
        <ProjectTextContainer
          text="See more"
          summary={summ1}
          title={title1}
          techs={techs}
        />
        <ProjectImg src="weather" alt="a picture of a weather app" />
      </div>
    </div>
  );
};

export default Projects;
