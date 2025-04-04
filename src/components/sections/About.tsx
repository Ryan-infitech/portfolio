import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Download,
  Mail,
  MapPin,
  Clock,
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

  return (
    <section className="min-h-full w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-2">
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              Me
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tech enthusiast with a passion for creating digital experiences
          </p>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Bio & Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Profile Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-[5/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <img
                  src={profileImage}
                  alt="Rian Septiawan"
                  className="w-full h-full object-cover"
                />
                <h2 className="absolute bottom-4 left-6 text-white text-2xl font-bold z-20">
                  Rian Septiawan
                </h2>
              </div>

              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <Mail size={18} className="text-indigo-500" />
                    <a
                      href="mailto:rianseptiawan@infitech.or.id"
                      className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                    >
                      rianseptiawan@infitech.or.id
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <MapPin size={18} className="text-indigo-500" />
                    <span>Padang, Indonesia</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <Clock size={18} className="text-green-500" />
                    <span className="text-green-600 dark:text-green-400">
                      Available for hire
                    </span>
                  </div>
                </div>
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-medium rounded-xl transition-all shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={18} />
                  Download Resume
                </motion.a>
              </div>
            </div>

            {/* Bio */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <span className="h-8 w-1 bg-indigo-500 rounded-full inline-block"></span>
                Professional Profile
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  I'm a passionate Tech Enthusiast with a deep interest in both
                  technology and multimedia. My journey began with a fascination
                  for web development, leading me to specialize in creating
                  responsive, user-friendly interfaces using React, and building
                  robust backend systems with Laravel.
                </p>
                <p>
                  I am currently pursuing my studies at Universitas Negeri
                  Padang, majoring in Educational Technology Informatics. This
                  academic path allows me to blend my technical skills with a
                  passion for teaching and sharing knowledge.
                </p>
                <p>
                  Beyond coding, I have a strong appreciation for creativity,
                  which I express through tools like Blender, Photoshop, and AI
                  Image Generators. These skills enable me to create unique,
                  engaging experiences that merge technology and art.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Tabs Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7"
          >
            {/* Tabs Navigation */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-2 mb-6">
              <div className="grid grid-cols-3 gap-2">
                {["skills", "education", "certifications"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`py-3 px-4 rounded-xl font-medium text-sm transition-all relative ${
                      activeTab === tab
                        ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content Container */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 min-h-[500px]">
              <AnimatePresence mode="wait">
                {/* Skills Content */}
                {activeTab === "skills" && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    {/* Frontend Skills */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                          <Code
                            size={14}
                            className="text-blue-600 dark:text-blue-400"
                          />
                        </div>
                        <h4 className="font-semibold text-gray-800 dark:text-white">
                          Frontend Development
                        </h4>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {frontendSkills.map((skill) => (
                          <motion.div
                            key={skill.id}
                            whileHover={{ scale: 1.03 }}
                            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-750 border border-gray-200 dark:border-gray-700 p-3 rounded-lg flex items-center gap-2"
                          >
                            <span className="text-indigo-600 dark:text-indigo-400">
                              {getIcon(skill.icon)}
                            </span>
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {skill.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Backend Skills */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
                          <Server
                            size={14}
                            className="text-green-600 dark:text-green-400"
                          />
                        </div>
                        <h4 className="font-semibold text-gray-800 dark:text-white">
                          Backend Development
                        </h4>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {backendSkills.map((skill) => (
                          <motion.div
                            key={skill.id}
                            whileHover={{ scale: 1.03 }}
                            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-750 border border-gray-200 dark:border-gray-700 p-3 rounded-lg flex items-center gap-2"
                          >
                            <span className="text-indigo-600 dark:text-indigo-400">
                              {getIcon(skill.icon)}
                            </span>
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {skill.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Other Skill Groups */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="h-6 w-6 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center">
                          <Box
                            size={14}
                            className="text-purple-600 dark:text-purple-400"
                          />
                        </div>
                        <h4 className="font-semibold text-gray-800 dark:text-white">
                          Tools & Technologies
                        </h4>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {toolsSkills.map((skill) => (
                          <motion.div
                            key={skill.id}
                            whileHover={{ scale: 1.03 }}
                            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-750 border border-gray-200 dark:border-gray-700 p-3 rounded-lg flex items-center gap-2"
                          >
                            <span className="text-indigo-600 dark:text-indigo-400">
                              {getIcon(skill.icon)}
                            </span>
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {skill.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="h-6 w-6 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center">
                          <Users
                            size={14}
                            className="text-amber-600 dark:text-amber-400"
                          />
                        </div>
                        <h4 className="font-semibold text-gray-800 dark:text-white">
                          Other Skills
                        </h4>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {otherSkills.map((skill) => (
                          <motion.div
                            key={skill.id}
                            whileHover={{ scale: 1.03 }}
                            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-750 border border-gray-200 dark:border-gray-700 p-3 rounded-lg flex items-center gap-2"
                          >
                            <span className="text-indigo-600 dark:text-indigo-400">
                              {getIcon(skill.icon)}
                            </span>
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {skill.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Education Content */}
                {activeTab === "education" && (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative">
                      <div className="absolute left-[14px] top-0 bottom-0 w-1 bg-indigo-200 dark:bg-indigo-900/50"></div>

                      {educationData.map((edu) => (
                        <div key={edu.id} className="relative mb-8 pl-10">
                          <div className="absolute left-0 top-0 h-7 w-7 rounded-full bg-indigo-500 border-4 border-white dark:border-gray-800"></div>
                          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                              {edu.degree}
                            </h4>
                            <div className="flex flex-wrap gap-2 items-center mb-3">
                              <span className="font-medium text-indigo-600 dark:text-indigo-400">
                                {edu.institution}
                              </span>
                              <div className="inline-flex px-2.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-xs rounded-full">
                                {edu.duration}
                              </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                              {edu.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Certifications Content */}
                {activeTab === "certifications" && (
                  <motion.div
                    key="certifications"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid grid-cols-1 gap-4">
                      {certifications.map((cert) => (
                        <motion.a
                          key={cert.id}
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02, y: -2 }}
                          className="group block bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-750 p-5 rounded-xl shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700 transition-all"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-bold text-gray-800 dark:text-white text-lg mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {cert.name}
                              </h4>
                              <p className="text-indigo-600 dark:text-indigo-400">
                                {cert.issuer}
                              </p>
                            </div>
                            <div className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium rounded-md">
                              {cert.date}
                            </div>
                          </div>
                          <div className="mt-4 flex justify-end">
                            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                              View Certificate{" "}
                              <span className="text-xs">→</span>
                            </span>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
