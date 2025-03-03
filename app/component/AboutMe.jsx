import React from "react";
import Image from "next/image";
import Profile from "../assets/profile0.jpg";
import { FaReact, FaNodeJs, FaDatabase, FaCode } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/4 relative h-80 overflow-hidden rounded-lg shadow-lg">
            <Image
              src={Profile}
              alt="Dilanka Silva"
              
              className="object-cover"
              objectPosition="center bottom"
              sizes="(max-width:300px) 100vw, 40vw"
            />
          </div>

          <div className="md:w-3/5">
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mb-6"></div>

            <p className="text-lg text-gray-300 mb-6">
              I am a highly motivated and dedicated student pursuing a degree in
              Computer Science and Statistics with a passion for developing
              robust and user-friendly software solutions. I have experience in
              front-end technologies like React and Next.js, as well as back-end
              technologies including Spring Boot, MySQL, and Oracle.
            </p>

            <p className="text-lg text-gray-300 mb-8">
              My goal is to leverage my skills and contribute to innovative
              projects while continuously learning and growing as a software
              engineer.
            </p>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <FaReact className="text-blue-400 text-2xl" />
                  <h3 className="text-xl font-semibold">Frontend</h3>
                </div>
                <p className="text-gray-400">
                  React, Next.js, HTML/CSS, JavaScript, 
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <FaNodeJs className="text-green-400 text-2xl" />
                  <h3 className="text-xl font-semibold">Backend</h3>
                </div>
                <p className="text-gray-400">
                  Spring Boot, Java
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <FaDatabase className="text-purple-400 text-2xl" />
                  <h3 className="text-xl font-semibold">Database</h3>
                </div>
                <p className="text-gray-400">
                  MySQL, Oracle, MongoDB
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <FaCode className="text-yellow-400 text-2xl" />
                  <h3 className="text-xl font-semibold">Other Skills</h3>
                </div>
                <p className="text-gray-400">
                  Git, Data Analysis, Statistics
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
