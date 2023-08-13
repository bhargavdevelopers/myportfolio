import React from "react";
import { Link } from "react-router-dom";
import "./Heroimg.css";
import bg1 from "../assets/bg1.jpg";
import Resume from "../assets/Bhargav_Resume.pdf";
const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={bg1} alt="bg-img" className="into-img" />
      </div>
      <div className="content">
        <p> Hi, I'M Bhargav </p>
        <h1>Full-Stack Developer</h1>
        <p className="me">
          Welcome to my portfolio! I am working as a Associate Software
          Developer with Data Integration Platforms at RESKOM Solutions.
        </p>
        <div>
          <a href={Resume} download className="btn">
            {" "}
            MY Resume{" "}
          </a>
          <Link to="/contact" className="btn btn-light">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
