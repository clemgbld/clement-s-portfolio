import React, { useState } from "react";
import { AnimatedDiv } from "../CustomMotion/CustomMotion";
import LinksContainer from "./LinksContainer";
import IconContainer from "./IconContainer";
import { AnimatePresence } from "framer-motion";
import classes from "./Navigation.module.css";
import { m } from "framer-motion";
import {
  to1,
  to2,
  to3,
  to4,
  text1,
  text2,
  text3,
  text4,
  delay1,
  delay2,
  delay3,
  delay4,
  offset1,
  offset2,
  offset3,
  offset4,
} from "./LinksContainer";
import CLogo from "./CLogo";
import NavLink from "./NavLink";
import WorkIcon from "./WorkIcon";
import MobileContainer from "./MobileContainer";
import CodeWarsIcon from "./CodeWarsIcon";

const Navigation = ({ view }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,

      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,

      transition: {
        duration: 0.3,
      },
    },
  };

  const mobileVariants = {
    initial: {
      opacity: 0,
      x: "100%",
    },
    animate: {
      opacity: 1,
      x: "0%",
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
      },
    },
  };
  const menuHandler = () => {
    setMenuOpen((prevState) => !prevState);
  };
  const menuClasses = menuOpen
    ? `${classes["menu-btn"]} ${classes.open}`
    : `${classes["menu-btn"]}`;

  return (
    <AnimatePresence>
      {!view && (
        <header key="desktop">
          <m.nav
            variants={navVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <IconContainer />
            <LinksContainer />
          </m.nav>
        </header>
      )}
      <div key="burger" className={menuClasses} onClick={menuHandler}>
        <div className={classes["menu-btn--burger"]}></div>
      </div>
      {menuOpen && (
        <header key="mobile">
          <nav>
            <AnimatedDiv
              variants={mobileVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={classes["mobile-menu"]}
            >
              <CLogo onClose={menuHandler} />
              <MobileContainer>
                <NavLink
                  to={to1}
                  delay={delay1}
                  text={text1}
                  offset={offset1}
                  onClose={menuHandler}
                />
              </MobileContainer>
              <MobileContainer>
                <NavLink
                  to={to2}
                  delay={delay2}
                  text={text2}
                  offset={offset2}
                  onClose={menuHandler}
                />
              </MobileContainer>

              <MobileContainer>
                <NavLink
                  to={to3}
                  delay={delay3}
                  text={text3}
                  offset={offset3}
                  onClose={menuHandler}
                />
              </MobileContainer>
              <MobileContainer>
                <NavLink
                  to={to4}
                  delay={delay4}
                  text={text4}
                  offset={offset4}
                  onClose={menuHandler}
                />
              </MobileContainer>
              <div className={classes["icon-container"]}>
                <WorkIcon
                  href="https://github.com/clemgbld"
                  name="logo-github"
                />
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
            </AnimatedDiv>
          </nav>
        </header>
      )}
    </AnimatePresence>
  );
};
export default Navigation;
