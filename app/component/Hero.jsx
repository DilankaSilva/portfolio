import React from "react";
import Image from "next/image";
import Profile from "../assets/profile.jpg";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const Hero = () => {
  return (
    <div className="text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-center">
        <div className="md:w-2/5 ml-40 mt-10 md:mt-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500 relative">
                <Image
                  src={Profile}
                  alt="Dilanka Silva"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="md:w-3/5 md:pl-16">
            <div className="inline-block bg-gray-800 px-3 py-1 rounded-full mb-4">
              <span className="text-sm">Full Stack Developer</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
                Dilanka Silva
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl">
              I am a highly motivated and dedicated student pursuing a degree in
              Computer Science and Statistics with a passion for developing
              robust and user-friendly software solutions.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="/DilankaSilva.pdf"
                download
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium rounded-md transition-transform hover:scale-105"
              >
                <HiDownload className="text-lg" />
                Download Resume
              </a>
              <div className="flex gap-4">
                <div className="flex justify-center gap-4 mt-2 sm:mt-0">
                  <a
                    href="https://github.com/DilankaSilva"
                    className="p-3 rounded-full bg-neutral-800 text-white hover:bg-neutral-700 transition-colors"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dilanka-silva-0890152b7"
                    className="p-3 rounded-full bg-neutral-800 text-white hover:bg-neutral-700 transition-colors"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
 
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;