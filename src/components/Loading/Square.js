import React, { useState, useEffect } from "react";
import LoadingImg from "./LoadingImg";
import classes from "./Square.module.css";
import { AnimatePresence } from "framer-motion";
import { m } from "framer-motion";

const pathVariants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
    },
  },
};

const Square = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2300);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <m.div
            exit={{
              scale: 0,
              transition: {
                duration: 0.3,
              },
            }}
            key="square"
            className={classes.container}
          >
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="15rem"
              height="15rem"
              viewBox="0 0 150 150"
              xmlSpace="preserve"
              preserveAspectRatio="xMinYMin "
            >
              <g fill="none">
                <m.path
                  variants={pathVariants}
                  initial="initial"
                  animate="animate"
                  d="M0,0v150h150V0H0z "
                  stroke="#08fdd8"
                  strokeWidth="8"
                />
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
            <LoadingImg />
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Square;
