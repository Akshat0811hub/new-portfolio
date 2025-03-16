import React from 'react';
import '../value/Values.css'

const Values = ({ title, text }) => (
  <div className="values">
    <div className="values-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="values-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Values;