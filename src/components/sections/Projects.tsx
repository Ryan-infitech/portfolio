import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data";
import { ExternalLink, Github, X, Filter } from "lucide-react";

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  // Get unique technology tags from all projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter projects based on selected filter
  const filteredProjects = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((project) => project.technologies.includes(filter));
  }, [filter]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-full w-full bg-gray-50 dark:bg-gray-800 px-3 sm:px-6 py-8 sm:py-10 md:py-16 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Projects
            </span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Here's a selection of my recent work. Each project represents unique
            challenges and solutions built with modern technologies.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="mb-6 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex justify-center mb-3 sm:mb-4">
            <motion.button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 text-xs sm:text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter size={16} className="mr-1.5 sm:mr-2" />
              Filter Projects
              <span className="ml-1.5 sm:ml-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-xs rounded-full px-1.5 py-0.5 sm:px-2 sm:py-0.5">
                {filter === "all" ? "All" : filter}
              </span>
            </motion.button>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-2 max-w-4xl mx-auto">
                  <motion.button
                    onClick={() => setFilter("all")}
                    className={`px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm rounded-full ${
                      filter === "all"
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    All Projects
                  </motion.button>

                  {allTechnologies.map((tech) => (
                    <motion.button
                      key={tech}
                      onClick={() => setFilter(tech)}
                      className={`px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm rounded-full ${
                        filter === tech
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Project Count */}
        <motion.p
          className="text-center text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-xs sm:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Showing {filteredProjects.length} of {projects.length} projects
        </motion.p>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col h-full"
              whileHover={{ y: -5 }}
            >
              <div
                className="h-36 sm:h-44 md:h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="h-full w-full bg-black bg-opacity-30 p-2 sm:p-3 md:p-4 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-1 sm:gap-2 justify-end">
                    {project.technologies.slice(0, 2).map((tech, index) => (
                      <span
                        key={index}
                        className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-black/40 backdrop-blur-sm text-white text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-black/40 backdrop-blur-sm text-white text-xs rounded-md">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>

                  <motion.button
                    className="self-center px-3 py-1 sm:px-4 sm:py-2 mt-auto bg-indigo-600/90 backdrop-blur-sm text-white rounded-md font-medium text-xs sm:text-sm hover:bg-indigo-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveProject(project.id)}
                  >
                    View Details
                  </motion.button>
                </div>
              </div>

              <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-grow">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-1 sm:mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 line-clamp-3 flex-grow text-xs sm:text-sm">
                  {project.description}
                </p>

                <div className="mt-auto flex space-x-2 sm:space-x-3">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 sm:p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="View GitHub Repository"
                    >
                      <Github size={16} className="sm:hidden" />
                      <Github size={18} className="hidden sm:block" />
                    </motion.a>
                  )}

                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 sm:p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Visit Live Website"
                    >
                      <ExternalLink size={16} className="sm:hidden" />
                      <ExternalLink size={18} className="hidden sm:block" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No projects found message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8 sm:py-12"
          >
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4">
              No projects found with the selected filter. Try another technology
              filter.
            </p>
            <motion.button
              onClick={() => setFilter("all")}
              className="px-4 py-2 sm:px-6 sm:py-2 bg-indigo-600 text-white rounded-md text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Show All Projects
            </motion.button>
          </motion.div>
        )}

        {/* Project Details Modal */}
        <AnimatePresence>
          {activeProject !== null && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-3 sm:p-4 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {projects.find((p) => p.id === activeProject) && (
                  <>
                    <div className="relative">
                      <div
                        className="h-48 sm:h-64 md:h-72 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${
                            projects.find((p) => p.id === activeProject)?.image
                          })`,
                        }}
                      >
                        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                      </div>
                      <motion.button
                        className="absolute top-3 sm:top-4 right-3 sm:right-4 p-1.5 sm:p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70"
                        onClick={() => setActiveProject(null)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <X size={18} className="sm:hidden" />
                        <X size={20} className="hidden sm:block" />
                      </motion.button>
                    </div>

                    <div className="p-4 sm:p-6 md:p-8">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
                        {projects.find((p) => p.id === activeProject)?.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
                        {
                          projects.find((p) => p.id === activeProject)
                            ?.description
                        }
                      </p>

                      <div className="mb-6 sm:mb-8">
                        <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-3 sm:mb-4">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {projects
                            .find((p) => p.id === activeProject)
                            ?.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 sm:px-3 sm:py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-md text-xs sm:text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 sm:gap-4">
                        {projects.find((p) => p.id === activeProject)
                          ?.github && (
                          <motion.a
                            href={
                              projects.find((p) => p.id === activeProject)
                                ?.github
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg flex items-center text-xs sm:text-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github
                              size={16}
                              className="mr-1.5 sm:mr-2 sm:hidden"
                            />
                            <Github
                              size={20}
                              className="mr-2 hidden sm:block"
                            />
                            View Code
                          </motion.a>
                        )}

                        {projects.find((p) => p.id === activeProject)?.link && (
                          <motion.a
                            href={
                              projects.find((p) => p.id === activeProject)?.link
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 sm:px-6 sm:py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg flex items-center text-xs sm:text-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink
                              size={16}
                              className="mr-1.5 sm:mr-2 sm:hidden"
                            />
                            <ExternalLink
                              size={20}
                              className="mr-2 hidden sm:block"
                            />
                            Live Demo
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
