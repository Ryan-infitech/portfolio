import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Download,
  FileText,
  Code,
  Briefcase,
} from "lucide-react";

interface HomeProps {
  onNavigate: (section: number) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-full w-full flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 px-3 sm:px-6 py-8 sm:py-10 md:py-16">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-3 sm:mb-4 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs sm:text-sm font-medium"
          >
            Full Stack Developer & UX Enthusiast
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Hi, I'm{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Rian
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I build exceptional and accessible digital experiences for the web.
            With expertise in modern JavaScript frameworks, responsive design,
            and server-side technologies, I bring ideas to life through clean
            code.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.div className="flex space-x-3 sm:space-x-4">
              <motion.a
                href="https://github.com/Ryan-infitech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub Profile"
              >
                <Github size={18} className="sm:hidden" />
                <Github size={22} className="hidden sm:block" />
              </motion.a>
              <motion.a
                href="www.linkedin.com/in/rian-septiawan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} className="sm:hidden" />
                <Linkedin size={22} className="hidden sm:block" />
              </motion.a>
              <motion.a
                href="mailto:rianseptiawan@infitech.or.id"
                className="p-2 sm:p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email Contact"
              >
                <Mail size={18} className="sm:hidden" />
                <Mail size={22} className="hidden sm:block" />
              </motion.a>
            </motion.div>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center px-4 py-2 sm:px-5 sm:py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download Resume"
            >
              <FileText size={16} className="mr-1.5 sm:mr-2" />
              <span>Resume</span>
            </motion.a>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-3 sm:p-4 md:p-6 shadow-md">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Code
                  size={20}
                  className="sm:hidden text-indigo-600 dark:text-indigo-400"
                />
                <Code
                  size={24}
                  className="hidden sm:block text-indigo-600 dark:text-indigo-400"
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-1.5 sm:mb-2">
                Frontend Development
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">
                Creating responsive, accessible interfaces with modern
                frameworks
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-3 sm:p-4 md:p-6 shadow-md">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Briefcase
                  size={20}
                  className="sm:hidden text-indigo-600 dark:text-indigo-400"
                />
                <Briefcase
                  size={24}
                  className="hidden sm:block text-indigo-600 dark:text-indigo-400"
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-1.5 sm:mb-2">
                Backend Development
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">
                Building robust APIs and server-side solutions
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-3 sm:p-4 md:p-6 shadow-md sm:col-span-2 md:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Download
                  size={20}
                  className="sm:hidden text-indigo-600 dark:text-indigo-400"
                />
                <Download
                  size={24}
                  className="hidden sm:block text-indigo-600 dark:text-indigo-400"
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-1.5 sm:mb-2">
                DevOps
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">
                Streamlining deployment and optimization processes
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <motion.button
              onClick={() => onNavigate(1)}
              className="flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full font-medium text-sm sm:text-base hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About Me
              <ArrowRight className="ml-1.5 sm:ml-2" size={16} />
            </motion.button>

            <motion.button
              onClick={() => onNavigate(2)}
              className="flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-white dark:bg-gray-800 border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 rounded-full font-medium text-sm sm:text-base hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <ArrowRight className="ml-1.5 sm:ml-2" size={16} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
