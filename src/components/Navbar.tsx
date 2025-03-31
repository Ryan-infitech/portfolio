import React from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface NavbarProps {
  currentSection: number;
  setCurrentSection: (section: number) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const sections = [
  { id: 0, name: "Home" },
  { id: 1, name: "About" },
  { id: 2, name: "Projects" },
  { id: 3, name: "Experience" },
  { id: 4, name: "Contact" },
];

const Navbar: React.FC<NavbarProps> = ({
  currentSection,
  setCurrentSection,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-5 sm:px-8 py-4 flex justify-between items-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div
        className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white flex items-center"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <span className="text-indigo-600 dark:text-indigo-400 mr-1">Rian</span>
        Septiawan
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        <ul className="flex space-x-1">
          {sections.map((section) => (
            <motion.li
              key={section.id}
              className="relative px-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <button
                onClick={() => setCurrentSection(section.id)}
                className={`relative py-2 px-3 rounded-full font-medium text-sm transition-colors duration-200
                  ${
                    currentSection === section.id
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  }`}
              >
                {section.name}
                {currentSection === section.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-indigo-50 dark:bg-indigo-900/30 rounded-full -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </motion.li>
          ))}
        </ul>

        <motion.button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          aria-label={
            theme === "light" ? "Switch to dark mode" : "Switch to light mode"
          }
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </motion.button>
      </div>

      {/* Mobile Navigation Button */}
      <div className="flex items-center space-x-3 md:hidden">
        <motion.button
          onClick={toggleTheme}
          className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={
            theme === "light" ? "Switch to dark mode" : "Switch to light mode"
          }
        >
          {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
        </motion.button>

        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-white transition-colors duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg md:hidden mt-1 rounded-b-xl overflow-hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ul className="py-3">
            {sections.map((section) => (
              <motion.li
                key={section.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: section.id * 0.05 }}
                className="px-5 py-2"
              >
                <button
                  onClick={() => {
                    setCurrentSection(section.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left font-medium text-sm py-2 px-3 rounded-lg transition-colors duration-200
                    ${
                      currentSection === section.id
                        ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30"
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                >
                  {section.name}
                </button>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
