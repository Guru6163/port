import React from "react";
import SocialContent from "../../common/social-content/SocialContent";
import "./About.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am 
          <br /><span className="info-name">GuruF</span>.
          <br /> I love experimenting the Web
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/coding1.png").default}
            className="picture"
          />
        </div>
      </div>
      <div className="about-bottom"></div>
      <SocialContent/>
    </div>
  );
}

export default About;
