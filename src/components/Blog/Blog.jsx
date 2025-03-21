import React from "react";
import "./Blog.css";

const Blog = ({ title, text, imgUrl }) => {
  return (
    <div className="company-component">
      <div className="component-image">
        <img src={imgUrl} alt="component_image" />
      </div>
      <div className="company-component-info">
        <p>{title}</p>
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default Blog;
