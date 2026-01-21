import About from "../pages/About";
import Hero from "../pages/Hero";
import { Routes, Route } from "react-router-dom";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Footer from "./Footer";
// import MainHero from "../pages/MainHero";

export default function Home() {
  return (
    <>
      <div className="home">
        {/* <MainHero /> */}
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
