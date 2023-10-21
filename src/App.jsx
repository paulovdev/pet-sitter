import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Features from "./pages/features/Features";
import Gallery from "./pages/gallery/Gallery";
import Nav from "./components/Nav/Nav";
import ScrollTop from "./components/ScrollTop/ScrollTop";

const App = () => {
  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 500);
  });

  gsap.ticker.lagSmoothing(0);
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Features />
      <Gallery />
      <ScrollTop />
    </>
  );
};

export default App;
