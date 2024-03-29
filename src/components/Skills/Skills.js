import React, { useEffect } from "react";
import classes from "./Skills.module.css";
import Box from "./Box";
import Card from "../UI/Card";
import BackGroundSVG from "./BackgroundSVG";
import useMagic from "../hooks/use-magic";
import { AnimatedH2 } from "../CustomMotion/CustomMotion";
import List from "./List";
import LogoContainer from "./LogoContainer";
import SmallTitle from "./SmallTitle";
import Letter from "../UI/Letter";
import { useInView } from "react-intersection-observer";

const html = ["Semantic Code", "HTML Architecture"];

const css = ["Flex-Box", "CSS Grid", "Responsive Design", "CSS Animations"];

const frontend = ["Typescript", "Javascript", "Redux", "React", "Next js"];

const backend = [
  "Node js",
  "Express js",
  "Api communication",
  "Database Managment",
];

const Skills = ({ onView }) => {
  const { ref: refNav, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    onView(inView);
  }, [inView, onView]);

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
    <>
      <span ref={refNav}></span>
      <section ref={ref} className={classes.container}>
        <AnimatedH2 id="skills" animate={animation} className={classes.title}>
          Web <Letter>D</Letter>evelopement Skills
        </AnimatedH2>
        <Box>
          <BackGroundSVG />
          <Card>
            <LogoContainer>
              <ion-icon name="logo-html5"></ion-icon>
            </LogoContainer>
            <SmallTitle>HTML</SmallTitle>
            <List skills={html} />
          </Card>
          <Card>
            <LogoContainer>
              <ion-icon name="logo-css3"></ion-icon>
            </LogoContainer>
            <SmallTitle>CSS</SmallTitle>
            <List skills={css} />
          </Card>
          <Card>
            <LogoContainer>
              <ion-icon name="logo-react"></ion-icon>
            </LogoContainer>
            <SmallTitle>Frontend</SmallTitle>
            <List skills={frontend} />
          </Card>
          <Card>
            <LogoContainer>
              <ion-icon name="logo-nodejs"></ion-icon>
            </LogoContainer>
            <SmallTitle>Backend</SmallTitle>
            <List skills={backend} />
          </Card>
        </Box>
      </section>
    </>
  );
};

export default Skills;
