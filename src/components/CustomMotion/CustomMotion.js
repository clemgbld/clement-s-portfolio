import React, { Suspense, lazy } from "react";

const MotionDiv = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.div }))
);

export const AnimatedDiv = (props) => (
  <Suspense fallback={<div className={props.className}>{props.children}</div>}>
    <MotionDiv {...props} />
  </Suspense>
);

const MotionSpan = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.span }))
);

export const AnimatedSpan = (props) => (
  <Suspense
    fallback={<span className={props.className}>{props.children}</span>}
  >
    <MotionSpan {...props} />
  </Suspense>
);

const MotionUl = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.ul }))
);

export const AnimatedUl = (props) => (
  <Suspense fallback={<ul className={props.className}>{props.children}</ul>}>
    <MotionUl {...props} />
  </Suspense>
);

const MotionP = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.p }))
);

export const AnimatedP = (props) => (
  <Suspense fallback={<p className={props.className}>{props.children}</p>}>
    <MotionP {...props} />
  </Suspense>
);

const MotionH1 = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.h1 }))
);

export const AnimatedH1 = (props) => (
  <Suspense fallback={<h1 className={props.className}>{props.children}</h1>}>
    <MotionH1 {...props} />
  </Suspense>
);

const MotionH2 = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.h2 }))
);

export const AnimatedH2 = (props) => (
  <Suspense fallback={<h2 className={props.className}>{props.children}</h2>}>
    <MotionH2 {...props} />
  </Suspense>
);

const MotionH3 = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.h3 }))
);

export const AnimatedH3 = (props) => (
  <Suspense fallback={<h3 className={props.className}>{props.children}</h3>}>
    <MotionH3 {...props} />
  </Suspense>
);

const MotionPath = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.path }))
);

export const AnimatedPath = (props) => (
  <Suspense fallback={<path className={props.className}></path>}>
    <MotionPath {...props} />
  </Suspense>
);

const MotionImg = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.img }))
);

export const AnimatedImg = (props) => (
  <Suspense
    fallback={
      <img className={props.className} src={props.src} alt={props.alt} />
    }
  >
    <MotionImg {...props} />
  </Suspense>
);

const MotionInput = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.input }))
);

export const AnimatedInput = (props) => (
  <Suspense
    fallback={
      <input
        className={props.className}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
      />
    }
  >
    <MotionInput {...props} />
  </Suspense>
);

const MotionTextArea = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.textarea }))
);

export const AnimatedTextArea = (props) => (
  <Suspense
    fallback={
      <textarea
        className={props.className}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
      />
    }
  >
    <MotionTextArea {...props} />
  </Suspense>
);

const MotionButton = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.button }))
);

export const AnimatedButton = (props) => (
  <Suspense
    fallback={
      <button disabled={props.disabled} className={props.className}>
        {props.children}
      </button>
    }
  >
    <MotionButton {...props} />
  </Suspense>
);

const MotionA = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.a }))
);

export const AnimatedA = (props) => (
  <Suspense
    fallback={
      <a href={props.href} className={props.className}>
        {props.children}
      </a>
    }
  >
    <MotionA {...props} />
  </Suspense>
);
