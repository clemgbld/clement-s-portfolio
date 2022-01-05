import React from "react";
import classes from "./Laptop.module.css";
import { m } from "framer-motion";
import useMagic from "../../hooks/use-magic";

const Laptop = () => {
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
    <m.img
      ref={ref}
      animate={animation}
      src={require("../../../img/macBookPro.jpg")}
      alt="a picture of a laptop"
      className={classes.laptop}
    />
  );
};

export default Laptop;
