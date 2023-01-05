import React from "react";
import classes from "./LinksContainer.module.css";
import NavLink from "./NavLink";

export const to1 = "skills";
export const to2 = "projects";
export const to3 = "about";
export const to4 = "contact";
export const to5 = 'experience';

export const text1 = "Skills";
export const text2 = "Projects";
export const text3 = "About";
export const text4 = "Contact";
export const text5 = "Experience";

export const delay1 = 0;
export const delay2 = 0.3;
export const delay3 = 0.9;
export const delay4 = 0.12;
export const delay5 = 0.6;

export const offset1 = -115;
export const offset2 = -140;
export const offset3 = -140;
export const offset4 = -120;
export const offset5 = -120;

const LinksContainer = () => {
  return (
    <div className={classes["links-container"]}>
      <NavLink to={to1} delay={delay1} text={text1} offset={offset1} />
      <NavLink to={to2} delay={delay2} text={text2} offset={offset2} />
      <NavLink to={to5} delay={delay5} text={text5} offset={offset5} />
      <NavLink to={to3} delay={delay3} text={text3} offset={offset3} />
      <NavLink to={to4} delay={delay4} text={text4} offset={offset4} />
     
    </div>
  );
};

export default LinksContainer;
