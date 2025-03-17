import React from "react";
import Values from "../components/value/Values";
import Work from "../components/work/Work";
import '../css/Value.css'

const Value = () => (
  <div className="main-value-input">
    <div className="value-heading">
      <Values
        title="Value in the lives of others"
        text="I am driven by a desire to improve the lives of others. My passion lies in enhancing user  experiences and leading projects towards positive outcomes. I believe in a human-centered approach that unlocks business value by providing genuine customer value." />
    </div>
    <div className="three-components">
      <div className="work-heading">
        <Work
          title="Work"
          text="I am a designer who uses design tools to effectively communicate ideas and desired outcomes to achieve a shared understanding. Collaboration is key to my work, and I am an active listener who works effectively with stakeholders from diverse disciplines to achieve the best possible outcome."/>
      </div>
      <div className="work-heading">
        <Work
          title="Strategy"
          text="Design is a vital business tool that allows us to proactively and continually learn about our users' behavior, needs, and expectations. I strongly believe that when we becomes an expert on our users, it puts us in a better position to set a direction and follow our vision together, and achieving a strategic advantage."/>
      </div>
      <div className="work-heading">
        <Work
          title="Leadership"
          text="In my experience, changes come from the bottom up. The same goes for leadership. I am committed to helping others succeed by creating a collaborative work environment and empowering my team members to reach their full potential. When we encourage and help our peers grow, they will follow and contribute at their best."/>
      </div>
    </div>

  </div>
);

export default Value;
