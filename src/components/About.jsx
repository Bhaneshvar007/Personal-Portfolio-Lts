
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold font-poppins text-navy mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-mint mx-auto mb-8"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl p-10 lg:p-12 border border-gray-100">
              <p className="text-gray-700 font-inter text-lg leading-relaxed">
                {portfolioData.personal.about}
              </p>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-mint/5 rounded-lg"
                >
                  <div className="text-3xl mb-2">🚀</div>
                  <h3 className="font-poppins font-semibold text-navy mb-2">Backend Development</h3>
                  <p className="text-gray-600 text-sm">Designing scalable APIs, business logic, and database-driven applications using .NET technologies.</p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-mint/5 rounded-lg"
                >
                  <div className="text-3xl mb-2">💡</div>
                  <h3 className="font-poppins font-semibold text-navy mb-2">Problem Solver</h3>
                  <p className="text-gray-600 text-sm">Building efficient solutions by analyzing requirements, optimizing performance, and solving complex technical challenges.</p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-mint/5 rounded-lg"
                >
                  <div className="text-3xl mb-2">📚</div>
                  <h3 className="font-poppins font-semibold text-navy mb-2">Continuous Learner</h3>
                  <p className="text-gray-600 text-sm">Passionate about learning new technologies, improving development practices, and staying updated with modern software trends.</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
