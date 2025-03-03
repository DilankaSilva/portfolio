"use client";
// import { useState } from "react";
// import Link from "next/link";
// import { IoMenu } from "react-icons/io5";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="w-full text-white py-4 px-8 z-10">
//       <div className="container mx-auto flex items-center justify-between">
//         <h1 className="text-2xl font-bold">DilankaS.</h1>

//         <button
//           className="md:hidden focus:outline-none"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           <IoMenu className="w-6 h-8" />
//         </button>

//         <ul className="hidden md:flex gap-6">
//           <li>
//             <Link href="#hero" className="hover:text-gray-300">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="#about" className=" hover:text-gray-300">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link href="#experience" className="hover:text-gray-300">
//               Experience
//             </Link>
//           </li>
//           <li>
//             <Link href="#projects" className="hover:text-gray-300">
//               Projects
//             </Link>
//           </li>
//           <li>
//             <Link href="#contact" className="hover:text-gray-300">
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {isMenuOpen && (
//         <div className="md:hidden mt-4 py-2">
//           <ul className="flex flex-col space-y-4">
//             <li>
//               <Link
//                 href="#hero"
//                 className="block px-4 py-2 hover:bg-gray-700 rounded"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#about"
//                 className="block px-4 py-2 hover:bg-gray-700 rounded"
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#experience"
//                 className="block px-4 py-2 hover:bg-gray-700 rounded"
//               >
//                 Experience
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#projects"
//                 className="block px-4 py-2 hover:bg-gray-700 rounded"
//               >
//                 Projects
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#contact"
//                 className="block px-4 py-2 hover:bg-gray-700 rounded"
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
"use client";

import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { href: "hero", label: "Home" },
    { href: "about", label: "About" },
    { href: "technologies", label: "Skills" },
    { href: "experience", label: "Experience" },
    { href: "projects", label: "Projects" },
    { href: "contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-[#020617]/80 backdrop-blur-sm py-4 px-6 md:px-8 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="flex items-center justify-between">
        



        <a 
          href="#hero" 
          onClick={(e) => handleScroll(e, 'hero')}
          className="flex items-center"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
              DilankaS.
            </span>
          </h1>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 space-y-4">

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => handleScroll(e, link.href)}
              className="block text-gray-300 hover:text-white py-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div> 
      )}
    </nav>
  );
};

export default Navbar;