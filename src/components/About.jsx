"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaDatabase } from "react-icons/fa";
import { FaServer } from "react-icons/fa6";
import { IoCode } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";
import SkillsSection from "../components/SkillSection";

const About = () => {
  return (
    <motion.div
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
          <div className="space-y-5 text-gray-300 font-semibold md:text-lg leading-relaxed">
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
          <h2 className="text-2xl font-semibold text-blue-400 mb-6 text-center">
            My Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center text-lg font-medium">
            {[{
              icon: <FaDatabase className="text-3xl text-emerald-400" />,
              name: "MongoDB",
              desc: "NoSQL database for modern applications"
            }, {
              icon: <FaServer className="text-3xl text-gray-300" />,
              name: "Express",
              desc: "Fast, unopinionated web framework for Node.js"
            }, {
              icon: <IoCode className="text-3xl text-sky-400" />,
              name: "React",
              desc: "JavaScript library for building UIs"
            }, {
              icon: <FaGlobe className="text-3xl text-lime-400" />,
              name: "Node",
              desc: "JavaScript runtime for server-side apps"
            }].map((tech, i) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800 border border-blue-500 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition-transform"
              >
                <div className="flex flex-col items-center gap-3">
                  {tech.icon}
                  <h3 className="text-xl font-semibold text-white">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-400">{tech.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
