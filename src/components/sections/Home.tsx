import React from "react";
import { motion } from "framer-motion";
import body from "../../public/images/body.png";
import screen from "../../public/images/screen.png";
import splash from "../../public/images/splash.png";
// Add imports for new GIF images
import ecommers from "../../public/images/ecommers.gif";
import socialmedia from "../../public/images/socialmedia.gif";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  FileText,
  Code,
  Server,
  Terminal,
  Sparkles,
} from "lucide-react";

interface HomeProps {
  onNavigate: (section: number) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const floatingAnimation = {
    y: ["-5px", "5px"],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "reverse" as const,
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  // Custom animations for the images - modified for different directions and slower timing
  const bodyAnimation = {
    hidden: { x: 200, opacity: 0 }, // Coming from right side
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 65, // Lower stiffness for slower animation
        damping: 18,
        delay: 0.7, // Longer delay
      },
    },
  };

  const screenAnimation = {
    hidden: { x: -200, opacity: 0 }, // Coming from left side
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 35, // Lower stiffness for slower animation
        damping: 18,
        delay: 0.5, // Longer delay
      },
    },
  };

  const splashAnimation = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 45,
        damping: 15,
        delay: 0.3,
      },
    },
  };

  return (
    <section className="min-h-full w-full flex items-center justify-center bg-white dark:bg-gray-900 px-4 sm:px-6 py-12 md:py-16 overflow-hidden relative">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[20%] right-[5%] w-64 h-64 bg-indigo-200/20 dark:bg-indigo-900/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[5%] w-72 h-72 bg-purple-200/30 dark:bg-purple-900/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </div>

      <motion.div
        className="max-w-6xl w-full relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Title section - top part of hero */}
        <motion.div
          variants={itemVariants}
          className="mb-12 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white tracking-tighter mb-4">
            Hi, I'm{" "}
            <span className="text-indigo-600 dark:text-indigo-400">Rian</span>
          </h1>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 rounded-full">
              Full Stack Developer
            </span>
            <motion.div
              animate={floatingAnimation}
              className="text-indigo-500 dark:text-indigo-400"
            >
              <Sparkles size={16} />
            </motion.div>
          </div>
        </motion.div>

        {/* Content section - below hero title with photo aligned on desktop */}
        <div className="flex flex-col md:flex-row md:gap-12 mb-16">
          {/* Left content - intro, social links, buttons */}
          <div className="md:w-1/2 order-2 md:order-1 mt-8 md:mt-0">
            {/* Introduction text */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-center md:text-left"
            >
              I build exceptional and accessible digital experiences for the
              web. With expertise in modern JavaScript frameworks, responsive
              design, and server-side technologies, I bring ideas to life
              through clean code.
            </motion.p>
          </div>

          {/* Right content - profile image - moved up by 30px */}
          <div className="md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end -mt-10">
            <div className="relative w-56 h-56 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="w-full h-full relative">
                {/* Add splash background */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-full z-0"
                  variants={splashAnimation}
                  initial="hidden"
                  animate="visible"
                >
                  <img
                    src={splash}
                    alt="Background splash"
                    className="w-full h-full object-contain transform scale-[1.75]"
                  />
                </motion.div>

                <motion.div
                  className="absolute top-0 left-0 w-full h-full z-20"
                  variants={bodyAnimation}
                  initial="hidden"
                  animate="visible"
                >
                  <img
                    src={body}
                    alt="Developer body"
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                <motion.div
                  className="absolute top-0 left-0 w-full h-full z-10"
                  variants={screenAnimation}
                  initial="hidden"
                  animate="visible"
                >
                  <img
                    src={screen}
                    alt="Developer screen"
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </div>

              <motion.div
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 border-2 border-indigo-100 dark:border-indigo-900/50 z-30"
                animate={floatingAnimation}
              >
                <Code
                  size={28}
                  className="text-indigo-600 dark:text-indigo-400"
                />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Main content area - 7 columns */}
          <div className="md:col-span-7">
            {/* Skills section - Horizontal cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
            >
              <motion.div
                className="skill-card bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                <div className="text-indigo-600 dark:text-indigo-400 mb-3">
                  <Code size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Frontend
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  React, Vue, Js, TypeScript, Tailwind CSS
                </p>
              </motion.div>

              <motion.div
                className="skill-card bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                <div className="text-indigo-600 dark:text-indigo-400 mb-3">
                  <Server size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Backend
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Node.js, Express, Sql, NoSql, PostgreSQL
                </p>
              </motion.div>

              <motion.div
                className="skill-card bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                <div className="text-indigo-600 dark:text-indigo-400 mb-3">
                  <Terminal size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  DevOps
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Docker, CI/CD, AWS, Automation, Supabase, Git
                </p>
              </motion.div>
            </motion.div>

            {/* Featured work section */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 mb-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span>Featured Work</span>
                <motion.div
                  className="bg-indigo-100 dark:bg-indigo-900/30 rounded-full p-1"
                  animate={floatingAnimation}
                >
                  <Sparkles
                    size={14}
                    className="text-indigo-600 dark:text-indigo-400"
                  />
                </motion.div>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                  <img 
                    src={ecommers} 
                    alt="Project Alpha - E-commerce Platform" 
                    className="h-24 w-full object-cover rounded-md mb-3"
                  />
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Project Alpha
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Full-stack web-app e-commerce platform
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                  <img 
                    src={socialmedia} 
                    alt="Project Beta - Social Media App" 
                    className="h-24 w-full object-cover rounded-md mb-3"
                  />
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Project Beta
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                   Cross-Platform social media
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar - 5 columns */}
          <div className="md:col-span-5">
            {/* Call to action card */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 mb-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your vision.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <motion.a
                  href="https://github.com/Ryan-infitech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={18} />
                  <span className="font-medium">GitHub</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/rian-septiawan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={18} />
                  <span className="font-medium">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="mailto:rianseptiawan@infitech.or.id"
                  className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={18} />
                  <span className="font-medium">Email</span>
                </motion.a>
                <motion.a
                  href="#"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FileText size={18} />
                  <span className="font-medium">Resume</span>
                </motion.a>
              </div>

              <div className="flex flex-wrap gap-3">
                <motion.button
                  onClick={() => onNavigate(1)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  About Me
                  <ArrowRight size={16} />
                </motion.button>
                <motion.button
                  onClick={() => onNavigate(2)}
                  className="flex items-center gap-2 px-5 py-2.5 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-md font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>

            {/* Latest blog or testimonial */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Latest Updates
              </h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-300 mb-2 text-sm">
                    "Working with Rian was an excellent experience. His
                    technical knowledge and attention to detail resulted in a
                    flawless product."
                  </p>
                  <p className="text-xs font-medium text-gray-900 dark:text-white">
                    — Client Testimonial
                  </p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    Currently working on few side project, progres on my github.
                    Just contact if u have any question or project to discuss :)
                  </p>
                  <p className="mt-1 text-indigo-600 dark:text-indigo-400 font-medium">
                    March 2025
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
