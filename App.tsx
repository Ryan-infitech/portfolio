import React, { useState } from "react";
import { ThemeProvider } from "./src/context/ThemeContext";
import Navbar from "./src/components/Navbar";
import HorizontalScroll from "./src/components/HorizontalScroll";
import Home from "./src/components/sections/Home";
import About from "./src/components/sections/About";
import Projects from "./src/components/sections/Projects";
import Experience from "./src/components/sections/Experience";
import Contact from "./src/components/sections/Contact";

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="font-sans antialiased dark:bg-gray-900 overflow-hidden h-screen w-screen touch-auto">
        <Navbar
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        <HorizontalScroll
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        >
          <Home onNavigate={setCurrentSection} />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </HorizontalScroll>
      </div>
    </ThemeProvider>
  );
}

export default App;
