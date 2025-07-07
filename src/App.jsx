import { useState } from "react";
import Navbar from "./UI/Navbar"
import MobileMenu from "./UI/MobileMenu";
import LoadingAnimation from "./LoadingAnimation";
import Home from "./Sections/Home";
import AnimationWaves from "./UI/AnimationWavws";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import { Contact } from "./Sections/Contact";
import RevealOnScroll from "./UI/RevealOnScroll";
import Footer from "./UI/Footer";
// import RevealOnScroll from "./UI/RevealOnScroll";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {!isLoading && (
        <LoadingAnimation onComplete={() => setIsLoading(true)} />
      )}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <RevealOnScroll>
        <Home />
        <AnimationWaves />
      </RevealOnScroll>
      <About />
      <RevealOnScroll>
        <Projects />
      </RevealOnScroll>
      
      <Contact />
      <Footer />
    </>
  )
}

export default App