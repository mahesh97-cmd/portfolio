"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RiArrowLeftWideFill } from "react-icons/ri";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { RxCrossCircled } from "react-icons/rx";

// Icons removed, add your own manually
// import { LiaSkullCrossbonesSolid } from "react-icons/lia";
// import { IoIosArrowDown, IoSearchSharp } from "react-icons/io5";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };
useEffect(()=>{
     const handleScroll=()=>{
      setHasScrolled(window.scrollY>10);
      
     }
window.addEventListener("scroll",handleScroll)
      return ()=> window.removeEventListener("scroll",handleScroll)


    },[])
  console.log(window.scrollY);
  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full h-20 flex items-center justify-between bg-transparent px-5  md:px-16 transition-transform duration-300 will-change-transform ${
          hasScrolled ? "border-b border-blue-600 backdrop-blur-sm shadow-gray-950 shadow-2xl" : ""
        }`}
      >
        <motion.a
          href="#hero"
          className="flex items-center gap-1 font-semibold text-white"
          onClick={(e) => handleLinkClick(e, "#hero")}
        >
          <span className="flex items-center gap-1 md:text-2xl text-xl">
            &lt;<span className="text-white">MAHESH</span> /&gt;
          </span>
        </motion.a>

        {/* Desktop Nav Items */}
        <ul className="hidden gap-8 md:flex">
          {navItems.map(({ label, href }) => (
            <motion.li
              key={href}
              className="text-white hover:text-pink-500"
              whileHover={{ scale: 1.2 }}
            >
              <a href={href} onClick={(e) => handleLinkClick(e, href)}>
                {label}
              </a>
            </motion.li>
          ))}
        </ul>

        <button
          className="block md:hidden"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`h-7 w-7 inline-block transform transition-transform duration-300 text-white ${
              isOpen ? "rotate-360" : ""
            }`}
          >
            {isOpen ? (
              <RxCrossCircled className="text-2xl" />
            ) : (
              <GiHamburgerMenu className="text-2xl" />
            )}
          </span>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 right-0 w-full bg-gray-900/90 px-5 py-4 shadow-lg  md:hidden"
          >
            {navItems.map(({ label, href }) => (
              <li
                key={href}
                className="border-b border-gray-700 py-2 last:border-none"
              >
                <a
                  href={href}
                  onClick={(e) => handleLinkClick(e, href)}
                  className="block text-white text-lg"
                >
                  {label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </nav>
    </>
  );
}
