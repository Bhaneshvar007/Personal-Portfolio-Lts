
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = portfolioData.personal.roles;

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const shouldDelete = isDeleting;
    const shouldComplete = displayText === currentRole;

    const timeout = setTimeout(() => {
      if (shouldDelete) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }

      if (shouldComplete && !shouldDelete) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (shouldDelete && displayText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    }, shouldDelete ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  const handleDownloadCV = () => {
    // Create a dummy CV download
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1eob8Ep0fj79WkOnfk5PsjAezF97bKN16/view?usp=sharing';
    link.target = '_blank';
    link.download = 'Bhaneshvar_Kshirsagar_CV.pdf';
    link.click();
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-navy to-navy/90 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 lg:pr-12 text-center lg:text-left"
          >
            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-mint font-inter text-lg mb-4"
            >
              Hello, my name is
            </motion.p> */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins mb-4"
            >
              <span className="text-white">Hi, I'm </span>
              <span className="text-mint">{portfolioData.personal.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-poppins mb-8 h-12"
            >
              <span className="text-gray-300">I'm a </span>
              <span className="text-mint">
                {displayText}
                <span className="typewriter-cursor">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-gray-300 font-inter text-lg mb-8 max-w-2xl"
            >
              {portfolioData.personal.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className="bg-mint text-navy px-8 py-3 rounded-lg font-poppins font-semibold hover:bg-mint/90 transition-colors duration-300 shadow-lg"
              >
                Download
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="border-2 border-mint text-mint px-8 py-3 rounded-lg font-poppins font-semibold hover:bg-mint hover:text-navy transition-all duration-300"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-mint shadow-2xl bg-navy"
              >
                <img
                  src={portfolioData.personal.profileImage}
                  alt="Bhaneshvar Kshirsagar"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>


              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-mint rounded-full opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-mint/30 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
