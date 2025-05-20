"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";


import bg from "../assets/bg7.png";

export default function Hero() {
  const words = ["Frontend", "Backend", "MERN Stack"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-4">
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center blur-sm brightness-[0.4] z-0"
        style={{
          backgroundImage: `url(${bg.src || bg})`,
          WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        }}
      />

      <motion.div
        className="relative z-10 text-center max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-xl md:text-2xl text-violet-400 mb-4 font-light"
          variants={itemVariants}
        >
          Hello, I am <span className="font-serif">S Mahesh Rao</span>
        </motion.h2>

        <motion.h1
          className="text-3xl md:text-6xl font-bold mb-6 text-white"
          variants={itemVariants}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              className="text-blue-400 inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {words[index]} <span className="text-white">Developer</span>
            </motion.span>
          </AnimatePresence>
        </motion.h1>

        <motion.p
          className="text-gray-300 md:text-lg max-w-xl mx-auto mb-8 leading-relaxed"
          variants={itemVariants}
        >
          I build modern, full-stack web applications using MongoDB, Express, React, and Node.js — from sleek user interfaces to powerful backend systems.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
          variants={itemVariants}
        >
          <motion.button
            className="px-6 py-3 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-all shadow-md hover:shadow-violet-400/40"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>
          <motion.button
            className="px-6 py-3 border border-violet-700 text-white rounded-full transition hover:bg-violet-700/20 hover:shadow-violet-300/30"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        <motion.div className="flex justify-center gap-6" variants={itemVariants}>
          <motion.a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="transition-transform"
          >
            <IoLogoLinkedin className="text-3xl text-blue-400" />
          </motion.a>
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="transition-transform"
          >
            <FaGithub className="text-3xl text-blue-400" />
          </motion.a>
        </motion.div>
         
      </motion.div>
      <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <MdOutlineKeyboardDoubleArrowDown className="text-4xl text-violet-400 animate-bounce" />
        </motion.div>
    </section>
  );
}