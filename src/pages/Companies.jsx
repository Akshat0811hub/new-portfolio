import React from "react";
import "../css/Companies.css";
import Blog from '../components/Blog/Blog.jsx'
import {
  Klarna,
  Qapital,
  Readly,
  Spotify,
  Trustly,
  Zettle,
} from "../components/Pictures";

const Companies = () => {
  return (
    <div className="company-component">
      <div className="company-component-heading">
        <h1>
          I’ve worked as a<span> senior UX designer</span> and in
          <span> design leadership </span> roles for:
        </h1>
      </div>
      <div className="components-img">
        <div className="components-group">
          <Blog
            imgUrl={Klarna}
            title="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Blog
            imgUrl={Qapital}
            title="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Blog
            imgUrl={Readly}
            title="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Blog
            imgUrl={Spotify}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Blog
            imgUrl={Trustly}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Blog
            imgUrl={Zettle}
            title="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          </div>
      </div>
    </div>
    
  );
};

export default Companies;
