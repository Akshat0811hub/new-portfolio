import React from "react";
import styles from "../css/doktor.module.css";
import StyledChip from "../components/StyledChip/index";
import readly from "../assets/doktor.avif";
import tooltip1 from "../assets/tooltip1.png";

const Doktor = () => {
  const skills = [
    "DESIGN STRATEGY",
    "DISCOVERY",
    "PROTOTYPING",
    "CONCEPT",
    "HANDS ON",
    "APP",
    "STARTUP",
    "EXPERIENCE VISION",
    "PRODUCT DELIVERY",
  ];
  return (
    <div className={styles.companyComponent}>
      <div className={styles.companyPhoto}>
        <img src={readly} alt="iphoneimg" />
        <h1>DOKTOR <span>24</span></h1>
        <h2>Senior UX Designer</h2>
        <p>
        Together with the founder of Aleris X, we created the initial concepts<br></br> of a better and more human-focused healthcare app that later <br></br>became Doktor24 and Platform24 - with a vision to create a healthier <br></br>world by delivering preventive and accessible care services on <br></br>patients' terms. 
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

export default Doktor;
