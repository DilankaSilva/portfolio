import React from "react";
import Image from "next/image";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section className="py-20 border-b border-neutral-800">
      <h2 className="mb-16 text-center text-4xl font-bold text-white">Projects</h2>
      <div className="max-w-6xl mx-auto">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
            <div className="w-full flex justify-center lg:justify-start lg:w-1/4">
              <Image
                src={project.image}
                alt={project.title}
                height={150}
                width={150}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-4xl lg:w-3/5">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology, index) =>(
                  <span key={index} className="rounded bg-neutral-900 px-2 py-2 text-sm font-medium text-purple-800">
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;