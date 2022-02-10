import React, { memo, useState, useEffect, Suspense, lazy } from "react";

import Hero from "./Hero/Hero";
import Navigation from "./Navigation/Navigation";
import Loading from "./Loading/Loading";
import { LazyMotion, domAnimation } from "framer-motion";

const Skills = lazy(() => import("./Skills/Skills"));
const Projects = lazy(() => import("./Projects/Projects"));
const About = lazy(() => import("./About/About"));
const Contact = lazy(() => import("./Contact/Contact"));
const Footer = lazy(() => import("./Footer/Footer"));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState(true);

  const viewHandler = (view) => {
    setView(view);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2650);
  }, []);

  const renderContent = () => {
    if (isLoading) return <Loading />;
    else
      return (
        <>
          <Suspense fallback={<div>Loading...</div>}>
            <Navigation view={view} />
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
            <Hero />
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
            <Skills onView={viewHandler} />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Projects />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
            <Footer />
          </Suspense>
        </>
      );
  };

  return (
    <div>
      <LazyMotion features={domAnimation}>{renderContent()}</LazyMotion>
    </div>
  );
};

export default memo(App);
