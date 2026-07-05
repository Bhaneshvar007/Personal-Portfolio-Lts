
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-poppins text-navy mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-mint mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== portfolioData.experience.length - 1 && (
                <div className="absolute left-4 top-8 w-0.5 h-full bg-mint/30"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-2 top-2 w-4 h-4 bg-mint rounded-full border-2 border-white shadow-lg"></div>

              {/* Content */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 ml-4"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-poppins text-navy">
                      {exp.role}
                    </h3>
                    <p className="text-mint font-semibold font-inter">
                      {exp.company}
                    </p>
                  </div>
                  <span className="bg-mint/10 text-navy px-4 py-2 rounded-full text-sm font-semibold mt-2 md:mt-0 self-start">
                    {exp.duration}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <motion.li
                      key={respIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: (index * 0.2) + (respIndex * 0.1) }}
                      className="flex items-start"
                    >
                      <span className="text-mint mr-3 mt-1">▸</span>
                      <span className="text-gray-700 font-inter">
                        {responsibility}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
