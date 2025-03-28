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
            title="Senior product Designer"
            text="Online check-out and in-store"
          />
          <Blog
            imgUrl={Qapital}
            title="Director of Product Design"
            text="Investment and saving App"
          />
          <Blog
            imgUrl={Readly}
            title="Experience Design Lead"
            text="Online checkout and In-store"
          />
          <Blog
            imgUrl={Spotify}
            date="Senior Product Designer"
            text="Editorial playlist web application"
          />
          <Blog
            imgUrl={Trustly}
            date="UX Strategist and Advisor"
            text="Open banking for payments"
          />
          <Blog
            imgUrl={Zettle}
            title="Area Design Lead"
            text="Financial Services"
          />
          </div>
      </div>
    </div>
    
  );
};

export default Companies;
