import React from "react";
import classes from "./Projects.module.css";
import Letter from "../UI/Letter";
import { AnimatedH2 } from "../CustomMotion/CustomMotion";
import useMagic from "../hooks/use-magic";
import ProjectImg from "./ProjectImg/ProjectImg";
import ProjectTextContainer from "./ProjectText/ProjectTextContainer";

const title1 = "01 Youtube-Clone";
const summ1 =
  " I developed a Youtube-clone in Next Js, Typescript with the help of the youtube API, my app copy several features of the real youtube including: videos streaming, voice search, retrieve all the comments of a video, retrieve all the videos of a the channel of your choice, pagination and infinite scroll, register videos by like or by watch later, and more...";
const techs = "Next js - Typescript - CSS-module - Context API - Framer Motion";
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
    <section className={classes.container} ref={ref} id="projects">
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
          linkLive="https://youtube-clone-vert.vercel.app/"
          linkCode="https://github.com/clemgbld/youtube-clone"
          inverse={false}
        />

        <ProjectImg src="youtube" alt="a picture of a youtube-clone project" />

        <ProjectImg src="pomochampion" alt="a picture of a pomodoro project" />
        <ProjectTextContainer
          live="Live Version"
          code="Source Code"
          summary={summ2}
          title={title2}
          techs={techs2}
          linkLive="https://pomochampion.netlify.app"
          linkCode="https://github.com/clemgbld/pomoChampion"
          inverse={true}
        />
      </div>
    </section>
  );
};

export default Projects;
