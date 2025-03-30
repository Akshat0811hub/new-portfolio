import React from "react";
import './Industry.css'

const Industry = ({ text }) => {
  return (
    <div className="indus-component">
      <div className="indus-compo">
        <div className="indus-component-info">
          <h3>{text}</h3>
        </div>
      </div>
    </div>
  );
};

export default Industry;
