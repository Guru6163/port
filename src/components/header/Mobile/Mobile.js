import React from "react";
import "./Mobile.css";
import CancelSharpIcon from "@mui/icons-material/CancelSharp";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={()=>setIsOpen(!isOpen)}>
          <CancelSharpIcon/>
      </div>
      <div className="mobile-options">
      <div className="mobile-option">
        <a href="#project">Projects</a>
      </div>
      <div className="mobile-option">
        <a href="#skills">Skills</a>
      </div>
      <div className="mobile-option">
        <a href="#work">Work</a>
      </div>
      <div className="mobile-option">
        <a href="#contact">Contact</a>
      </div>

      </div>
    </div>
  );
}

export default Mobile;
