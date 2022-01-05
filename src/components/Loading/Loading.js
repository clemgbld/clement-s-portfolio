import React from "react";
import classes from "./Loading.module.css";
import Square from "./Square";

const Loading = () => {
  return <div className={classes.container}>
    <Square/>
  </div>;
};

export default Loading;
