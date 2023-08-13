import "./AboutContent.css";
import React from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1> About Me </h1>
        <p>
          Welcome to my portfolio!{" "}
          <span>
            Currently I'm working as Associate Software Developer specially on
            Data Integration Platforms at RESKOM Solutions.
          </span>{" "}
        </p>
        <p>
          I'm a Dedicated software developer with a focus on creating seamless
          data integration solutions. Experienced in designing and implementing
          robust data pipelines that drive efficiency and enable informed
          decision-making. Committed to staying at the forefront of emerging
          technologies and continuously enhancing my skills to deliver
          innovative solutions. Let's connect and collaborate to bring
          data-driven visions to life.
        </p>
        <p>
          Being a tech-savvy individual, I'm well-versed in modern technologies
          and embrace them to enhance my productivity. As a fast learner, I
          quickly grasp new concepts and apply them to real-world scenarios.
        </p>
        <p>
          I believe in the power of teamwork and am known for being a reliable
          team player, contributing positively to collective efforts. My passion
          for Software field drives me to constantly seek innovation and find
          solutions that create meaningful impacts.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutContent;
