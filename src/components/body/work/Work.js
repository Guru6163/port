import React from "react";
import "./Work.css";
import WorkCard from "./WorkCard";
import "../../common/separater/Separater";
import Separater from "../../common/separater/Separater";

function Work() {
  const data = [
    {
      company: "Bloomlync Technologies",
      deignation: "Software Intern",
      dateJoining: "02-08-2021",
      dateEnd: "Present",
      description:
      "Developing Applications across \n platforms using latest industry-adopted technologies and frameworks. Played a role in the development, improvement, and operation of web-based software. Gained hands-on expertise in Javascript, React JS and Django.",
      companyLogo:"http://18.116.212.192:7000/images/Logos/BloomLync-logo.png",
    },
  ];
  return (
    <div className="work">
      <Separater />
      <label className="section-title">Work</label>
      <div className="work-list">
        {data.map((item) => {
          return (
            <div>
              <WorkCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Work;
