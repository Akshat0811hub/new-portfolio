import React from "react";
import "../css/Navbar.css";

function Navbar() {
  return (
    <>
       <div className="nav">
      <ul>
        <p>
          <a href="#">Home</a>
          <a href="#">Resume</a>
          <a href="#">Playbook</a>
          <a href="#">Contact</a>
          <a href="#">Work</a>
        </p>
      </ul>
    </div>
    </>
  );
}

export default Navbar;
