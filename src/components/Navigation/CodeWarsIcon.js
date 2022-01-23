import { Icon } from "@iconify/react";
import classes from "./CodeWarsIcon.module.css";
import { AnimatedA } from "../CustomMotion/CustomMotion";


const navLinkVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const CodeWarsIcon = () => {
  return (
    <AnimatedA
      variants={navLinkVariants}
      initial="initial"
      animate="animate"
      href="https://www.codewars.com/users/clemgbld/stats"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className={classes.codewars} icon="simple-icons:codewars" />
    </AnimatedA>
  );
};

export default CodeWarsIcon;
