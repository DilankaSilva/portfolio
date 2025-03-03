import React from "react";
import { EXPERIENCE } from "../constants";

const Experience = () => {
  return (
    <section className="py-20 border-b border-neutral-800">
      <h2 className="mb-16 text-center text-4xl font-bold text-white">Experience</h2>
      <div className="max-w-6xl mx-auto">
        {EXPERIENCE.map((experience, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
            <div className="w-full text-center lg:w-2/5">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-4xl lg:w-3/5">
              <h6 className="mb-2 font-semibold">
                {experience.role} - <span> {experience.company} </span>
              </h6>
              <p className="mb-2 font-extralight">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
