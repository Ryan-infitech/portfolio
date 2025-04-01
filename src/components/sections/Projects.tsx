import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data";
import { ExternalLink, Github, Filter } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Get unique technology tags
  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((project) => project.technologies.includes(filter));
  }, [filter]);

  // Animation variants
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
    <section className="min-h-full w-full bg-gray-50 dark:bg-gray-800 px-3 sm:px-6 py-8 sm:py-10 md:py-16 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
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

        {/* Projects Grid - Individual project cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col w-full"
              whileHover={{ y: -5 }}
            >
              {/* Project card image section */}
              <div
                className="h-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="h-full w-full bg-black bg-opacity-30 p-3 flex flex-col justify-between">
                  {/* Technologies badges */}
                  <div className="flex flex-wrap gap-1 justify-end">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-1.5 py-0.5 bg-black/40 backdrop-blur-sm text-white text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-1.5 py-0.5 bg-black/40 backdrop-blur-sm text-white text-xs rounded-md">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Project card content section */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-xs">
                  {project.description}
                </p>

                {/* Action buttons */}
                <div className="mt-auto flex gap-3">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs"
                      whileTap={{ scale: 0.95 }}
                      aria-label="View GitHub Repository"
                    >
                      <Github size={14} />
                      <span>View Code</span>
                    </motion.a>
                  )}

                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-indigo-600 text-white text-xs"
                      whileTap={{ scale: 0.95 }}
                      aria-label="Visit Live Website"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
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
            className="text-center py-8"
          >
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              No projects found with the selected filter. Try another technology
              filter.
            </p>
            <motion.button
              onClick={() => setFilter("all")}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm"
              whileTap={{ scale: 0.95 }}
            >
              Show All Projects
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
