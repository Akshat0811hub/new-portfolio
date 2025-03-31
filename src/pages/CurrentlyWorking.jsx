import React from "react";
import qapital from "../assets/Qapital.png";
import styles from "../css/currentlyWorking.module.css";
import StyledChip from "../components/StyledChip/index";


const CurrentlyWorking = () => {
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
          I’m<span>currently working</span> with Qapital to enhance their
          <span>invoicing product.</span>
        </h1>
      </div>
      <div className={styles.companyPhoto}>
        <img src={qapital} alt="iphoneimg" />
        <h1>Senior UX Design Lead</h1>
        <p>
          Paypals invoicing product offers flexibility, allowing merchants to
          <br></br> create and send customized invoices directly to their
          customers, who<br></br> can then complete transactions swiftly using
          their preferred payment<br></br> method with or without a PayPal
          account.
        </p>
      </div>
      <div className={styles.chipsContainer}>
        {skills.map((skill, index) => (
          <StyledChip key={index} name={skill} />
        ))}
      </div>
    </div>
  );
};

export default CurrentlyWorking;
