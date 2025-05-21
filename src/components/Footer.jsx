// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Branding */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            <span className="flex items-center gap-1 md:text-2xl text-xl">
     &lt;<span className="">MAHESH</span> /&gt;
  </span>
          </h1>
          
        </div>

        {/* Navigation */}
        <div className="flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-white transition duration-300">About</a>
          <a href="#project" className="hover:text-white transition duration-300">Projects</a>
          <a href="#contact" className="hover:text-white transition duration-300">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 text-2xl">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer"
            className="text-gray-400 hover:text-white hover:scale-110 transition transform duration-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer"
            className="text-gray-400 hover:text-white hover:scale-110 transition transform duration-300">
            <FaLinkedin />
          </a>
          
        </div>
      </div>

      {/* Divider and copyright */}
      <div className="border-t border-gray-800 mt-10 pt-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Mahesh. All rights reserved.
      </div>
    </footer>
  );
}
