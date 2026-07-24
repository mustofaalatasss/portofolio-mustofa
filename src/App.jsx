import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechSkills from './components/TechSkills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import LightBackground from './components/LightBackground';
import LoadingScreen from './components/LoadingScreen';
import AiChat from './components/AiChat';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [theme, setTheme] = useState('dark');
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        touchMultiplier: 2,
        infinite: false,
    });

    if (!isAppLoaded) {
        lenis.stop(); // Stop scroll until loading is done
    } else {
        lenis.start();
    }

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
        lenis.destroy();
        gsap.ticker.remove(lenis.raf);
    };
  }, [isAppLoaded]);

  return (
    <div className="App">
      {!isAppLoaded && <LoadingScreen onComplete={() => setIsAppLoaded(true)} />}
      <Cursor />
      <LightBackground theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero isAppLoaded={isAppLoaded} />
      <TechSkills />
      <Projects />
      <About />
      <Contact />
      <Footer />
      <AiChat />
    </div>
  );
}

export default App;
