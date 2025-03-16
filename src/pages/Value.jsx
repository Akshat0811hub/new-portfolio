import React from "react";
import Values from "../components/value/Values";
import Work from "../components/work/Work";

const Value = () => (
  <div className="main-value-input">
    <div className="value-heading">
      <Values
        title="Value in the lives of others"
        text="I am driven by a desire to improve the lives of others. My passion lies in enhancing user  experiences and leading projects towards positive outcomes. I believe in a human-centered approach that unlocks business value by providing genuine customer value."/>
    </div>
    <div className="work-heading">
        <Work
            title="Work"
            text= "I am a designer who uses design tools to effectively communicate ideas and desired outcomes to achieve a shared understanding. Collaboration is key to my work, and I am an active listener who works effectively with stakeholders from diverse disciplines to achieve the best possible outcome."/>
    </div>
  </div>
);

export default Value;
