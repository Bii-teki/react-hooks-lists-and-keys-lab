import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projects.map((items)=>
      <ProjectItem
      key={items.id}
      id={items.id}
      name={items.name}
      about={items.about}
      technologies={items.technologies}
      
      />

      )}</div>
    </div>
  );
}

export default ProjectList;
