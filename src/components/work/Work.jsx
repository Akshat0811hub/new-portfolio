import React from "react";
import "../work/Work.css";

const Work = ({ title, text }) => (
  <div className="work-main">
    <div className="work-title">
      <h1>{title}</h1>
      <div className="work-text">
        <p>{text}</p>
      </div>
    </div>
  </div>
);

export default Work;
