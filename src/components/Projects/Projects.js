import React from "react";
import classes from "./Projects.module.css";
import Letter from "../UI/Letter";
import { AnimatedH2 } from "../CustomMotion/CustomMotion";
import useMagic from "../hooks/use-magic";
import ProjectImg from "./ProjectImg/ProjectImg";
import ProjectTextContainer from "./ProjectText/ProjectTextContainer";

const title1 = "01 Fullstack To Do List";
const summ1 =
  " I Developed a modern To Do App using React, Css Grid, Flexbox and a JSON-server. This App enable us to create a task , update it and delete it. that was my first real project with react , it also enable me to see a little bit of backend with the REST API of the JSON-server, And see how to connect the front end with a backend. I used Redux to manage the entire state of the application and Redux-Form to handle the input.";
const techs = "React - Redux - CSS-module - JSON-server - Framer Motion";
const title2 = "02 Time Management App";
const summ2 =
  "I built a time management app based on the pomodoro technique, i discovered the concept of web workers who help me to set up a timer that works off the windows. I also put a real time settings system in place with the help of redux and some google authentication with Firebase. and finally i used React-Router for the routing logic between the login page and the different timers pages. ";

const techs2 = "React - Redux - CSS-module - Firebase - React-Router";

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
          live="Live Version"
          code="Source Code"
          summary={summ1}
          title={title1}
          techs={techs}
        />

        <ProjectImg
          src="crud-to-doList"
          alt="a picture of a to do list project"
        />

        <ProjectImg src="pomochampion" alt="a picture of a pomodoro project" />
        <ProjectTextContainer
          live="Live Version"
          code="Source Code"
          summary={summ2}
          title={title2}
          techs={techs2}
          linkLive={"https://pomochampion.netlify.app"}
          linkCode={"https://github.com/clemgbld/pomoChampion"}
        />
        <ProjectTextContainer
          live="Live Version"
          code="Source Code"
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
