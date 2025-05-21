"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdWork } from "react-icons/md";
import SkillsSection from "../components/SkillSection";

const About = () => {
  return (
    <motion.div
    id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-white h-full max-w-7xl mx-auto px-6 py-16 rounded-lg"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-violet-500 mb-6">
          About Me
        </h1>
        <p className="font-serif md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          I’m a passionate full-stack web developer specializing in the MERN
          stack — MongoDB, Express.js, React, and Node.js. I love turning
          complex problems into elegant, user-friendly solutions.
        </p>
      </motion.div>

      <div className="md:flex gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 mb-16 md:mb-0"
        >
          <h3 className="text-2xl font-bold mb-6 text-blue-400 text-center">
            My Journey
          </h3>
          <div className="space-y-4 text-gray-400 font-medium md:text-lg leading-relaxed ">
            <p>
              My journey in web development began with curiosity about how
              websites work. This evolved into a passion for creating
              experiences that are both functional and beautiful.
            </p>
            <p>
              I’ve refined my skills in the MERN stack through various
              real-world projects like e-commerce platforms and social media
              apps. Every challenge taught me coding efficiency, UX, and
              problem-solving.
            </p>
            <p>
              I stay current with new technologies and methodologies, always
              pushing forward in this fast-evolving field.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <h2 className="text-2xl font-semibold text-blue-400 mb-6 text-center flex items-center justify-center gap-2">
        Experience
          </h2>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-yellow-400/20 transition-all"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              The Wagon House – Freelance Project (2023)
            </h3>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>
                Built the frontend for the admin dashboard using React and
                Tailwind CSS
              </li>
              <li>
                Integrated RESTful API endpoints and handled secure data flow
              </li>
              <li>
                Focused on user-friendly UI to manage listings, users, and
                sales reports
              </li>
              <li>
                Project: 2nd-hand car selling web app with modern design and
                responsive features
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20"
      >
        <SkillsSection />
      </motion.div>
    </motion.div>
  );
};

export default About;
