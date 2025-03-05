import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "Backend Developer with experience in Node.js, database management, and Docker. I have proven expertise in designing and implementing backend systems, building RESTful APIs, and efficiently managing databases. I am also proficient in creating comprehensive Technical Specification Documents (TSD), including ERD, CDM, PDM, ACTIVITY, SEQUENCE. My goal is to contribute to the development of robust and reliable systems while ensuring effective communication within development teams.",
    highlights: {
      bullets: [
        "Backend development using Node.js (Express)",
        "Designing & managing databases (MongoDB, MySQL, SQL Server)",
        "Version control with Git and GitHub",
        "Cloud deployment and backend hosting (AWS, Vercel)",
        "Building REST API",
        "Managing database",
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Let me tell you a bit about myself?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div 
  className="about-me-options" 
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  {/* <button className="btn primary-btn"> Hire Me </button> */}
  <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
    <button className="btn highlighted-btn">Get Resume</button>
  </a>
</div>

          </div>
        </div>
      </div>
    </div>
  );
}
