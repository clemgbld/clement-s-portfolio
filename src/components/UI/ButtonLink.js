import React from "react";
import { m } from "framer-motion";

import { Link } from "react-scroll";

const ButtonLink = ({ text, to, offset }) => {
  return (
    <Link to={to} smooth={true} duration={600} offset={offset}>
      <m.p
        initial={{ opacity: 0, translateY: "20px" }}
        animate={{
          opacity: 1,
          translateY: 0,
          transition: {
            duration: 0.5,
            delay: 0.8,
          },
        }}
        className="button "
      >
        {text}
      </m.p>
    </Link>
  );
};

export default ButtonLink;
