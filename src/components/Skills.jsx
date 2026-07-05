
import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animatedSkills, setAnimatedSkills] = useState([]);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimatedSkills(portfolioData.skills);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-poppins text-navy mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-mint mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-poppins font-semibold text-navy">
                    {skill.name}
                  </h3>
                  <span className="text-mint font-bold">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-mint to-mint/80 h-full rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Categories */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center p-6 bg-gradient-to-br from-mint/5 to-mint/10 rounded-2xl">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-poppins font-bold text-navy mb-2">
                Full Stack Development
              </h3>
              <p className="text-gray-600 text-sm">
                ASP.NET Core, React.js, REST APIs, SQL Server
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-mint/5 to-mint/10 rounded-2xl">
              <div className="text-4xl mb-4">🗄️</div>
              <h3 className="font-poppins font-bold text-navy mb-2">
                Database & APIs
              </h3>
              <p className="text-gray-600 text-sm">
                SQL Server, PostgreSQL, Entity Framework
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-mint/5 to-mint/10 rounded-2xl">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-poppins font-bold text-navy mb-2">
                Tools & Deployment
              </h3>
              <p className="text-gray-600 text-sm">
                Git, IIS, Postman, Visual Studio
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
