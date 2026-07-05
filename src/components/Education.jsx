
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-poppins text-navy mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-mint mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line - left on mobile, center on md+ */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-1 h-full bg-mint/30"></div>

          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-6 h-6 bg-mint rounded-full border-4 border-white shadow-lg z-10"></div>

              {/* Content card */}
              <div className="w-full pl-12 md:pl-0 md:w-5/12 md:px-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{edu.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold font-poppins text-navy">
                        {edu.degree}
                      </h3>
                      <p className="text-mint font-semibold">{edu.field}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-gray-700 font-inter font-semibold">
                      {edu.institute}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">{edu.year}</span>
                      <span className="bg-mint text-navy px-3 py-1 rounded-full text-sm font-semibold">
                        {edu.percentage}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Empty space for alternating layout (desktop only) */}
              <div className="hidden md:block md:w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
