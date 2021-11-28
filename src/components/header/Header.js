import React, { useState } from "react";
import "./Header.css";
import Web from "./Web/Web";
import Mobile from "./Mobile/Mobile";
import AppsIcon from "@mui/icons-material/Apps";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">GuruF</div>
      <div className="menus">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <AppsIcon />
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
