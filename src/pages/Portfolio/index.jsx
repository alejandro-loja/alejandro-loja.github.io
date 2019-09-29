import React from "react";
import { ProjectCard } from "../../components/ProjectCard";
import projects from "../../portfolioInfo.json";

function Portfolio() {
  return (
    <div className="mb-4">
      <div className="offset-lg-1 offset-xl-2 col-xl-8 col-lg-10 col-sm-12 shadow border bg-white">
        <h2 className="m-4">Portfolio</h2>
        <hr />
        <div className="row justify-content-around">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              src={project.image}
              alt={project.title}
              title={project.title}
              /// desc={project.desc}
              gitLink={project.github}
              siteLink={project.website}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
