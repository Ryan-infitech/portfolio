import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { ModalProvider } from "./context/ModalContext";
import Navbar from "./components/Navbar";
import HorizontalScroll from "./components/HorizontalScroll";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <ModalProvider>
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
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
