import React, { useState } from "react";
import { motion } from "framer-motion";
import profileImage from "../../public/images/RianSeptiawan.jpg";
import { skills, educationData, certifications } from "../../data";
import {
  Code,
  Server,
  Palette,
  GitBranch,
  Database,
  Box,
  Cloud,
  TestTube,
  Figma,
  Smartphone,
  Users,
  Search,
  Zap,
  Package,
} from "lucide-react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "react":
      return <Code size={20} />;
    case "code":
      return <Code size={20} />;
    case "palette":
      return <Palette size={20} />;
    case "server":
      return <Server size={20} />;
    case "database":
      return <Database size={20} />;
    case "git-branch":
      return <GitBranch size={20} />;
    case "box":
      return <Box size={20} />;
    case "cloud":
      return <Cloud size={20} />;
    case "test-tube":
      return <TestTube size={20} />;
    case "figma":
      return <Figma size={20} />;
    case "smartphone":
      return <Smartphone size={20} />;
    case "users":
      return <Users size={20} />;
    case "search":
      return <Search size={20} />;
    case "zap":
      return <Zap size={20} />;
    case "package":
      return <Package size={20} />;
    default:
      return <Code size={20} />;
  }
};

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "skills" | "education" | "certifications"
  >("skills");

  // Group skills by category
  const frontendSkills = skills.filter(
    (skill) => skill.category === "frontend"
  );
  const backendSkills = skills.filter((skill) => skill.category === "backend");
  const toolsSkills = skills.filter((skill) => skill.category === "tools");
  const otherSkills = skills.filter((skill) => skill.category === "other");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-full w-full bg-white dark:bg-gray-900 px-3 sm:px-6 py-8 sm:py-10 md:py-16 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About{" "}
            <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6 sm:mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-4 sm:mb-6">
              Who I Am
            </h3>
            <div className="space-y-3 sm:space-y-4">
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate Tech Enthusiast with a deep interest in both technology and multimedia. My journey began with a fascination for web development, leading me to specialize in creating responsive, user-friendly interfaces using React, and building robust backend systems with Laravel.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I am currently pursuing my studies at Universitas Negeri Padang, majoring in Educational Technology Informatics. This academic path allows me to blend my technical skills with a passion for teaching and sharing knowledge.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Beyond coding, I have a strong appreciation for creativity, which I express through tools like Blender, Photoshop, and AI Image Generators. These skills enable me to create unique, engaging experiences that merge technology and art.
            </p>


            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-md"
          >
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-indigo-100 dark:border-indigo-900">
              <img
                src={profileImage}
                alt="Rian Septiawan"
                className="w-full h-full object-cover"
              />
              </div>
            </div>

            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start">
                <span className="font-medium text-gray-800 dark:text-white mr-2 text-sm sm:text-base">
                  Name:
                </span>
                <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Rian Septiawan
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-gray-800 dark:text-white mr-2 text-sm sm:text-base">
                  Email:
                </span>
                <a
                  href="mailto:contact@example.com"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm sm:text-base"
                >
                  rianseptiawan@infitech.or.id
                </a>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-gray-800 dark:text-white mr-2 text-sm sm:text-base">
                  Location:
                </span>
                <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Padang, Indonesia
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-gray-800 dark:text-white mr-2 text-sm sm:text-base">
                  Availability:
                </span>
                <span className="text-green-600 dark:text-green-400 text-sm sm:text-base">
                  Open to opportunities
                </span>
              </li>
            </ul>

            <div className="mt-4 sm:mt-6">
              <motion.a
                href="/resume.pdf"
                target="_blank"
                className="flex items-center justify-center w-full px-4 py-2 sm:px-6 sm:py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-md font-medium text-sm sm:text-base hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-wrap justify-center gap-2 sm:space-x-2 mb-6 sm:mb-8">
            <motion.button
              onClick={() => setActiveTab("skills")}
              className={`px-4 sm:px-6 py-2 rounded-full font-medium text-sm sm:text-base ${
                activeTab === "skills"
                  ? "bg-indigo-600 dark:bg-indigo-500 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              } transition-colors`}
              whileHover={activeTab !== "skills" ? { scale: 1.05 } : {}}
              whileTap={{ scale: 0.95 }}
            >
              Skills
            </motion.button>
            <motion.button
              onClick={() => setActiveTab("education")}
              className={`px-4 sm:px-6 py-2 rounded-full font-medium text-sm sm:text-base ${
                activeTab === "education"
                  ? "bg-indigo-600 dark:bg-indigo-500 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              } transition-colors`}
              whileHover={activeTab !== "education" ? { scale: 1.05 } : {}}
              whileTap={{ scale: 0.95 }}
            >
              Education
            </motion.button>
            <motion.button
              onClick={() => setActiveTab("certifications")}
              className={`px-4 sm:px-6 py-2 rounded-full font-medium text-sm sm:text-base ${
                activeTab === "certifications"
                  ? "bg-indigo-600 dark:bg-indigo-500 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              } transition-colors`}
              whileHover={activeTab !== "certifications" ? { scale: 1.05 } : {}}
              whileTap={{ scale: 0.95 }}
            >
              Certifications
            </motion.button>
          </div>

          {/* Skills Tab Content */}
          {activeTab === "skills" && (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-3 sm:mb-4">
                  Frontend Development
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
                  {frontendSkills.map((skill) => (
                    <motion.div
                      key={skill.id}
                      variants={item}
                      className="flex flex-col items-center p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 mb-2">
                        {getIcon(skill.icon)}
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-3 sm:mb-4">
                  Backend Development
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
                  {backendSkills.map((skill) => (
                    <motion.div
                      key={skill.id}
                      variants={item}
                      className="flex flex-col items-center p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 mb-2">
                        {getIcon(skill.icon)}
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-3 sm:mb-4">
                  Tools & Technologies
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
                  {toolsSkills.map((skill) => (
                    <motion.div
                      key={skill.id}
                      variants={item}
                      className="flex flex-col items-center p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 mb-2">
                        {getIcon(skill.icon)}
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-3 sm:mb-4">
                  Other Skills
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
                  {otherSkills.map((skill) => (
                    <motion.div
                      key={skill.id}
                      variants={item}
                      className="flex flex-col items-center p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 mb-2">
                        {getIcon(skill.icon)}
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Education Tab Content */}
          {activeTab === "education" && (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-4 sm:space-y-6"
            >
              {educationData.map((edu) => (
                <motion.div
                  key={edu.id}
                  variants={item}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-wrap items-center mb-3 sm:mb-4 gap-2">
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium text-sm sm:text-base">
                      {edu.institution}
                    </span>
                    <span className="text-gray-400 hidden sm:inline">•</span>
                    <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Certifications Tab Content */}
          {activeTab === "certifications" && (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            >
              {certifications.map((cert) => (
                <motion.a
                  key={cert.id}
                  variants={item}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {cert.name}
                  </h3>
                  <div className="flex flex-wrap items-center mb-3 sm:mb-4 gap-2">
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium text-sm sm:text-base">
                      {cert.issuer}
                    </span>
                    <span className="text-gray-400 hidden sm:inline">•</span>
                    <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                      {cert.date}
                    </span>
                  </div>
                  <div className="mt-auto flex justify-end">
                    <motion.div
                      className="text-indigo-600 dark:text-indigo-400 font-medium text-sm sm:text-base"
                      whileHover={{ x: 5 }}
                    >
                      View Certification →
                    </motion.div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
