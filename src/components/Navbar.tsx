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
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white"
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-indigo-600 dark:text-indigo-400">Rian </span>
        Septiawan
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <ul className="flex space-x-6">
          {sections.map((section) => (
            <motion.li
              key={section.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => setCurrentSection(section.id)}
                className={`font-medium ${
                  currentSection === section.id
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                }`}
              >
                {section.name}
              </button>
            </motion.li>
          ))}
        </ul>

        <motion.button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={
            theme === "light" ? "Switch to dark mode" : "Switch to light mode"
          }
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </motion.button>
      </div>

      {/* Mobile Navigation Button */}
      <div className="flex items-center space-x-3 md:hidden">
        <motion.button
          onClick={toggleTheme}
          className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={
            theme === "light" ? "Switch to dark mode" : "Switch to light mode"
          }
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </motion.button>

        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-1.5 text-gray-800 dark:text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <ul className="py-2">
            {sections.map((section) => (
              <li key={section.id} className="px-6 py-2">
                <button
                  onClick={() => {
                    setCurrentSection(section.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left font-medium ${
                    currentSection === section.id
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {section.name}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
