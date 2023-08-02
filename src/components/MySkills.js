import React from "react";
import "./MySkills.css";
const Skills = () => {
  return (
    <div className="skills">
      <p>
        Being a tech-savvy individual, I'm well-versed in modern technologies
        and embrace them to enhance my productivity. As a fast learner, I
        quickly grasp new concepts and apply them to real-world scenarios.
      </p>
      <div className="skills-cards">
        <article className="skills-card">
          <i class="fa-brands fa-python" id="icon"></i>
          <h5>Python</h5>
        </article>

        <article className="skills-card">
          <i class="fa-brands fa-react" id="icon"></i>
          <h5>React JS</h5>
        </article>

        <article className="skills-card">
          <i class="fa-brands fa-node" id="icon"></i>
          <h5>Node JS</h5>
        </article>

        <article className="skills-card">
          <i class="fa-solid fa-database" id="icon"></i>
          <h5>SQL</h5>
        </article>

        <article className="skills-card">
          <i class="fa-brands fa-square-js" id="icon"></i>
          <h5>JavaScript</h5>
        </article>

        <article className="skills-card">
          <i class="fa-brands fa-html5" id="icon"></i>
          <h5>HTML</h5>
        </article>

        <article className="skills-card">
          <i class="fa-brands fa-css3-alt" id="icon"></i>
          <h5>CSS</h5>
        </article>

        <article className="skills-card">
          <i class="fa-brands fa-bootstrap" id="icon"></i>
          <h5>Bootstrap</h5>
        </article>

        <article className="skills-card">
          <i class="fa-brands fa-github" id="icon"></i>
          <h5>Github</h5>
        </article>
      </div>
    </div>
  );
};

export default Skills;
