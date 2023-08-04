import React from "react";
import "./Footer.css";
import { FaHome, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{
                color: "#fff",
                marginRight: "1rem",
                marginTop: "0.4rem",
              }}
            />
            <div>
              <p>Bhavani Nagar, Kukatpally.</p>
              <p>Hyderbad.</p>
            </div>
          </div>
          <div className="icon">
            <FaPhone size={20} style={{ color: "#fff", marginRight: "1rem" }} />{" "}
            <span>9398400519</span>
          </div>
          <div className="icon">
            <BiLogoGmail
              size={20}
              style={{
                color: "#fff",
                marginRight: "1rem",
                marginTop: "0.5rem",
              }}
            />{" "}
            <span>gbhargav.engineer@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <h4>Bhargav Gudumala</h4>
          <p>Full-stack Developer</p>
          <div className="social">
            <FaLinkedin
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaGithub
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-copyright">
        <small>&copy; Bhargav Portfolio. All rights reserved</small>
      </div>
    </div>
  );
};

export default Footer;
