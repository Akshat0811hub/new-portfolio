import React from "react";
import qapital from "../../assets/Qapital.avif";
import styles from "./style.module.css";
import StyledChip from "../StyledChip/index";
import { Tooltip } from "react-tooltip";
import tooltip1 from "../../assets/tooltip1.png";

// import {Arrow} from '../../assets/DownFinal.webp'

const MoreAbout = () => {
  const skills = [
    "LEADERSHIP",
    "DESIGN STRATEGY",
    "EXPERIENCE LED",
    "FINTECH",
    "STRATEGIC RESEARCH",
    "EXPERIENCE VISION",
    "STAFF",
    "STAKEHOLDER MANAGEMENT",
  ];
  return (
    <div className={styles.companyComponent}>
      <div className={styles.companyComponentHeading}>
        <h1>
          I believe <span>in balancing </span>strategic work{" "}
          <span>with strong</span> hands-on execution.
        </h1>
      </div>
      <div
        style={{
          height: "200px",
          border: 1,
          width: "50%",
          alignSelf: "center",
          transform: "rotate(25deg)",
        }}
      >
        <img style={{ height: "350px" }} src={qapital} alt="iphoneimg" />
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
      <Tooltip id="my-tooltip0" />
      <div className={styles.downArrow}>
        {/* <img src = {Arrow}></img> */}
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
          style={{width: "100%", height: "100%"}}
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </div>
  );
};

export default MoreAbout;
