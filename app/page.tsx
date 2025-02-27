 "use client";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
 
export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);

  return (
    <main>
    
    <Hero/>
    <Contact />
    <Projects />
    <Skills />
    <About />
    <Footer />
    <Navbar/>
    
    </main>
  );
}