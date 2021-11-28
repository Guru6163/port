import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import Separater from "../../common/separater/Separater";

function Projects() {
  const data = [
    {
      id: 1,
      title: "Random Project",
      about: 
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      tags: ["React JS", "Node JS"],
      github: "hjbdkdjb",
      demo:"kbdjsd",
      link:'www.google.com',
      image:
        "https://cdn.dribbble.com/users/2064121/screenshots/14825434/clothing_store_web_ui_2x_4x.png",
    },
    {
      id: 1,
      title: "Random Project",
      about: 
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      tags: ["React JS", "Node JS"],
      github: "hjbdkdjb",
      demo:"kbdjsd",
      link:'www.google.com',
      image: "https://miro.medium.com/max/1838/0*sx1O1tiPh06VnNsz.png",
    },
  ];
  return (
    <div className="projects">
      <Separater/>
      <lable className="section-title">Projects</lable>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project}/>;
        })}
      </div>
    </div>
  );
}

export default Projects;
