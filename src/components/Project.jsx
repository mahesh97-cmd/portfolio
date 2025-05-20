"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "LoveMate",
    description:
      "A modern dating app with real-time chat, interest requests, profile editing, and swipe-based discovery. Built using MERN + Cloudinary + Tailwind.",
    link: "https://lovemate.vercel.app",
    github: "https://github.com/yourusername/lovemate",
    tags: ["MERN", "Tailwind","Cloudinary", "Nodemailer"],
  },
  {
    title: "Jugaad Chef",
    description:
      "AI-powered recipe improviser using Gemini API. Enter ingredients, get delicious recipes with instructions. Fully responsive design.",
    link: "#",
    github: "https://github.com/yourusername/jugaad-chef",
    tags: ["MERN", "Gemini API", "AI"],
  },
  {
  title: "SubhAvasar Backend",
  description:
    "Robust backend for an event management platform. Built with Node.js and Express, it supports vendor onboarding, user bookings, image uploads via Cloudinary, email notifications using Nodemailer.",
  link: "#", // You can replace this with API docs or Postman collection link if available
  github: "https://github.com/yourusername/subhavasar-backend", // Replace with your actual GitHub repo
  tags: ["Node.js", "Express", "Cloudinary", "Nodemailer", "REST API"],
},
{
  title: "AI Email Generator",
  description:
    "A full-stack AI-powered email generator that crafts professional emails based on structured input like sender role, email type, and tone. The backend uses Node.js and Gemini AI to generate emails, while the frontend offers a clean, user-friendly interface with real-time results.",
  link: "https://yourfrontendurl.com", // Replace with live link if hosted
  github: "https://github.com/yourusername/ai-email-generator", // Replace with your repo
  tags: ["Node.js", "Gemini AI","TailwindCSS",],
},
{
  title: "UrbanSpice - Food Delivery App",
  description:
    "A sleek food delivery platform that fetches real-time restaurant and menu data using Swiggy's API. Built with a responsive frontend and seamless user experience, it mimics core functionalities of modern food delivery services.",
  link: "https://yourfrontendurl.com", // Replace with your live demo link if hosted
  github: "https://github.com/yourusername/urbanspice", // Replace with your actual repo link
  tags: ["React", "TailwindCSS", "Swiggy API", "Food Delivery", "Frontend"],
}



];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-20 px-6" id="projects">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <h2 className="text-4xl font-bold text-violet-500 mb-6">My Projects</h2>
        <p className="text-gray-300 text-lg mb-16 max-w-3xl mx-auto">
          Explore some of my recent work — blending functionality, design, and performance.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl border border-violet-700 hover:scale-[1.03] hover:shadow-violet-500/20 transition-all duration-300 group relative overflow-hidden"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-violet-700/20 border border-violet-700 text-sm px-2 py-1 rounded-md text-violet-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-blue-400 text-lg">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="hover:text-white transition" />
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="hover:text-white transition" />
                </a>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition duration-300 bg-violet-400 blur-xl"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
