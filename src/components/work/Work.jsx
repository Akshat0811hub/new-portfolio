import React from 'react'
import '../work/Work.css'


const Work = ({ title, text }) => (
    <div className="work">
      <div className="work-title">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );

export default Work