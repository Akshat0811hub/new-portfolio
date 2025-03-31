import React from "react";
import qliro from "../assets/qliro.avif" 
import styles from "../css/qliro.module.css";
import StyledChip from "../components/StyledChip/index";
import tooltip1 from "../assets/tooltip1.png";

const Qliro = () => {
  const skills = [
    "FINTECH",
    "PRODUCT DELIVERY",
    "DISCOVERY",
    "VISUAL DESIGN",
    "HANDS-ON",
    "IN-STORE",
    "PROTOTYPING",
    "VISION",
    "DESIGN PRINCIPLES",
    "WEB",
    "APP",
  ];
  return (
    <div className={styles.companyComponent}>
      <div className={styles.companyPhoto}>
        <img src={qliro} alt="iphoneimg" />
            <h3>QLIRO</h3>
        <h1>Senior UX Designer</h1>
        <p>
          I had the opportunity to work with the Qliro checkout team. Our team{" "}
          <br></br>designed a new checkout experience for seamless shopping
          online<br></br> and in-store. Today, the product is available at many
          leading online<br></br> stores.
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

export default Qliro;
