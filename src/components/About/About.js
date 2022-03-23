import React from "react";
import classes from "./About.module.css";
import Letter from "../UI/Letter";
import { AnimatedH2 } from "../CustomMotion/CustomMotion";
import useMagic from "../hooks/use-magic";
import AboutMemoji from "./AboutMemoji";
import AboutText from "./AboutText/AboutText";

const icon1 = "location-outline";
const icon2 = "desktop-outline";
const icon3 = "person-circle-outline";
const icon4 = "heart-outline";
const icon5 = "build-outline";

const text1 = "I'm a french developer located in Paris, France";
const text2 = "I'm really passionate about Front End and UI/UX Design";
const text3 = "I'm a problem solver,quick learner and a good teammate";
const text4 = "In my spare time i play baskatball,play chess and read";
const text5 = "I also like the backend and heading on a fullstack path";

const About = () => {
  const { ref, animation } = useMagic(
    { opacity: 0, translateY: "20px" },
    {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    0.2
  );

  return (
    <section id="about" className={classes["about-box"]}>
      <div ref={ref}>
        <AnimatedH2 animate={animation} className={classes["about-title"]}>
          <Letter>M</Letter>yself
        </AnimatedH2>
        <AboutText text={text1} name={icon1} />
        <AboutText text={text2} name={icon2} />
        <AboutText text={text3} name={icon3} />
        <AboutText text={text4} name={icon4} />
        <AboutText text={text5} name={icon5} />
      </div>

      <AboutMemoji />
    </section>
  );
};

export default About;
