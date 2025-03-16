import React from 'react';
import '../value/Values.css'

const Values = ({ title, text }) => (
  <div className="values">
    <div className="values-title">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  </div>
);

export default Values;