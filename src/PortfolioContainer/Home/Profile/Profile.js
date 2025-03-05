import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="cols-icon">
              <a href="https://github.com/minhkhoiv12" target="_blank" rel="noopener noreferrer" style={{ marginRight: "7px" }}>
                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: "black" }} />
              </a>
            
              <a href="https://www.linkedin.com/in/khoi-minh-tran-017977352" target="_blank" rel="noopener noreferrer">
               <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: "black" }} />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Khoi</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev 😎",
                    1000,
                    "Backend Developer 💻",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with back end operations.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
