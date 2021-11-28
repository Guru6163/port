import React from "react";
import "./Skills.css";
import SkillCard from "./SkillCard";
import Separater from "../../common/separater/Separater";

function Skills() {
  const data = [
    {
      type: "Frontend",
      list: [
        {
          name: "React JS",
          icon: <i class="devicon-react-original colored"></i>,
        },
        {
          name: "Javascript",
          icon: <i class="devicon-javascript-plain colored"></i>,
        },
        {
          name: "Html",
          icon: <i class="devicon-html5-plain colored"></i>,
        },
        {
          name: "CSS",
          icon: <i class="devicon-html5-plain colored"></i>,
        },
      ],
    },
    {
      type: "Backend",
      list: [
        {
          name: "Python",
          icon: <i class="devicon-python-plain colored"></i>,
        },
        {
          name: "Django",
          icon: <i class="devicon-django-plain colored"></i>,
        },
      ],
    },
  ];
  return (
    <div>
      <Separater />

      <label className="section-title">Skills</label>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div className="skills-section">
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill) => {
                  return (
                    <div>
                      <SkillCard skill={skill} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
