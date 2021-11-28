import React from "react";
import "./WorkCard.css";
import WorkIcon from "@mui/icons-material/Work";

function WorkCard({ item }) {
  return (
    <div className="work-card">
      <img
        src={require("../../../assets/coding.png").default}
        className="work-logo"
      />
      <div className="work-info">
        <label className="company-name">{item.company}</label>
        <div className="work-dates">
          <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
        </div>
        <div>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
