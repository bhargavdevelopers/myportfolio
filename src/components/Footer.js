import React from "react";
import "./Footer.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
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
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />{" "}
              9398400519
            </h4>
          </div>
          <div className="email">
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            />{" "}
            <h4>gbhargav.engineer@gmail.com</h4>
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
