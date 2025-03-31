import React from "react";
import styles from "../css/trustly.module.css";
import StyledChip from "../components/StyledChip/index";
import readly from "../assets/viaplay.avif";
import tooltip1 from "../assets/tooltip1.png";

const Viaplay = () => {
  const skills = [
    "LEAD DESIGNER",
    "RESEARCH LEAD",
    "PROTOTYPING",
    "CONCEPT",
    "DISCOVERY",
    "VISUAL DESIGN",
    "MULTIPLE PLATFORMS",
    "EXPERIENCE VISION",
    "HANDS ON",
    
  ];
  return (
    <div className={styles.companyComponent}>
      <div className={styles.companyPhoto}>
        <img src={readly} alt="iphoneimg" />
        <h1>Viaplay</h1>
        <h2>Experience Design Lead</h2>
        <p>
          I contributed to the development of Viafree's latest sports
          initiative.<br></br> The goal was to engage sports enthusiasts with
          the most recent and<br></br> relevant sports updates within an
          attractive narrative setup with <br></br>fewer interruptions
          (advertisements).
        </p>
      </div>
      <div className={styles.chipsContainer}>
        {skills.map((skill, index) => (
          <StyledChip key={index} name={skill} />
        ))}
      </div>
      <button
        className={styles.showMore}
        data-tooltip-id="my-tooltip0"
        data-tooltip-html={`<img src ="${tooltip1}" alt ="Tooltip image"/>`}
      >
        Show More
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="104"
        height="8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--token-62bbe694-f81c-4b28-9b0c-7bbb4c39e2b9, #b8b8b8)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        style={{ width: "100%", height: "100%" }}
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <polyline points="19 12 12 19 5 12"></polyline>
      </svg>
    </div>
  );
};

export default Viaplay;
