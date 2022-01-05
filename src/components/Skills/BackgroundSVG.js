import React from "react";
import classes from "./BackgroundSVG.module.css";
import useMagic from "../hooks/use-magic";
import { AnimatedPath } from "../CustomMotion/CustomMotion";

const BackGroundSVG = () => {
  const { ref, animation } = useMagic(
    {
      opacity: 0,
      pathLength: 0.3,
    },
    {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 0.5,
      },
    },
    0.1
  );

  return (
    <svg
      ref={ref}
      className={classes.svg}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlnssvgjs="http://svgjs.com/svgjs"
      width="130rem"
      height="50rem"
      // preserveAspectRatio="xMinYMin"
      viewBox="0 0 1300 500"
    >
      <g mask='url("#SvgjsMask1026")' fill="none">
        <g mask='url("#SvgjsMask1027")'>
          <AnimatedPath
            animate={animation}
            d="M779 57L475 57L437 19L95 19L57 57"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M769.5 57 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM47.5 57 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M247 57L19 285L19 513"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M237.5 57 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM9.5 513 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M57 19L19 57L19 133L57 171L57 209L19 247"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M47.5 19 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM9.5 247 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M931 437L931 513"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M921.5 437 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM921.5 513 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M361 171L437 95L437 57"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M351.5 171 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM427.5 57 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M171 209L285 209L399 95L399 57"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M161.5 209 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM389.5 57 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1235 513L1235 247L1045 57L1045 19"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1225.5 513 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM1035.5 19 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1007 285L893 171L627 171L475 323L475 513"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M997.5 285 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM465.5 513 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1121 513L1197 513"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1111.5 513 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM1187.5 513 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M893 95L817 19L475 19"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M883.5 95 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM465.5 19 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M171 437L57 323L57 285L133 209"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M161.5 437 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM123.5 209 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M361 323L361 361L209 513L57 513"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M351.5 323 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM47.5 513 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M95 323L95 285L133 247L361 247L399 209L475 209L589 95L779 95"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M85.5 323 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM769.5 95 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1007 399L779 399L703 475L513 475"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M997.5 399 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM503.5 475 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1197 95L1197 171L1311 285L1311 475"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1187.5 95 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM1301.5 475 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1007 247L1083 171L1083 133L1045 95L1007 95L931 171"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M997.5 247 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM921.5 171 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M665 285L627 247L589 247L513 323L513 437"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M655.5 285 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM503.5 437 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M893 437L893 513"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M883.5 437 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM883.5 513 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M703 285L779 209L855 209L1121 475L1197 475"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M693.5 285 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM1187.5 475 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1083 513L1083 475L1045 437L969 437"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1073.5 513 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM959.5 437 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M817 323L855 361L969 361"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M807.5 323 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM959.5 361 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1235 57L1197 19L1083 19"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1225.5 57 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM1073.5 19 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M133 57L209 57"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M123.5 57 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM199.5 57 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M133 323L133 361L209 437L247 437L323 361L323 285"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M123.5 323 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM313.5 285 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1083 57L1159 133"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1073.5 57 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM1149.5 133 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1121 57L1197 57"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1111.5 57 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM1187.5 57 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M437 475L437 285L399 247"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M427.5 475 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM389.5 247 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M513 247L437 247"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M503.5 247 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM427.5 247 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M741 323L779 285L817 285L855 247"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M731.5 323 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM845.5 247 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M171 475L57 475"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M161.5 475 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM47.5 475 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M361 437L399 399L399 285"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M351.5 437 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM389.5 285 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M589 513L513 513"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M579.5 513 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM503.5 513 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1083 399L1007 323"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1073.5 399 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM997.5 323 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M779 323L779 361L703 437L551 437"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M769.5 323 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM541.5 437 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M665 323L703 361L703 399"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M655.5 323 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM693.5 399 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M57 399L95 399L133 437"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M47.5 399 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM123.5 437 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M741 475L703 513L627 513"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M731.5 475 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM617.5 513 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M361 513L361 475L399 437"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M351.5 513 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM389.5 437 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M323 513L323 437"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M313.5 513 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM313.5 437 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M855 133L931 133L969 95L969 57L1007 19"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M845.5 133 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM997.5 19 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M741 513L855 513"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M731.5 513 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM845.5 513 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M665 399L665 361L627 323L627 285"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M655.5 399 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM617.5 285 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M209 171L209 133L247 95"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M199.5 171 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM237.5 95 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M703 133L779 133"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M693.5 133 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM769.5 133 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1083 323L1159 399L1197 399"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1073.5 323 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM1187.5 399 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1121 247L1045 247"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1111.5 247 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM1035.5 247 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1197 247L1121 323"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1187.5 247 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM1111.5 323 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1121 285L1045 285"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1111.5 285 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM1035.5 285 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M247 133L323 133"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M237.5 133 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM313.5 133 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M95 57L57 95L57 133"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M85.5 57 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM47.5 133 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M779 475L817 437L855 437"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M769.5 475 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM845.5 437 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M627 361L589 399L551 399"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M617.5 361 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM541.5 399 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M247 399L209 361L209 285"
            strokeWidth="6.33"
            stroke="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M237.5 399 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0zM199.5 285 a9.5 9.5 0 1 0 19 0 a9.5 9.5 0 1 0 -19 0z"
            fill="rgba(8, 253, 216, 1)"
          ></AnimatedPath>
        </g>
      </g>
      <defs>
        <mask id="SvgjsMask1026">
          <rect width="1300" height="500" fill="#ffffff"></rect>
        </mask>
        <mask id="SvgjsMask1027">
          <rect width="1300" height="500" fill="white"></rect>
          <AnimatedPath
            animate={animation}
            d="M774.25 57 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM52.25 57 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M242.25 57 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM14.25 513 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M52.25 19 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM14.25 247 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M926.25 437 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM926.25 513 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M356.25 171 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM432.25 57 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M166.25 209 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM394.25 57 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1230.25 513 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM1040.25 19 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1002.25 285 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM470.25 513 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1116.25 513 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM1192.25 513 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M888.25 95 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM470.25 19 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M166.25 437 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM128.25 209 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M356.25 323 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM52.25 513 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M90.25 323 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM774.25 95 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1002.25 399 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM508.25 475 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1192.25 95 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM1306.25 475 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1002.25 247 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM926.25 171 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M660.25 285 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM508.25 437 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M888.25 437 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM888.25 513 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M698.25 285 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM1192.25 475 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1078.25 513 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM964.25 437 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M812.25 323 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM964.25 361 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1230.25 57 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM1078.25 19 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M128.25 57 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM204.25 57 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M128.25 323 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM318.25 285 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1078.25 57 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM1154.25 133 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1116.25 57 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM1192.25 57 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M432.25 475 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM394.25 247 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M508.25 247 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM432.25 247 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M736.25 323 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM850.25 247 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M166.25 475 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM52.25 475 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M356.25 437 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM394.25 285 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M584.25 513 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM508.25 513 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1078.25 399 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM1002.25 323 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M774.25 323 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM546.25 437 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M660.25 323 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM698.25 399 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M52.25 399 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM128.25 437 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M736.25 475 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM622.25 513 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M356.25 513 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM394.25 437 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M318.25 513 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM318.25 437 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M850.25 133 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM1002.25 19 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M736.25 513 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM850.25 513 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M660.25 399 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM622.25 285 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M204.25 171 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM242.25 95 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M698.25 133 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM774.25 133 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1078.25 323 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM1192.25 399 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1116.25 247 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM1040.25 247 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1192.25 247 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM1116.25 323 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M1116.25 285 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM1040.25 285 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M242.25 133 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM318.25 133 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M90.25 57 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM52.25 133 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M774.25 475 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM850.25 437 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M622.25 361 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM546.25 399 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
          <AnimatedPath
            animate={animation}
            d="M242.25 399 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0zM204.25 285 a4.75 4.75 0 1 0 9.5 0 a4.75 4.75 0 1 0 -9.5 0z"
            fill="black"
          ></AnimatedPath>
        </mask>
      </defs>
    </svg>
  );
};

export default BackGroundSVG;