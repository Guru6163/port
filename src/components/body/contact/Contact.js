import React from "react";
import "./Contact.css";
import SocialContent from "../../common/social-content/SocialContent";
import Separater from "../../common/separater/Separater";
function Contact() {
  return (
    <div className="contact">
      <Separater />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContent />
        </div>
        <div className="download">
          <a download href={require("../../../assets/Resume.pdf").default}>
          <i class="fi fi-ss-Cloud-download"></i>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
