import React from "react";
import qapital from "../../assets/Qapital.avif";
import styles from "./style.module.css";
import StyledChip from "../StyledChip/index";
import { Tooltip } from "react-tooltip";
import tooltip1 from '../../assets/tooltip1.png'
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
        data-tooltip-html={`<img src ="${tooltip1}" alt ="Tooltip image"/>`}>Show More</button>
      <Tooltip id="my-tooltip0" />
      <div className={styles.downArrow}>
        {/* <img src = {Arrow}></img> */}
      </div>
    </div>
  );
};

export default MoreAbout;
