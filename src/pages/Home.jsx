import React from "react";
import owner from "../assets/IMG-20240217-WA0007.jpg";
import "../css/Home.css";

function Home() {
  return (
    <div className="main-main">
      <div className="main">
        <div className="main-img">
          <img src={owner} alt="" />
        </div>
      </div>
      <div className="main-body">
        <p className="name">
          <span>I'm Akshat.</span>
          <br />
          An experienced UX designer
          <br/>
        </p>
        <p className="main-body2">  This portfolio showcases my design experience, methods, and <br/>outcomes
        in crafting exceptional user experiences.</p>
      </div>
      <button className="show-more-btn">Show More</button>
    </div>
  );
}

export default Home;
