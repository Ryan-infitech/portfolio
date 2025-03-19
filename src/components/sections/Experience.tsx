import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../../data";
import { Briefcase } from "lucide-react";

const Experience: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section className="min-h-full w-full bg-white dark:bg-gray-900 px-3 sm:px-6 py-8 sm:py-10 md:py-16 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Work{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Experience
            </span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            My professional journey and the companies I've had the pleasure to
            work with.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-indigo-200 dark:bg-indigo-900/30"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={item}
              className={`flex flex-col md:flex-row mb-8 sm:mb-10 md:mb-12 relative ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 sm:left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-indigo-600 dark:bg-indigo-400 z-10 flex items-center justify-center">
                <Briefcase size={12} className="sm:hidden text-white" />
                <Briefcase size={14} className="hidden sm:block text-white" />
              </div>

              {/* Content */}
              <div
                className={`md:w-1/2 ${
                  index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                } pl-10 sm:pl-16 md:pl-0`}
              >
                <motion.div
                  className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-1">
                    {exp.position}
                  </h3>
                  <div className="flex flex-wrap items-center mb-3 sm:mb-4 gap-2">
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium text-sm sm:text-base">
                      {exp.company}
                    </span>
                    <span className="text-gray-400 hidden sm:inline">•</span>
                    <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                      {exp.duration}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-600 dark:text-gray-300 flex items-start text-xs sm:text-sm"
                      >
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
